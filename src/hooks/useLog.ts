/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { CssColorsUtils } from '@/utils';


export const useLog = (componentName: string) => {
    const info = useCallback((message: string, force: boolean, ...obj: any) => {
        CssColorsUtils.Logs.info(componentName, message, force);
        CssColorsUtils.Logs.obj(force, obj);
    }, [componentName]);


    const error = useCallback((message: string, force: boolean, ...obj: any) => {
        CssColorsUtils.Logs.error(componentName, message, force);
        CssColorsUtils.Logs.obj(force, obj);
    }, [componentName]);

    const warning = useCallback((message: string, force: boolean, ...obj: any) => {
        CssColorsUtils.Logs.warn(componentName, message, force);
        CssColorsUtils.Logs.obj(force, obj);
    }, [componentName]);

    const custom = useCallback((message: string, force: boolean, background = '#CCC', color = '#333', ...obj: any) => {
        CssColorsUtils.Logs.custom(componentName, message, force, background, color);
        CssColorsUtils.Logs.obj(obj);
    }, [componentName]);

    return { info, error, warning, custom };
}