import type { Action, Reducer, State } from "@/types";

export const makeReducer = <
    S extends State, 
    Props, 
    R extends Reducer<S, Props>,>
(reducer: R, props: Props) => {
    return (
        prevState: S, 
        action: Action<Props, S, R>
    ) => reducer[action.type]({ prevState,  props }, action.value);
};