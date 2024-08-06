import {  Observable, useEffect, $$, $ } from "woby"


export const useAwait = <T,>(obj: Observable<Promise<T>>): Observable<T> => {
    const o = $<T>()
    useEffect(() => {
        (async () => {
            o(await $$(obj))
        })()
    })

    return o
}