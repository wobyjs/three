import { Vector3 } from '../../../three-types';
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
export * from 'three/examples/jsm/geometries/ConvexGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        ConvexGeometry: typeof ConvexGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexGeometry: ConvexGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        convexGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        convexGeometry: string[];
    }
}
export type ConvexGeometryProps = BufferGeometryNode<ConvexGeometry, typeof ConvexGeometry, {
    points?: Vector3[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        convexGeometry: Partial<{
            points?: Vector3[];
        }>;
    }
}
//# sourceMappingURL=ConvexGeometry.d.ts.map