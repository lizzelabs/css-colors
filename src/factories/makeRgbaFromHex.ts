import type { HEX, RGBA } from "@/types";
import { CssColorsUtils } from "@/utils";


export const makeRgbaFromHex = (color: HEX): RGBA => {
    const safeValue = ((color.raw || '').length <= 4 ? color.raw!.split('').map(word => word + word).join('').replace('#', '') : color.raw!).replace('#', '');
    const hasAlpha = safeValue.length >= 7;
    const red = parseInt(safeValue.slice(0, 2), 16);
    const green = parseInt(safeValue.slice(2, 4), 16);
    const blue = parseInt(safeValue.slice(4, 6), 16);
    const alpha = CssColorsUtils.round(parseInt(safeValue.slice(6, 8) || '', 16) / 255, 1);
    const raw =`rgba(${red}, ${green}, ${blue}, ${alpha})`;
    
    return {
        type: 'RGBA',
        red,
        green,
        blue,
        raw,
        alpha: hasAlpha ? alpha : 1,
    };
}