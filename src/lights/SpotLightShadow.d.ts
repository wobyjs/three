import { Node } from '../../three-types';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { SpotLightShadow } from 'three/src/lights/SpotLightShadow.js';
export { SpotLightShadow } from 'three/src/lights/SpotLightShadow.js';
import './LightShadow';
declare module '../../lib/3/three' {
    interface Three {
        SpotLightShadow: typeof SpotLightShadow;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spotLightShadow: SpotLightShadowProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        spotLightShadow: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        spotLightShadow: string[];
    }
}
export type SpotLightShadowProps = Node<SpotLightShadow, typeof SpotLightShadow, {
    camera: PerspectiveCamera;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        spotLightShadow: Partial<{
            camera: PerspectiveCamera;
        }>;
    }
}
//# sourceMappingURL=SpotLightShadow.d.ts.map