import { type JSX } from "woby";
export declare const fixReactiveProps: (props: any, component: JSX.Element) => void;
export declare function setValue<T>(obj: any, keysString: string, value: T): void;
export declare const createElement: <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & {
    children?: JSX.Child[];
    ref: JSX.Refs<JSX.IntrinsicElements[K]>;
}>(component: K, props: P & {
    args: [];
}, key?: string) => (() => any) | Promise<unknown>;
//# sourceMappingURL=createElement.d.ts.map