import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Object3DNode } from '../../../three-types';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
export * from 'three/examples/jsm/lines/LineSegments2.js';
import '../../../src/materials';
declare module '../../../lib/3/three' {
    interface Three {
        LineSegments2: typeof LineSegments2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegments2: LineSegments2Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineSegments2: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineSegments2: string[];
    }
}
export type LineSegments2Props = Object3DNode<LineSegments2, typeof LineSegments2, {
    geometry?: LineSegmentsGeometry;
    material?: LineMaterial;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegments2: {
            geometry?: LineSegmentsGeometry;
            material?: LineMaterial;
        };
    }
}
//# sourceMappingURL=LineSegments2.d.ts.map