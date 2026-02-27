/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AnyValidColor, ColorValue, ValidColors } from "@/types";
import { ConvertFromTo } from "./convertFromTo";

export const makeCurrentColorTo = <Current extends AnyValidColor, To extends ValidColors>(
    color: Current, 
    to: To
): ColorValue<To>  => {
    return ConvertFromTo[color.type][to](color as any) as ColorValue<To>;
}