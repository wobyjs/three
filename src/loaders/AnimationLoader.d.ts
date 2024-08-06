import { Node } from '../../three-types';
import { AnimationLoader } from 'three/src/loaders/AnimationLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        AnimationLoader: typeof AnimationLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationLoader: AnimationLoaderProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        animationLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        animationLoader: string[];
    }
}
export type AnimationLoaderProps = Node<AnimationLoader, typeof AnimationLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        animationLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=AnimationLoader.d.ts.map