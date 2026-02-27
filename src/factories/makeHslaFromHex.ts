import type { HEX, HSLA } from "@/types";
import { makeHslaFromRgba } from "./makeHslaFromRgba";
import { makeRgbaFromHex } from "./makeRgbaFromHex";

export const makeHslaFromHex = (input: HEX) : HSLA => {
    return makeHslaFromRgba(makeRgbaFromHex(input));
}