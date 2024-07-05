import * as three from "three"

<<<<<<< HEAD
declare global {
    interface Window {
        __$$Three$$__: typeof three
    }
}
=======
// export const DontAddToScene = Symbol('DontAddToScene')
export const Three = { ...three }
>>>>>>> origin/main

if (!window.__$$Three$$__)
    window.__$$Three$$__ = { ...three }

export const Three = window.__$$Three$$__
