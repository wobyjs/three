import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
export * from 'three/examples/jsm/geometries/BoxLineGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        BoxLineGeometry: typeof BoxLineGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxLineGeometry: BoxLineGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        boxLineGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        boxLineGeometry: string[];
    }
}
export type BoxLineGeometryProps = BufferGeometryNode<BoxLineGeometry, typeof BoxLineGeometry, {
    width?: number;
    height?: number;
    depth?: number;
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        boxLineGeometry: Partial<{
            width?: number;
            height?: number;
            depth?: number;
            widthSegments?: number;
            heightSegments?: number;
            depthSegments?: number;
        }>;
    }
}
//# sourceMappingURL=BoxLineGeometry.d.ts.map