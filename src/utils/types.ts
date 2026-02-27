/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type Value<T> = T;
export type MaybePromise<T> = T | Promise<T>;
export type AsyncFn<I, O> = (arg: I) => MaybePromise<O>;
export type SyncFn<I, O> = (arg: I) => Value<O>;

export type LastFn<Fns extends readonly AsyncFn<any, any>[]> =
  Fns extends readonly [...infer _, infer L]
    ? L extends AsyncFn<any, any>
      ? L
      : never
    : never;
