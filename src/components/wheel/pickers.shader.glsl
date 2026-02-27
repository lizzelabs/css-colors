#version 300 es

precision highp float;
precision highp sampler2D;

uniform vec2 u_pickers[#PICKERS_LENGTH];
uniform int u_pickers_count;
uniform vec2 u_resolution;
uniform sampler2D u_previous;
uniform int u_picker_selected_index;
uniform bool u_free_move;


out vec4 paint;

struct Picker {
    vec4 overlay;
    float border;
    float opacity;
};

Picker newPicker(vec4 overlay, float border) {
    Picker picker;

    picker.overlay = overlay;
    picker.border = border;
    picker.opacity = 0.35;

    return picker;
}

float drawPizza(float border, float projection, vec2 location, vec2 center) {
    float PICKER_CIRCLE = 8.0;
    float PICKER_BORDER = 3.0;

    if (projection < 0.0) {
        float pickerRadius = dot(location, location);
        float inner = (PICKER_CIRCLE - PICKER_BORDER) * (PICKER_CIRCLE - PICKER_BORDER);
        float outer = (PICKER_CIRCLE + PICKER_BORDER) * (PICKER_CIRCLE + PICKER_BORDER);
        float current = smoothstep(inner, inner + (PICKER_BORDER * 0.3), pickerRadius) -
                smoothstep(outer - (PICKER_BORDER * 0.3), outer, pickerRadius);


        return max(border, current);
    } else {
        vec2 direction = normalize(center);
        float d = length(center);
        float projection = dot(location, direction);
        float projClamped = clamp(projection, 0.0, d);
        float side = length(location - projClamped * direction);
        float t = projClamped / d;
        float invT = 1.0 - t;
        float maxRadius = PICKER_CIRCLE + PICKER_BORDER;
        float radius = maxRadius * invT;
        float feather = PICKER_BORDER * 0.2;
        float coneMask = smoothstep(radius, radius - feather, side);
        float maskCentro = smoothstep(d, d - feather, projection);
        float stretchedRing = coneMask * maskCentro;
 
        return max(border, stretchedRing);
    }
}


float drawCircle(float currentBorder, vec2 location, vec2 center) {
    float pickerCircle = 2.8;
    float pickerBorder = 0.3;
    float pickerRadius = length(location);
    float inner = (pickerCircle - pickerBorder) * (pickerCircle - pickerBorder);
    float outer = (pickerCircle + pickerBorder) * (pickerCircle + pickerBorder);
    float currentCircle = smoothstep(inner, inner + (pickerBorder * 0.1), pickerRadius) - 
        smoothstep(outer - (pickerBorder * 0.1), outer, pickerRadius);

    return max(currentBorder, currentCircle);
}

Picker drawPicker(vec2 pixel, vec2 center) {
    float currentBorder = 0.0;
    vec4 baseOverlay = vec4(0.0, 0.0, 0.0, 1.0);

    for (int i = 0; i < u_pickers_count; i++)  {
        vec2 picker = u_pickers[i];
        vec2 location = pixel - picker;
        vec2 fromPixelToCenter = center - picker;
        float projection = dot(location, fromPixelToCenter);
        float selected = step(float(u_picker_selected_index) - 0.1, float(i)) * step(float(i), float(u_picker_selected_index) + 0.1);

        currentBorder = u_free_move ? drawCircle(currentBorder, location, fromPixelToCenter) : drawPizza(currentBorder, projection, location, fromPixelToCenter);
    }

    return newPicker(baseOverlay, currentBorder);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 pixel = gl_FragCoord.xy;
    vec2 center = u_resolution * 0.5;
    Picker picker = drawPicker(pixel, center);

    paint = mix(
        texture(u_previous, uv), 
        picker.overlay, 
        picker.border * picker.opacity
    );
}
