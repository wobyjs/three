import { Vector2 } from 'three/src/math/Vector2.js';
import { Object3DNode } from '../../three-types';
import { Vector3 } from 'three/src/math/Vector3.js';
import { PMREMGenerator } from 'three/src/extras/PMREMGenerator.js';
export { PMREMGenerator } from 'three/src/extras/PMREMGenerator.js';
import { WebGLRenderer } from '../renderers/WebGLRenderer';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pmremGenerator: PMREMGeneratorProps<Vector2 | Vector3>;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        pmremGenerator: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        pmremGenerator: string[];
    }
}
export type PMREMGeneratorProps<T extends Vector2 | Vector3> = Object3DNode<PMREMGenerator, typeof PMREMGenerator, {
    renderer: WebGLRenderer;
}>;
//# sourceMappingURL=PMREMGenerator.d.ts.map