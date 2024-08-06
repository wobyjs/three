// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */

import { Observable, $,  } from 'woby'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { useThree, Unobservable, ThreeContext } from "./useThree"


export const useFonts = <T extends Unobservable<ThreeContext['fonts']> = Unobservable<ThreeContext['fonts']>>(v?: T) => useThree('fonts', v) as any as Observable<T>

export const useFont = (path: string) => {
    const fonts = useFonts()
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $()
            ; (async () => {
                const loader = new FontLoader()

                const loadFont = await loader.loadAsync(path)
                fonts[path](loadFont)
            })()
    }

    return fonts[path]


}

