import { Object3DNode } from '../../../three-types';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
export * from 'three/examples/jsm/lines/LineGeometry.js';
import './LineSegmentsGeometry';
declare module '../../../lib/3/three' {
    interface Three {
        LineGeometry: typeof LineGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineGeometry: LineGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineGeometry: string[];
    }
}
export type LineGeometryProps = Object3DNode<LineGeometry, typeof LineGeometry, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineGeometry: {};
    }
}
//# sourceMappingURL=LineGeometry.d.ts.map