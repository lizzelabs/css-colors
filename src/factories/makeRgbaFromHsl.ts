import type { HSL, RGBA } from "@/types";
import { makeRgbFromHsl } from "./makeRgbFromHsl";


export const makeRgbaFromHsl = (color: HSL): RGBA => {
    const rgb = makeRgbFromHsl(color);
    const raw = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, 1)`;

    return {
        ...rgb,
        type: 'RGBA',
        raw,
        alpha: 1,
    };
}