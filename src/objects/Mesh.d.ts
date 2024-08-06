import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { Mesh } from 'three/src/objects/Mesh.js';
export { Mesh } from 'three/src/objects/Mesh.js';
declare module '../../lib/3/three' {
    interface Three {
        Mesh: typeof Mesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mesh: MeshProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        mesh: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        mesh: string[];
    }
}
export type MeshProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<Mesh<TGeometry, TMaterial>, typeof Mesh<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        mesh: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=Mesh.d.ts.map