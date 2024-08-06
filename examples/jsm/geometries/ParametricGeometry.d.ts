import { Vector3 } from '../../../three-types';
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
export * from 'three/examples/jsm/geometries/ParametricGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        ParametricGeometry: typeof ParametricGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parametricGeometry: ParametricGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        parametricGeometry: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        parametricGeometry: string[];
    }
}
export type ParametricGeometryProps = BufferGeometryNode<ParametricGeometry, typeof ParametricGeometry, {
    func?: (u: number, v: number, target: Vector3) => void;
    slices?: number;
    stacks?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        parametricGeometry: Partial<{
            func?: (u: number, v: number, target: Vector3) => void;
            slices?: number;
            stacks?: number;
        }>;
    }
}
//# sourceMappingURL=ParametricGeometry.d.ts.map