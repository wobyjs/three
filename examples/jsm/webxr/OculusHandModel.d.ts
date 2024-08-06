import { Node } from '../../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { Loader } from 'three/src/loaders/Loader.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OculusHandModel } from 'three/examples/jsm/webxr/OculusHandModel.js';
export * from 'three/examples/jsm/webxr/OculusHandModel.js';
declare module '../../../lib/3/three' {
    interface Three {
        OculusHandModel: typeof OculusHandModel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oculusHandModel: OculusHandModelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        oculusHandModel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        oculusHandModel: string[];
    }
}
export type OculusHandModelProps = Node<OculusHandModel, typeof OculusHandModel, {
    controller: Object3D;
    loader?: Loader<GLTF> | null;
    onLoad?: ((object: Object3D) => void) | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        oculusHandModel: Partial<{
            controller: Object3D;
            loader?: Loader<GLTF> | null;
            onLoad?: ((object: Object3D) => void) | null;
        }>;
    }
}
//# sourceMappingURL=OculusHandModel.d.ts.map