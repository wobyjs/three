import { ObservableMaybe } from "woby";
import { PromiseMaybe } from "../three-types";
export declare const toUpper: (s: string) => string;
export declare const isFunction: <T extends (props: any) => any>(f: T | any) => f is (props: any) => any;
export declare const isPromiseR: <T extends unknown>(obj: ObservableMaybe<PromiseMaybe<T>>) => boolean;
export declare const isPromise: <T extends unknown>(obj: ObservableMaybe<PromiseMaybe<T>>) => boolean;
export declare const promise2$: <T extends unknown>(props: ObservableMaybe<PromiseMaybe<T>>) => ObservableMaybe<PromiseMaybe<T>>;
export declare const awaitAll: <T extends unknown>(props: ObservableMaybe<PromiseMaybe<T>>) => Promise<ObservableMaybe<PromiseMaybe<T>>>;
//# sourceMappingURL=utils.d.ts.map