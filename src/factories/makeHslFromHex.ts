import type { HEX, HSL } from "@/types";
import { makeHslFromRgb } from "./makeHslFromRgb";
import { makeRgbFromHex } from "./makeRgbFromHex";


export const makeHslFromHex = (color: HEX): HSL => {
    return makeHslFromRgb(makeRgbFromHex(color));
}