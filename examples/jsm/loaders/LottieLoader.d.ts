import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { LottieLoader } from 'three/examples/jsm/loaders/LottieLoader.js';
export * from 'three/examples/jsm/loaders/LottieLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        LottieLoader: typeof LottieLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lottieLoader: LottieLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lottieLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lottieLoader: string[];
    }
}
export type LottieLoaderProps = Node<LottieLoader, typeof LottieLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lottieLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=LottieLoader.d.ts.map