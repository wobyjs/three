import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Node } from '../../../three-types';
import { Loader } from 'three/src/loaders/Loader.js';
import { Group } from 'three/src/objects/Group.js';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
export * from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
declare module '../../../lib/3/three' {
    interface Three {
        XRControllerModelFactory: typeof XRControllerModelFactory;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrControllerModelFactory: XRControllerModelFactoryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrControllerModelFactory: string[];
        xrControllerModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrControllerModelFactory: string[];
        xrControllerModel: string[];
    }
}
export type XRControllerModelFactoryProps = Node<XRControllerModelFactory, typeof XRControllerModelFactory, {
    gltfLoader?: Loader<GLTF> | null;
    onLoad?: ((scene: Group) => void) | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrControllerModelFactory: Partial<{
            gltfLoader?: Loader<GLTF> | null;
            onLoad?: ((scene: Group) => void) | null;
        }>;
    }
}
//# sourceMappingURL=XRControllerModelFactory.d.ts.map