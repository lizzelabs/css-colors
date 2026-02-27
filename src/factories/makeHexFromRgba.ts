import type { HEX, RGBA } from "@/types";

export const makeHexFromRgba = (color: RGBA): HEX => {
    const value = (`#` + (
        (1 << 24) + 
        (color.red << 16) + 
        (color.green << 8) + 
        color.blue
    )
        .toString(16)
        .slice(1)
        .toUpperCase());

    const alpha = Math.round(255 * color.alpha).toString(16).slice(-2).padStart(2, '0').toUpperCase()

    return {
        type: 'HEX',
        raw: `${value}${alpha}`
    }
}