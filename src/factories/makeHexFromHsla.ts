import type { HEX, HSLA } from "@/types";
import { makeHexFromRgba } from "./makeHexFromRgba";
import { makeRgbaFromHsla } from "./makeRgbaFromHsla";

export const makeHexFromHsla = (color: HSLA): HEX => {
    return makeHexFromRgba(
        makeRgbaFromHsla(color)
    );
}