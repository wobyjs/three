import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Light } from 'three/src/lights/Light.js';
export { Light } from 'three/src/lights/Light.js';
import '../../src/core/Object3D';
declare module '../../lib/3/three' {
    interface Three {
        Light: typeof Light;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            light: LightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        light: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        light: string[];
    }
}
export type LightProps = LightNode<Light, typeof Light, {
    color?: ColorRepresentation;
    intensity?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        light: {
            color?: ColorRepresentation;
            intensity?: number;
        };
    }
}
//# sourceMappingURL=Light.d.ts.map