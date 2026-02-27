/* eslint-disable @typescript-eslint/no-explicit-any */

import type { HSL } from "@/types";

export type MakeHSL = {
    (hsl: Omit<HSL, 'raw'> | HSL): HSL;
    (hue: number, saturation: number, lightness: number): HSL;
    (hsl: string): HSL;
}

const makeFromHSL = (hsl:  Omit<HSL, 'raw'> | HSL): HSL => {
    const raw = (hsl as any).raw ? (hsl as any).raw : `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;

    return {
        type: 'HSL',
        hue: hsl.hue,
        lightness: hsl.lightness,
        saturation: hsl.saturation,
        raw,
    };
};

const makeFromParameters = (hue: number, saturation: number, lightness: number): HSL => {
    const raw = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return {
        type: 'HSL',
        hue,
        lightness,
        saturation,
        raw,
    }
}

const makeFromString = (hsl: string): HSL => {
    const [hue, saturation, lightness] = hsl.split(',')
                                            .map(value => +value.replace(/\D+/g, ''));
    return {
        type: 'HSL',
        hue,
        saturation,
        lightness,
        raw: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    };
} 

export const makeHSL: MakeHSL = (...input: any[]): HSL => {
    if (typeof input[0] === 'object') {
        return makeFromHSL(input[0]);
    } else if (typeof input[0] === 'string') {
        return makeFromString(input[0] as string);
    } else {
        return makeFromParameters(input[0] || 0, input[1] || 0, input[2] || 0);
    }
}
