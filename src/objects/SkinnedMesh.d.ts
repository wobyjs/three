import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
export { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import './Mesh';
declare module '../../lib/3/three' {
    interface Three {
        SkinnedMesh: typeof SkinnedMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skinnedMesh: SkinnedMeshProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        skinnedMesh: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        skinnedMesh: string[];
    }
}
export type SkinnedMeshProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<SkinnedMesh<TGeometry, TMaterial>, typeof SkinnedMesh<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
    useVertexTexture?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        skinnedMesh: {
            geometry?: BufferGeometry;
            material?: Material;
            useVertexTexture?: boolean;
        };
    }
}
//# sourceMappingURL=SkinnedMesh.d.ts.map