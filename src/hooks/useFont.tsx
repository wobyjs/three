// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { useContext, Observable, $,  } from "woby"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { threeContext } from "./useThree"

export const useFonts = () => useContext(threeContext)['fonts'] as Record<string, Observable<Font>>

export const useFont = (path: string) => {
    const fonts = useFonts();
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $();
        (async () => {
            const loader = new FontLoader();

            const loadFont = await loader.loadAsync(path)
            fonts[path](loadFont)
        })()
    }

    return fonts[path]


}

