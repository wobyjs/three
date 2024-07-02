import * as three from "three"

declare global {
    interface Window {
        __$$Three$$__: typeof three
    }
}

if (!window.__$$Three$$__)
    window.__$$Three$$__ = { ...three }

export const Three = window.__$$Three$$__
