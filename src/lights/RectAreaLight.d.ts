import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js';
export { RectAreaLight } from 'three/src/lights/RectAreaLight.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        RectAreaLight: typeof RectAreaLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rectAreaLight: RectAreaLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        rectAreaLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        rectAreaLight: string[];
    }
}
export type RectAreaLightProps = LightNode<RectAreaLight, typeof RectAreaLight, {
    color?: ColorRepresentation;
    intensity?: number;
    width?: number;
    height?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        rectAreaLight: {
            color?: ColorRepresentation;
            intensity?: number;
            width?: number;
            height?: number;
        };
    }
}
//# sourceMappingURL=RectAreaLight.d.ts.map