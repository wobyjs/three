import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { Object3DNode } from '../../../three-types';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
export * from 'three/examples/jsm/lines/Wireframe.js';
declare module '../../../lib/3/three' {
    interface Three {
        Wireframe: typeof Wireframe;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wireframe: WireframeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        wireframe: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        wireframe: string[];
    }
}
export type WireframeProps = Object3DNode<Wireframe, typeof Wireframe, {
    geometry?: LineSegmentsGeometry;
    material?: LineMaterial;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        wireframe: {
            geometry?: LineSegmentsGeometry;
            material?: LineMaterial;
        };
    }
}
//# sourceMappingURL=Wireframe.d.ts.map