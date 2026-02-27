import type { HSL, HSLA } from "@/types";

export const makeHslaFromHsl = (color: HSL): HSLA => {
    const raw = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, 1)`;

    return {
        type: 'HSLA',
        hue: color.hue,
        saturation: color.saturation,
        lightness: color.lightness,
        alpha: 1,
        raw
    };
}