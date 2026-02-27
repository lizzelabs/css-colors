import type { HSLA, RGB } from "@/types";
import { makeHslFromRgb } from "./makeHslFromRgb";

export const makeHslaFromRgb = (color: RGB): HSLA => {
    const hsl = makeHslFromRgb(color);

    return {
        type: 'HSLA',
        hue: hsl.hue,
        saturation: hsl.saturation,
        lightness: hsl.lightness,
        alpha: 1,
        raw: `hsla(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%, 1)`
    };
}