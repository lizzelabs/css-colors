/* eslint-disable @typescript-eslint/no-explicit-any */

import type { RGB } from "@/types";

export type MakeRGB = {
    (rgb: Omit<RGB, 'raw'> | RGB): RGB;
    (red: number, green: number, blue: number): RGB;
    (str: string): RGB;
}

const makeFromRgb = (rgb: Omit<RGB, 'raw'> | RGB): RGB => {
    const raw = (rgb as any).raw ? (rgb as any).raw : `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;

    return {
        ...rgb,
        type: 'RGB',
        raw
    };
};

const makeFromParameters = (red: number, green: number, blue: number): RGB => {
    const raw = `rgb(${red}, ${green}, ${blue})`;

    return {
        type: 'RGB',
        red,
        green,
        blue,
        raw,
    }
}

const makeFromString = (rgb: string): RGB => {
    const [red, green, blue] = rgb
                                .split(',')
                                .map(value => +value.replace(/\D+/g, ''));
    return {
        type: 'RGB',
        red: red || 0,
        green: green || 0,
        blue: blue || 0,
        raw: `rgb(${red || 0}, ${green || 0}, ${blue || 0})`
    };
}

export const makeRgb: MakeRGB = (...input: any[]): RGB => {
    if (typeof input[0] === 'object') {
        return makeFromRgb(input[0]);
    } else if (typeof input[0] === 'string') {
        return makeFromString(input[0]);
    } else {
        return makeFromParameters(input[0] || 0, input[1] || 0, input[2] || 0);
    }
}
