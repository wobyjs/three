import { useRoot, getSetters } from "woby";
import { jsx } from "./lib/three/jsx";
import { FragmentUtils } from "woby";
const render = (children, parent) => {
    const { setChild, } = getSetters(); //browser
    if (!parent || !(parent instanceof HTMLElement))
        throw new Error('Invalid parent node');
    parent.textContent = '';
    return useRoot((stack, dispose) => {
        setChild(parent, children, FragmentUtils.make(), stack);
        return () => {
            dispose(stack);
            parent.textContent = '';
        };
    });
};
export const Fragment = ({ children }) => Array.isArray(children) ? [...children] : [children];
export { jsx, jsx as jsxs, jsx as jsxDEV, render };
