import type { InvalidColor } from "@/types";

export const makeInvalidColor = (): InvalidColor => {
    return {
        type: 'INVALID',
        raw: null as never
    };
}