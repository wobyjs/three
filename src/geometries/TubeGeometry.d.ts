import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { Vector2 } from 'three/src/math/Vector2.js';
import { Curve } from 'three/src/extras/core/Curve.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { TubeGeometry } from 'three/src/geometries/TubeGeometry.js';
export { TubeGeometry } from 'three/src/geometries/TubeGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        TubeGeometry: typeof TubeGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tubeGeometry: TubeGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        tubeGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        tubeGeometry: string[];
    }
}
export type TubeGeometryProps = BufferGeometryNode<TubeGeometry, typeof TubeGeometry, {
    path?: Curve<Vector2 | Vector3>;
    tubularSegments?: number;
    radius?: number;
    radialSegments?: number;
    closed?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        tubeGeometry: {
            path?: Curve<Vector2 | Vector3>;
            tubularSegments?: number;
            radius?: number;
            radialSegments?: number;
            closed?: boolean;
        };
    }
}
//# sourceMappingURL=TubeGeometry.d.ts.map