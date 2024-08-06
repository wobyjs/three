// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */
import { $, } from 'woby';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useThree } from "./useThree";
export const useFonts = (v) => useThree('fonts', v);
export const useFont = (path) => {
    const fonts = useFonts();
    if (fonts[path]) {
        return fonts[path];
    }
    else {
        fonts[path] = $();
        (async () => {
            const loader = new FontLoader();
            const loadFont = await loader.loadAsync(path);
            fonts[path](loadFont);
        })();
    }
    return fonts[path];
};
