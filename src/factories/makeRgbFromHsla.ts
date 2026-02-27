/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HSLA, RGB } from "@/types";
import { makeRgbFromHsl } from "./makeRgbFromHsl";

export const makeRgbFromHsla = (color: HSLA): RGB => {
    return makeRgbFromHsl(color as any);
}