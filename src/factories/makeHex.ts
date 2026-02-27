import type { HEX } from "@/types";

export const makeHex = (raw: string | HEX): HEX =>  {
    return typeof raw === 'string' ? {
        type: 'HEX',
        raw,
    } as const : raw as HEX;
}