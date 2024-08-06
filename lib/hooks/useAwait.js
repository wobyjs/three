import { useEffect, $$, $ } from "woby";
export const useAwait = (obj) => {
    const o = $();
    useEffect(() => {
        (async () => {
            o(await $$(obj));
        })();
    });
    return o;
};
