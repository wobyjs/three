/** @jsxImportSource ../jsx */
import { type JSX } from "woby";
export declare const jsx: <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & {
    children?: JSX.Child[];
}>(component: K, props: P & {
    args: [];
}, key?: string) => JSX.Element;
export declare const getConstructorParams: (pn: any, pt: any, meta: any[], props: any, component: string) => any;
//# sourceMappingURL=getConstructorParams.d.ts.map