// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { type Loader } from "three/src/loaders/Loader"
import { Observable, $, $$, FunctionMaybe } from "woby"


export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync?: (path: string) => Promise<V>, load?: (url: string, onLoad: (data: V) => void) => void }, options: { path: FunctionMaybe<string>, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader()
    options.init?.(loaderInstance)

    const obj = $<V>()

    if (loaderInstance.loadAsync) {
        // Use loadAsync if available
        (async () => {
            const object = await loaderInstance.loadAsync($$(options.path))
            obj(object as any)
        })()
    } else if (loaderInstance.load) {
        // Use load with callback if loadAsync is not available
        loaderInstance.load($$(options.path), (data: V) => {
            obj(data)
        })
    }

    return obj
}