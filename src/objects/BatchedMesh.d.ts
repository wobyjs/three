import { Object3DNode } from '../../three-types';
import { BatchedMesh } from 'three/src/objects/BatchedMesh.js';
export { BatchedMesh } from 'three/src/objects/BatchedMesh.js';
import { Material } from 'three/src/materials/Material';
declare module '../../lib/3/three' {
    interface Three {
        BatchedMesh: typeof BatchedMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            batchedMesh: BatchedMeshProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        batchedMesh: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        batchedMesh: string[];
    }
}
export type BatchedMeshProps = Object3DNode<BatchedMesh, typeof BatchedMesh, {
    maxInstanceCount: number;
    maxVertexCount: number;
    maxIndexCount?: number;
    material?: Material;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        batchedMesh: Partial<{
            maxInstanceCount: number;
            maxVertexCount: number;
            maxIndexCount?: number;
            material?: Material;
        }>;
    }
}
//# sourceMappingURL=BatchedMesh.d.ts.map