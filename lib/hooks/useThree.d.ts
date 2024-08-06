/** @jsxImportSource ./jsx-runtime */
import { ObservableMaybe, Observable, ObservableReadonly, Context } from 'woby';
import { Font } from 'three/examples/jsm/loaders/FontLoader';
import { type CanvasProps } from '../components/Canvas3D';
import { Scene } from '../../src/scenes/Scene';
import { Camera } from '../../src/cameras/Camera';
import { Renderer } from 'three/src/renderers/WebGLRenderer';
export type Unobservable<T> = T extends Observable<infer U> ? U : T;
export type ToObservableMaybe<T> = T extends Observable<infer U> ? ObservableMaybe<U> : T;
export type ThreeContext = {
    frame: Observable<(() => void)[]>;
    fonts: Observable<Record<string, Observable<Font>>>;
    renderer: Observable<Renderer>;
    scene: Observable<Scene>;
    camera: Observable<Camera>;
    domElement: ObservableReadonly<HTMLCanvasElement>;
    width: Observable<number>;
    height: Observable<number>;
};
export declare const defaultContext: (props?: CanvasProps) => ThreeContext;
declare global {
    interface Window {
        threeContext: Context<ThreeContext>;
    }
}
export declare const threeContext: Context<ThreeContext>;
export declare function useThree(): ThreeContext;
export declare function useThree<K extends keyof ThreeContext = keyof ThreeContext, T extends ThreeContext[K] = ThreeContext[K]>(key?: K, v?: ToObservableMaybe<T>): T;
export declare function throttle(callback: any, limit: any): () => void;
//# sourceMappingURL=useThree.d.ts.map