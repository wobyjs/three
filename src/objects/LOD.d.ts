import { Object3DNode } from '../../three-types';
import { LOD } from 'three/src/objects/LOD.js';
export { LOD } from 'three/src/objects/LOD.js';
declare module '../../lib/3/three' {
    interface Three {
        LOD: typeof LOD;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lod: LODProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lod: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lod: string[];
    }
}
export type LODProps = Object3DNode<LOD, typeof LOD, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lOD: {};
    }
}
//# sourceMappingURL=LOD.d.ts.map