import { Object3DNode } from '../../../three-types';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
export * from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import '../../../src/core/InstancedBufferGeometry';
declare module '../../../lib/3/three' {
    interface Three {
        LineSegmentsGeometry: typeof LineSegmentsGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegmentsGeometry: LineSegmentsGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineSegmentsGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineSegmentsGeometry: string[];
    }
}
export type LineSegmentsGeometryProps = Object3DNode<LineSegmentsGeometry, typeof LineSegmentsGeometry, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegmentsGeometry: {};
    }
}
//# sourceMappingURL=LineSegmentsGeometry.d.ts.map