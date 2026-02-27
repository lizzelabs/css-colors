import type { HSLA, RGBA } from "@/types";
import { makeRgbFromHsla } from "./makeRgbFromHsla";


export const makeRgbaFromHsla = (color: HSLA): RGBA => {
    const rgb = makeRgbFromHsla(color);
    const alpha = color.alpha > 1 ? color.alpha / 100 : color.alpha;
    const raw = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
    
    return {
        type: 'RGBA',
        red: rgb.red,
        green: rgb.green,
        blue: rgb.blue,
        alpha,
        raw,
    } satisfies RGBA;
}