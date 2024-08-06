// import * as three from "three"

export interface Three { }

declare global {
    interface Window {
        __$$Three$$__: Three //typeof three
    }
}

if (!window.__$$Three$$__)
    window.__$$Three$$__ = {} as any as Three
// window.__$$Three$$__ = { ...three } as any as Three

export const Three: Three = window.__$$Three$$__
