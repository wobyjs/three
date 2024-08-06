import { Node } from '../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { LightShadow } from 'three/src/lights/LightShadow.js';
export { LightShadow } from 'three/src/lights/LightShadow.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        LightShadow: typeof LightShadow;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightShadow: LightShadowProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lightShadow: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lightShadow: string[];
    }
}
export type LightShadowProps<TCamera extends Camera = Camera> = Node<LightShadow<TCamera>, typeof LightShadow<TCamera>, {
    camera: TCamera;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lightShadow: {
            camera?: Camera;
        };
    }
}
//# sourceMappingURL=LightShadow.d.ts.map