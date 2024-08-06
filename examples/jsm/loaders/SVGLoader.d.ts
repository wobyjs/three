import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
export * from 'three/examples/jsm/loaders/SVGLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        SVGLoader: typeof SVGLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            svgLoader: SVGLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        svgLoader: string[];
        svgResultPaths: string[];
        svgResult: string[];
        strokeStyle: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        svgLoader: string[];
        svgResultPaths: string[];
        svgResult: string[];
        strokeStyle: string[];
    }
}
export type SVGLoaderProps = Node<SVGLoader, typeof SVGLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        svgLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=SVGLoader.d.ts.map