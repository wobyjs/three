import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { LUT3dlLoader } from 'three/examples/jsm/loaders/LUT3dlLoader.js';
export * from 'three/examples/jsm/loaders/LUT3dlLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        LUT3dlLoader: typeof LUT3dlLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lut3dlLoader: LUT3dlLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lut3dlLoader: string[];
        lut3dlResult: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lut3dlLoader: string[];
        lut3dlResult: string[];
    }
}
export type LUT3dlLoaderProps = Node<LUT3dlLoader, typeof LUT3dlLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lut3dlLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=LUT3dlLoader.d.ts.map