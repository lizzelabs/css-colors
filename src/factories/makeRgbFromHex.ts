import type { HEX, RGB } from "@/types";
import { makeRgbaFromHex } from "./makeRgbaFromHex";

export const makeRgbFromHex = (color: HEX): RGB => {
    const rgba = makeRgbaFromHex(color);
    const raw = `rgb(${rgba.red}, ${rgba.green}, ${rgba.blue})`;
    
    return { 
        type: 'RGB',
        red: rgba.red,
        green: rgba.green,
        blue: rgba.blue,
        raw,
    };
};