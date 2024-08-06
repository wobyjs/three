import { Node } from '../../../three-types';
import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js';
export * from 'three/examples/jsm/math/ConvexHull.js';
declare module '../../../lib/3/three' {
    interface Three {
        ConvexHull: typeof ConvexHull;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexHull: ConvexHullProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        convexHull: string[];
        halfEdge: string[];
        vertexNode: string[];
        vertexList: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        convexHull: string[];
        halfEdge: string[];
        vertexNode: string[];
        vertexList: string[];
    }
}
export type ConvexHullProps = Node<ConvexHull, typeof ConvexHull, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        convexHull: Partial<{}>;
    }
}
declare module '../../../lib/3/defaults' {
    interface defaults {
        convexHull: Partial<{}>;
    }
}
//# sourceMappingURL=ConvexHull.d.ts.map