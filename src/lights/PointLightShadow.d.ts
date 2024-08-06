import { Node } from '../../three-types';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { PointLightShadow } from 'three/src/lights/PointLightShadow.js';
export { PointLightShadow } from 'three/src/lights/PointLightShadow.js';
import './LightShadow';
declare module '../../lib/3/three' {
    interface Three {
        PointLightShadow: typeof PointLightShadow;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightShadow: PointLightShadowProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        pointLightShadow: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        pointLightShadow: string[];
    }
}
export type PointLightShadowProps = Node<PointLightShadow, typeof PointLightShadow, {
    camera: PerspectiveCamera;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        pointLightShadow: Partial<{
            camera: PerspectiveCamera;
        }>;
    }
}
//# sourceMappingURL=PointLightShadow.d.ts.map