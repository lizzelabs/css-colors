#version 300 es

precision highp float;
precision highp int;

uniform vec2 u_resolution;
uniform float u_darkness;
out vec4 paint;

vec3 hslToRgb(vec3 hsl) {
    vec3 rgb = clamp(
        abs(mod(hsl.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0,
        0.0,
        1.0
    ); 

    return hsl.z + hsl.y * (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0));
}

void main() {
    vec2 position = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
    position.x *= u_resolution.x / u_resolution.y;
    float radius = length(position);
    float angle = atan(position.y, position.x);
    float hue = angle / 6.28318530718 + 0.5;
    float saturation = radius;
    vec3 rgb = hslToRgb(vec3(hue, saturation, u_darkness));
    float circle = 1.0;
    float smoothing = 0.01;
    float mask = 1.0 - smoothstep(circle - smoothing, circle + smoothing, radius);
    paint = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(rgb, 1.0), mask);
}