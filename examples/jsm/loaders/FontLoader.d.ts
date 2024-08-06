import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { Node, PromiseMaybe } from '../../../three-types';
import { ObservableMaybe } from 'woby';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
export * from 'three/examples/jsm/loaders/FontLoader.js';
import '../../../src/loaders/Loader';
declare module '../../../lib/3/three' {
    interface Three {
        FontLoader: typeof FontLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fontLoader: FontLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        fontLoader: string[];
        font: string[];
        fontData: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        fontLoader: string[];
        font: string[];
        fontData: string[];
    }
}
export type FontLoaderProps = Node<FontLoader, typeof FontLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fontLoader: {
            manager?: LoadingManager;
        };
    }
}
export type WrapFont<T> = {
    [K in keyof T]: T[K] extends Font ? ObservableMaybe<PromiseMaybe<T[K]>> : T[K];
};
//# sourceMappingURL=FontLoader.d.ts.map