import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry.js';
export { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry.js';
import './BufferGeometry';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedBufferGeometry: InstancedBufferGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        instancedBufferGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        instancedBufferGeometry: string[];
    }
}
export type InstancedBufferGeometryProps = BufferGeometryNode<InstancedBufferGeometry, typeof InstancedBufferGeometry, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        instancedBufferGeometry: Partial<{}>;
    }
}
//# sourceMappingURL=InstancedBufferGeometry.d.ts.map