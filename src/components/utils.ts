// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import { $$ } from "woby"

export const toUpper = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)

export const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

export const isPromise = (obj) => {
    if (obj instanceof Promise)         return true

    else if (typeof obj == "object") {
        //iterate over all property
        for (const key in obj) 
            if (!key.startsWith("on") && typeof $$(obj[key])?.then === "function") 
                return true
        return false
    }
    else 
        return typeof obj?.then === "function"

}

