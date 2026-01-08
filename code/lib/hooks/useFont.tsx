// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */

import { $, } from 'woby'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { useThree } from "./useThree"


// export const useFonts = <T extends Unobservable<ThreeContextType['fonts']> = Unobservable<ThreeContextType['fonts']>>(v?: T) => useThree('fonts', v) as any as Observable<T>
export const useFonts = () => useThree('fonts')

export const useFont = (path: string) => {
    const fonts = useFonts()
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $()
        const loader = new FontLoader()

        loader.load(path, (data) => {
            fonts[path](data)
        })
    }

    return fonts[path]
}