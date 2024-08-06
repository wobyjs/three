import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { EdgesGeometry } from 'three/src/geometries/EdgesGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        EdgesGeometry: typeof EdgesGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            edgesGeometry: EdgesGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        edgesGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        edgesGeometry: string[];
    }
}
export type EdgesGeometryProps<TBufferGeometry extends BufferGeometry = BufferGeometry> = BufferGeometryNode<EdgesGeometry<TBufferGeometry>, typeof EdgesGeometry, {
    geometry?: TBufferGeometry | null;
    thresholdAngle?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        edgesGeometry: {
            geometry?: BufferGeometry | null;
            thresholdAngle?: number;
        };
    }
}
//# sourceMappingURL=EdgesGeometry.d.ts.map