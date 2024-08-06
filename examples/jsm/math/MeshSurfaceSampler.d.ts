import { Node } from '../../../three-types';
import { Mesh } from 'three/src/objects/Mesh.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
export * from 'three/examples/jsm/math/MeshSurfaceSampler.js';
declare module '../../../lib/3/three' {
    interface Three {
        MeshSurfaceSampler: typeof MeshSurfaceSampler;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshSurfaceSampler: MeshSurfaceSamplerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshSurfaceSampler: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshSurfaceSampler: string[];
    }
}
export type MeshSurfaceSamplerProps = Node<MeshSurfaceSampler, typeof MeshSurfaceSampler, {
    mesh: Mesh;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshSurfaceSampler: Partial<{
            mesh: Mesh;
        }>;
    }
}
//# sourceMappingURL=MeshSurfaceSampler.d.ts.map