import { useRoot, setChild } from "woby";
import { jsx } from "../three/getConstructorParams";
const render = (children, parent) => {
    //@ts-ignore
    if (!parent || !(parent instanceof HTMLElement))
        throw new Error('Invalid parent node');
    parent.textContent = '';
    return useRoot(dispose => {
        setChild(parent, children);
        return () => {
            dispose();
            parent.textContent = '';
        };
    });
};
// //@ts-ignore
// three.TextGeometry = TextGeometry
/* EXPORT */
export { jsx, jsx as jsxs, jsx as jsxDEV, render };
