import type { HSL, HSLA } from "@/types";

export const makeHslFromHsla = (color: HSLA): HSL => {
    const raw = `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;

    return {
        type: 'HSL',
        hue: color.hue,
        saturation: color.saturation,
        lightness: color.lightness,
        raw,
    };
}