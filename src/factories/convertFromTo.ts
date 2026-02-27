 
import type { ColorsMap } from "./types";
import { makeRgbFromHex } from "./makeRgbFromHex";
import { makeHslaFromHex } from "./makeHslaFromHex";
import { makeHslFromHex } from "./makeHslFromHex";
import { makeRgbaFromHex } from "./makeRgbaFromHex";
import { makeHexFromRgb } from "./makeHexFromRgb";
import { makeRgbaFromRgb } from "./makeRgbaFromRgb";
import { makeHslFromRgb } from "./makeHslFromRgb";
import { makeHslaFromRgb } from "./makeHslaFromRgb";
import { makeHexFromRgba } from "./makeHexFromRgba";
import { makeRgbFromRgba } from "./makeRgbFromRgba";
import { makeHslFromRgba } from "./makeHslFromRgba";
import { makeHslaFromRgba } from "./makeHslaFromRgba";
import { makeRgbFromHsl } from "./makeRgbFromHsl";
import { makeHexFromHsl } from "./makeHexFromHsl";
import { makeRgbaFromHsl } from "./makeRgbaFromHsl";
import { makeHslaFromHsl } from "./makeHslaFromHsl";
import { makeHexFromHsla } from "./makeHexFromHsla";
import { makeRgbFromHsla } from "./makeRgbFromHsla";
import { makeRgbaFromHsla } from "./makeRgbaFromHsla";
import { makeHslFromHsla } from "./makeHslFromHsla";

export const ConvertFromTo: ColorsMap = {
    HEX: {
        HEX: (value) => value,
        RGB: makeRgbFromHex,
        RGBA: makeRgbaFromHex,
        HSL: makeHslFromHex,
        HSLA: makeHslaFromHex
    },
    RGB: {
        HEX: makeHexFromRgb,
        RGB: (value) => value,
        RGBA: makeRgbaFromRgb,
        HSL: makeHslFromRgb,
        HSLA: makeHslaFromRgb
    },
    RGBA: {
        HEX: makeHexFromRgba,
        RGB: makeRgbFromRgba,
        RGBA: (value) => value,
        HSL: makeHslFromRgba,
        HSLA: makeHslaFromRgba
    },
    HSL: {
        HEX: makeHexFromHsl,
        RGB: makeRgbFromHsl,
        RGBA: makeRgbaFromHsl,
        HSL: (value) => value,
        HSLA: makeHslaFromHsl,
    },
    HSLA: {
        HEX: makeHexFromHsla,
        RGB: makeRgbFromHsla,
        RGBA: makeRgbaFromHsla,
        HSL: makeHslFromHsla,
        HSLA: (value) => value,
    }
}