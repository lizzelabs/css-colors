/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RGBA } from "@/types";

export type MakeRGBA = {
    (rgba: Omit<RGBA, 'raw'> | RGBA): RGBA;
    (red: number, green: number, blue: number, alpha: number): RGBA;
    (rgba: string): RGBA;
}

const makeFromRgba = (rgba: Omit<RGBA, 'raw'> | RGBA): RGBA => {
    const alpha = rgba.alpha > 1 ? rgba.alpha / 100 : rgba.alpha;
    const raw = (rgba as any).raw ? (rgba as any).raw : `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${alpha})`;

    return {
        ...rgba,
        type: 'RGBA',
        alpha,
        raw
    };
};

const makeFromParameters = (red: number, green: number, blue: number, a: number): RGBA => {
    const alpha = a > 1 ? a / 100 : a;
    const raw = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    return {
        type: 'RGBA',
        red,
        green, 
        blue,
        alpha,
        raw,
    }
}

export const makeFromString = (rgba: string): RGBA => {
    const [red, green, blue, a] = rgba.split(', ')
                                          .map(value => +value.replace(/\D+/g, ''));
    const alpha = a > 1 ? a / 100 : a || 1;

    return {
        type: 'RGBA',
        red: red || 0,
        green: green || 0,
        blue: blue || 0,
        alpha,
        raw: `rgba(${red || 0}, ${green || 0}, ${blue || 0}, ${alpha})` 
    };
}

export const makeRgba: MakeRGBA = (...input: any[]): RGBA => {
    if (typeof input[0] === 'object') {
        return makeFromRgba(input[0]);
    } else if (typeof input[0] === 'string') {
        return makeFromString(input[0]);
    } else {
        return makeFromParameters(input[0] || 0, input[1] || 0, input[2] || 0, input[3]);
    }
}
