/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LastFn, SyncFn, Value } from './types';

export function flow<T>(): (input: T) => T;

export function flow<
  Fns extends readonly [SyncFn<any, any>, ...SyncFn<any, any>[]],
>(...fns: Fns): (input: Parameters<Fns[0]>[0]) => ReturnType<LastFn<Fns>>;

export function flow(...fns: Array<(arg: any) => Value<any>>) {
  return (input: any) => fns.reduce((returns, fn) => fn(returns), input);
}
