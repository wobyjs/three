/** @jsxImportSource ../jsx */
import { type JSX, ObservableMaybe, Observable } from "woby";
import { ThreeContext } from "../hooks";
import { Texture } from "three/src/textures/Texture";
import { Color } from "three/src/math/Color";
import { CubeTexture } from "three/src/textures/CubeTexture";
type Observable2Maybe<T> = {
    [K in keyof T]: T[K] extends Observable<infer U> ? ObservableMaybe<U> : T[K] extends object ? Observable2Maybe<T[K]> : T[K];
};
export type CanvasProps = {
    children?: JSX.Child;
    noRender?: ObservableMaybe<boolean>;
    background?: ObservableMaybe<string | number | Color | Texture | CubeTexture>;
} & Partial<Observable2Maybe<ThreeContext>>;
export declare const Canvas3D: ({ noRender, background, ...props }: CanvasProps) => any;
export {};
//# sourceMappingURL=Canvas3D.d.ts.map