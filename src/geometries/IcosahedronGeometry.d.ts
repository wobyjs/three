import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js';
export { IcosahedronGeometry } from 'three/src/geometries/IcosahedronGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        IcosahedronGeometry: typeof IcosahedronGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            icosahedronGeometry: IcosahedronGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        icosahedronGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        icosahedronGeometry: string[];
    }
}
export type IcosahedronGeometryProps = BufferGeometryNode<IcosahedronGeometry, typeof IcosahedronGeometry, {
    radius?: number;
    detail?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        icosahedronGeometry: {
            radius?: number;
            detail?: number;
        };
    }
}
//# sourceMappingURL=IcosahedronGeometry.d.ts.map