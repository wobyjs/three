// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { type Loader } from "three/src/loaders/Loader";
import { Observable, $, $$, FunctionMaybe } from "woby"


export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync: (path: string) => Promise<V> }, options: { path: FunctionMaybe<string>, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader()
    options.init?.(loaderInstance)

    const obj = $<V>()
        ; (async () => {
            const object = await loaderInstance.loadAsync($$(options.path))
            obj(object as any)
        })()

    return obj
}
