import { Object3DNode } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { MorphAnimMesh } from 'three/examples/jsm/misc/MorphAnimMesh.js';
export * from 'three/examples/jsm/misc/MorphAnimMesh.js';
declare module '../../../lib/3/three' {
    interface Three {
        MorphAnimMesh: typeof MorphAnimMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            morphAnimMesh: MorphAnimMeshProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        morphAnimMesh: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        morphAnimMesh: string[];
    }
}
export type MorphAnimMeshProps = Object3DNode<MorphAnimMesh, typeof MorphAnimMesh, {
    geometry: BufferGeometry;
    material: Material;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        morphAnimMesh: Partial<{
            geometry: BufferGeometry;
            material: Material;
        }>;
    }
}
//# sourceMappingURL=MorphAnimMesh.d.ts.map