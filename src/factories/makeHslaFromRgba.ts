import type { HSLA, RGBA } from "@/types";
import { makeHslFromRgba } from "./makeHslFromRgba";

export const makeHslaFromRgba = (color: RGBA): HSLA => {
    const hsl = makeHslFromRgba(color);
    const alpha = color.alpha > 1 ? color.alpha / 100 : color.alpha;
    const raw = `hsla(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%, ${alpha})`;

    return {
        type: 'HSLA',
        hue: hsl.hue,
        saturation: hsl.saturation,
        lightness: hsl.lightness,
        alpha,
        raw,
    } satisfies HSLA;
}