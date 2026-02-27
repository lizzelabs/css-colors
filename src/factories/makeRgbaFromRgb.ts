import type { RGB, RGBA } from "@/types";

export const makeRgbaFromRgb = (color: RGB): RGBA => {
    return {
        type: 'RGBA',
        red: color.red,
        green: color.green,
        blue: color.blue,
        raw: `rgba(${color.red}, ${color.green}, ${color.blue}, 1)`,
        alpha: 1
    } as const;
}