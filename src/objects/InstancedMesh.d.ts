import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { InstancedMesh } from 'three/src/objects/InstancedMesh.js';
export { InstancedMesh } from 'three/src/objects/InstancedMesh.js';
declare module '../../lib/3/three' {
    interface Three {
        InstancedMesh: typeof InstancedMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedMesh: InstancedMeshProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        instancedMesh: string[];
        instancedMeshEventMap: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        instancedMesh: string[];
        instancedMeshEventMap: string[];
    }
}
export type InstancedMeshProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<InstancedMesh<TGeometry, TMaterial>, typeof InstancedMesh<TGeometry, TMaterial>, {
    geometry: TGeometry | undefined;
    material: TMaterial | undefined;
    count: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        instancedMesh: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=InstancedMesh.d.ts.map