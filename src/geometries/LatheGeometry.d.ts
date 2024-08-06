import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { Vector2 } from '../../three-types';
import { LatheGeometry } from 'three/src/geometries/LatheGeometry.js';
export { LatheGeometry } from 'three/src/geometries/LatheGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        LatheGeometry: typeof LatheGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            latheGeometry: LatheGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        latheGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        latheGeometry: string[];
    }
}
export type LatheGeometryProps = BufferGeometryNode<LatheGeometry, typeof LatheGeometry, {
    points?: Vector2[];
    segments?: number;
    phiStart?: number;
    phiLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        latheGeometry: {
            points?: Vector2[];
            segments?: number;
            phiStart?: number;
            phiLength?: number;
        };
    }
}
//# sourceMappingURL=LatheGeometry.d.ts.map