import { Object3DNode } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { MorphBlendMesh } from 'three/examples/jsm/misc/MorphBlendMesh.js';
export * from 'three/examples/jsm/misc/MorphBlendMesh.js';
declare module '../../../lib/3/three' {
    interface Three {
        MorphBlendMesh: typeof MorphBlendMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            morphBlendMesh: MorphBlendMeshProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        morphBlendMesh: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        morphBlendMesh: string[];
    }
}
export type MorphBlendMeshProps = Object3DNode<MorphBlendMesh, typeof MorphBlendMesh, {
    geometry: BufferGeometry;
    material: Material;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        morphBlendMesh: Partial<{
            geometry: BufferGeometry;
            material: Material;
        }>;
    }
}
//# sourceMappingURL=MorphBlendMesh.d.ts.map