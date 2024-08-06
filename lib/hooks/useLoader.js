// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */
import { $ } from "woby";
export const useLoader = (loader, options) => {
    const loaderInstance = new loader();
    options.init?.(loaderInstance);
    const obj = $();
    (async () => {
        const object = loaderInstance.loadAsync(options.path);
        obj(object);
    })();
    return obj;
};
