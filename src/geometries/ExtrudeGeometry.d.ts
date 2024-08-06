import { Shape } from 'three/src/extras/core/Shape.js';
import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { ExtrudeGeometry, ExtrudeGeometryOptions } from 'three/src/geometries/ExtrudeGeometry.js';
export { ExtrudeGeometry, ExtrudeGeometryOptions } from 'three/src/geometries/ExtrudeGeometry.js';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        ExtrudeGeometry: typeof ExtrudeGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            extrudeGeometry: ExtrudeGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        extrudeGeometry: string[];
        extrudeGeometryOptions: WrapAsString<ExtrudeGeometryOptions>;
        uvGenerator: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        extrudeGeometry: string[];
        extrudeGeometryOptions: string[];
        uvGenerator: string[];
    }
}
export type ExtrudeGeometryProps = BufferGeometryNode<ExtrudeGeometry, typeof ExtrudeGeometry, {
    shapes?: Shape | Shape[];
    options?: ExtrudeGeometryOptions;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        extrudeGeometry: {
            shapes?: Shape | Shape[];
            options?: ExtrudeGeometryOptions;
        };
    }
}
//# sourceMappingURL=ExtrudeGeometry.d.ts.map