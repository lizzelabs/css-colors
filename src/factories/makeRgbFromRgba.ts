import type { RGB, RGBA } from "@/types";

export const makeRgbFromRgba = (color: RGBA): RGB => {
    return {
        type: 'RGB',
        red: color.red,
        green: color.green,
        blue: color.blue,
        raw: `rgb(${color.red}, ${color.green}, ${color.blue})`
    };
}