// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import {  Observable,  $ } from "woby"
import { Loader } from "three"


export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync: (path: string) => V }, options: { path: string, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader()
    options.init?.(loaderInstance)

    const obj = $<V>()
        //TODO array of paths
        ; (async () => {
            const object = loaderInstance.loadAsync(options.path)
            obj(object as any)
        })()

    return obj
}
