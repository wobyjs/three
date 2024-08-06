import { Vector3, Euler, Node } from '../../../three-types';
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { Mesh } from 'three/src/objects/Mesh.js';
import { DecalGeometry, DecalVertex } from 'three/examples/jsm/geometries/DecalGeometry.js';
export * from 'three/examples/jsm/geometries/DecalGeometry.js';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            decalGeometry: DecalGeometryProps;
            decalVertex: DecalVertexProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        decalGeometry: string[];
        decalVertex: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        decalGeometry: string[];
        decalVertex: string[];
    }
}
export type DecalGeometryProps = BufferGeometryNode<DecalGeometry, typeof DecalGeometry, {
    mesh: Mesh;
    position: Vector3;
    orientation: Euler;
    size: Vector3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decalGeometry: Partial<{
            mesh: Mesh;
            position: Vector3;
            orientation: Euler;
            size: Vector3;
        }>;
    }
}
export type DecalVertexProps = Node<DecalVertex, typeof DecalVertex, {
    position: Vector3;
    normal: Vector3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        decalVertex: Partial<{
            position: Vector3;
            normal: Vector3;
        }>;
    }
}
//# sourceMappingURL=DecalGeometry.d.ts.map