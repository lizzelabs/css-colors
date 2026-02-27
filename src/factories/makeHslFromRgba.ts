import type { HSL, RGBA } from "@/types";
import { makeHslFromRgb } from "./makeHslFromRgb";

export const makeHslFromRgba = (color: RGBA): HSL => {
    return makeHslFromRgb({ 
        ...color,
        type: 'RGB'
    });
}