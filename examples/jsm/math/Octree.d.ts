import { Node } from '../../../three-types';
import { Box3 } from 'three/src/math/Box3.js';
import { Octree } from 'three/examples/jsm/math/Octree.js';
export * from 'three/examples/jsm/math/Octree.js';
declare module '../../../lib/3/three' {
    interface Three {
        Octree: typeof Octree;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octree: OctreeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        octree: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        octree: string[];
    }
}
export type OctreeProps = Node<Octree, typeof Octree, {
    box?: Box3 | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        octree: Partial<{
            box?: Box3 | null;
        }>;
    }
}
//# sourceMappingURL=Octree.d.ts.map