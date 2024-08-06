import { LightNode } from './LightNode';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
export { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        DirectionalLight: typeof DirectionalLight;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLight: DirectionalLightProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLight: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        directionalLight: string[];
    }
}
export type DirectionalLightProps = LightNode<DirectionalLight, typeof DirectionalLight, {
    color?: ColorRepresentation;
    intensity?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLight: {
            color?: ColorRepresentation;
            intensity?: number;
        };
    }
}
//# sourceMappingURL=DirectionalLight.d.ts.map