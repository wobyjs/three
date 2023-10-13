import { $$ } from "voby"

export const toUpper = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)

export const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

export const isPromise = (obj) => {
    if (obj instanceof Promise) {
        return true
    }

    else if (typeof obj == "object") {
        const properties = Object.values(obj)
        //iterate over all property
        for (let i = 0; i < properties.length; i++) {
            //@ts-ignore
            if (typeof $$(properties[i])?.then === "function") {
                return true
            }
        }
        return false

    }
    else {
        return typeof obj?.then === "function"
    }

}

