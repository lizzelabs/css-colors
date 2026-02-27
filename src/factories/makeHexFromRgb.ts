import type { RGB, HEX } from "@/types";
import { makeHex } from "./makeHex";

export const makeHexFromRgb = (rgb: RGB): HEX => {
    const HEX = `#` + (
        (1 << 24) + 
        (rgb.red << 16) +
        (rgb.green << 8) + 
        rgb.blue
    ).toString(16).slice(1).toUpperCase();

    return makeHex(HEX);
}