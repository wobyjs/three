import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { PointLight } from 'three/src/lights/PointLight.js';
export { PointLight } from 'three/src/lights/PointLight.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        PointLight: typeof PointLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLight: PointLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        pointLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        pointLight: string[];
    }
}
export type PointLightProps = LightNode<PointLight, typeof PointLight, {
    color?: ColorRepresentation;
    intensity?: number;
    distance?: number;
    decay?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        pointLight: {
            color?: ColorRepresentation;
            intensity?: number;
            distance?: number;
            decay?: number;
        };
    }
}
//# sourceMappingURL=PointLight.d.ts.map