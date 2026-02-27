import { makeRgbFromHsl } from "./makeRgbFromHsl";
import { makeHexFromRgb } from "./makeHexFromRgb";
import type { HEX, HSL } from "@/types";

export const makeHexFromHsl = (color: HSL): HEX => {
    return makeHexFromRgb(
        makeRgbFromHsl(color)
    );
}