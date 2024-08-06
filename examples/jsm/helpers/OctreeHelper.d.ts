import { Octree } from 'three/examples/jsm/math/Octree.js';
import { Node } from '../../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper.js';
export * from 'three/examples/jsm/helpers/OctreeHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        OctreeHelper: typeof OctreeHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octreeHelper: OctreeHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        octreeHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        octreeHelper: string[];
    }
}
export type OctreeHelperProps = Node<OctreeHelper, typeof OctreeHelper, {
    octree: Octree;
    color?: ColorRepresentation;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        octreeHelper: Partial<{
            octree: Octree;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=OctreeHelper.d.ts.map