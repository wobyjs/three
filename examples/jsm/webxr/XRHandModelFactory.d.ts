import { Node } from '../../../three-types';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader } from 'three/src/loaders/Loader.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';
export * from 'three/examples/jsm/webxr/XRHandModelFactory.js';
declare module '../../../lib/3/three' {
    interface Three {
        XRHandModelFactory: typeof XRHandModelFactory;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrHandModelFactory: XRHandModelFactoryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrHandModelFactory: string[];
        xrHandModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrHandModelFactory: string[];
        xrHandModel: string[];
    }
}
export type XRHandModelFactoryProps = Node<XRHandModelFactory, typeof XRHandModelFactory, {
    gltfLoader?: Loader<GLTF> | null;
    onLoad?: ((object: Object3D) => void) | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandModelFactory: Partial<{
            gltfLoader?: Loader<GLTF> | null;
            onLoad?: ((object: Object3D) => void) | null;
        }>;
    }
}
//# sourceMappingURL=XRHandModelFactory.d.ts.map