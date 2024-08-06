import { Node } from '../../../three-types';
import { Mesh } from 'three/src/objects/Mesh.js';
import { ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh.js';
export * from 'three/examples/jsm/objects/ShadowMesh.js';
declare module '../../../lib/3/three' {
    interface Three {
        ShadowMesh: typeof ShadowMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMesh: ShadowMeshProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMesh: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowMesh: string[];
    }
}
export type ShadowMeshProps = Node<ShadowMesh, typeof ShadowMesh, {
    mesh: Mesh;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMesh: Partial<{
            mesh: Mesh;
        }>;
    }
}
//# sourceMappingURL=ShadowMesh.d.ts.map