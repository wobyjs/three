import { $, $$, ObservableMaybe, isObservable, useEffect, type JSX } from "woby"
import { PromiseMaybe } from "./three-types"

export const toUpper = (s: string) => {
    if (s === 'gui') return 'GUI'
    return s.charAt(0).toUpperCase() + s.substring(1)
}

export const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

export const isPromiseR = <T extends JSX.Child | any>(obj: ObservableMaybe<PromiseMaybe<T>>) => {
    const o = isObservable(obj) ? $$(obj) : obj
    if (!o) return false

    if (isPromise(o))
        return true

    //iterate over all property, 1st level
    if (typeof o === "object" && o !== null)
        for (const key in o)
            if (!key.startsWith("on") && isPromiseR(o[key]))
                return true

    return false
}

export const isPromise = <T extends JSX.Child | any>(obj: ObservableMaybe<PromiseMaybe<T>>) => {
    const o = isObservable(obj) ? $$(obj) : obj
    if (!o) return false

    if (o instanceof Promise)
        return true

    return typeof (o as any).then === 'function'
}

export const promise2$ = <T extends JSX.Child | any>(props: ObservableMaybe<PromiseMaybe<T>>): ObservableMaybe<PromiseMaybe<T>> => {
    const o = isObservable(props) ? $$(props) : props
    for (const key in (o as any)) {
        const value = $$(o[key])
        if (isPromise(value))
            useEffect(() => {
                o[key] = $();
                (async () => o[key](await value))()
            })
        else if (typeof value === "object" && value !== null)
            promise2$(value);
    }
    return props;
};

export const awaitAll = async <T extends JSX.Child | any>(props: ObservableMaybe<PromiseMaybe<T>>): Promise<ObservableMaybe<PromiseMaybe<T>>> => {
    const o = isObservable(props) ? $$(props) : props
    for (const key in (o as any)) {
        const value = $$(o[key]);
        if (isPromise(value)) {
            props[key] = await value;
        } else if (typeof value === "object" && value !== null) {
            props[key] = await awaitAll(value);
        } else
            props[key] = value;
    }
    return props;
};
