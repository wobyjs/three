import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
export * from 'three/examples/jsm/geometries/TeapotGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        TeapotGeometry: typeof TeapotGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            teapotGeometry: TeapotGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        teapotGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        teapotGeometry: string[];
    }
}
export type TeapotGeometryProps = BufferGeometryNode<TeapotGeometry, typeof TeapotGeometry, {
    size?: number;
    segments?: number;
    bottom?: boolean;
    lid?: boolean;
    body?: boolean;
    fitLid?: boolean;
    blinn?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        teapotGeometry: Partial<{
            size?: number;
            segments?: number;
            bottom?: boolean;
            lid?: boolean;
            body?: boolean;
            fitLid?: boolean;
            blinn?: boolean;
        }>;
    }
}
//# sourceMappingURL=TeapotGeometry.d.ts.map