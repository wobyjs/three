import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js';
export { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        WireframeGeometry: typeof WireframeGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wireframeGeometry: WireframeGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        wireframeGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        wireframeGeometry: string[];
    }
}
export type WireframeGeometryProps<TBufferGeometry extends BufferGeometry = BufferGeometry> = BufferGeometryNode<WireframeGeometry<TBufferGeometry>, typeof WireframeGeometry, {
    geometry?: TBufferGeometry;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        wireframeGeometry: {
            geometry?: BufferGeometry;
        };
    }
}
//# sourceMappingURL=WireframeGeometry.d.ts.map