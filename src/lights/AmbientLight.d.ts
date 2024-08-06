import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { AmbientLight } from 'three/src/lights/AmbientLight.js';
export { AmbientLight } from 'three/src/lights/AmbientLight.js';
import './Light';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        AmbientLight: typeof AmbientLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ambientLight: AmbientLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        ambientLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        ambientLight: string[];
    }
}
export type AmbientLightProps = LightNode<AmbientLight, typeof AmbientLight, {
    color?: ColorRepresentation;
    intensity?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        ambientLight: {
            color?: ColorRepresentation;
            intensity?: number;
        };
    }
}
//# sourceMappingURL=AmbientLight.d.ts.map