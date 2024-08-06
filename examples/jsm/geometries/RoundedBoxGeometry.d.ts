import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
export * from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        RoundedBoxGeometry: typeof RoundedBoxGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            roundedBoxGeometry: RoundedBoxGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        roundedBoxGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        roundedBoxGeometry: string[];
    }
}
export type RoundedBoxGeometryProps = BufferGeometryNode<RoundedBoxGeometry, typeof RoundedBoxGeometry, {
    width?: number;
    height?: number;
    depth?: number;
    segments?: number;
    radius?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        roundedBoxGeometry: Partial<{
            width?: number;
            height?: number;
            depth?: number;
            segments?: number;
            radius?: number;
        }>;
    }
}
//# sourceMappingURL=RoundedBoxGeometry.d.ts.map