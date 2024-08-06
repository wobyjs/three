import { Object3DNode } from '../../three-types';
import { PointLight } from 'three/src/lights/PointLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { PointLightHelper } from 'three/src/helpers/PointLightHelper.js';
export { PointLightHelper } from 'three/src/helpers/PointLightHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        PointLightHelper: typeof PointLightHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightHelper: PointLightHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        pointLightHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        pointLightHelper: string[];
    }
}
export type PointLightHelperProps = Object3DNode<PointLightHelper, typeof PointLightHelper, {
    light: PointLight;
    sphereSize?: number;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        pointLightHelper: Partial<{
            light: PointLight;
            sphereSize?: number;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=PointLightHelper.d.ts.map