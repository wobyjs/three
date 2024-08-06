import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
export { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        HemisphereLight: typeof HemisphereLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLight: HemisphereLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        hemisphereLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        hemisphereLight: string[];
    }
}
export type HemisphereLightProps = LightNode<HemisphereLight, typeof HemisphereLight, {
    skyColor?: ColorRepresentation;
    groundColor?: ColorRepresentation;
    intensity?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        hemisphereLight: Partial<{
            skyColor?: ColorRepresentation;
            groundColor?: ColorRepresentation;
            intensity?: number;
        }>;
    }
}
//# sourceMappingURL=HemisphereLight.d.ts.map