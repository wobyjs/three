import '../three/extensions'

export interface consParams { }

declare global {
    interface Window {
        __$$consParams$$__: consParams
    }
}

if (!window.__$$consParams$$__)
    //@ts-ignore
    window.__$$consParams$$__ = {}

export const consParams: consParams = window.__$$consParams$$__