/* eslint-disable @typescript-eslint/no-explicit-any */

import type { HSLA } from "@/types";

export type MakeHSLA = {
    (hsla: Omit<HSLA, 'raw'> | HSLA): HSLA;
    (hue: number, saturation: number, lightness: number, alpha: number): HSLA;
    (hsla: string): HSLA;
}

const makeFromHSLA = (hsla: Omit<HSLA, 'str'> | HSLA): HSLA => {
    const alpha = hsla.alpha > 1 ? hsla.alpha / 100 : hsla.alpha;
    const raw = (hsla as any).raw ? (hsla as any).str : `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${alpha})`;

    return {
        type: 'HSLA',
        hue: hsla.hue,
        saturation: hsla.saturation,
        lightness: hsla.lightness,
        alpha,
        raw
    };
};

const makeFromParameters = (hue: number, saturation: number, lightness: number, a: number): HSLA => {
    const alpha = a > 1 ? a / 100 : a;
    const raw = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

    return {
        type: 'HSLA',
        hue,
        saturation,
        lightness,
        alpha,
        raw,
    }
}

const makeFromString = (value: string): HSLA => {
    const [hue, saturation, lightness, a] = value
                                                    .split(',')
                                                    .map(word => +word.replace(/\D+/g, ''));
    const alpha = a > 1 ? a / 100 : a;
    
    return {
        type: 'HSLA',
        hue,
        saturation,
        lightness,
        alpha,
        raw: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
    }
}

export const makeHSLA: MakeHSLA = (...input: any[]): HSLA => {
    if (typeof input[0] === 'object') {
        return makeFromHSLA(input[0]);
    } else if (typeof input === 'string') {
        return makeFromString(input[0]);
    } else {
        return makeFromParameters(input[0] || 0, input[1] || 0, input[2] || 0, input[3] || 1);
    }
}
