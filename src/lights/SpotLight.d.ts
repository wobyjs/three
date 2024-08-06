import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { SpotLight } from 'three/src/lights/SpotLight.js';
export { SpotLight } from 'three/src/lights/SpotLight.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        SpotLight: typeof SpotLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spotLight: SpotLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        spotLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        spotLight: string[];
    }
}
export type SpotLightProps = LightNode<SpotLight, typeof SpotLight, {
    color?: ColorRepresentation;
    intensity?: number;
    distance?: number;
    angle?: number;
    penumbra?: number;
    decay?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        spotLight: {
            color?: ColorRepresentation;
            intensity?: number;
            distance?: number;
            angle?: number;
            penumbra?: number;
            decay?: number;
        };
    }
}
//# sourceMappingURL=SpotLight.d.ts.map