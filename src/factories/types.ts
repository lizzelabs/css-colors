import type { ColorValue, ValidColors } from "@/types";

export type ColorsMap = {
    [current in ValidColors]: {
        [to in ValidColors]: (value: ColorValue<current>) => ColorValue<to>;
    };
};