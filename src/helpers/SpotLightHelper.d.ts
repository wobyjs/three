import { Object3DNode } from '../../three-types';
import { Light } from 'three/src/lights/Light.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { SpotLightHelper } from 'three/src/helpers/SpotLightHelper.js';
export { SpotLightHelper } from 'three/src/helpers/SpotLightHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        SpotLightHelper: typeof SpotLightHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spotLightHelper: SpotLightHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        spotLightHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        spotLightHelper: string[];
    }
}
export type SpotLightHelperProps = Object3DNode<SpotLightHelper, typeof SpotLightHelper, {
    light: Light;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        spotLightHelper: Partial<{
            light: Light;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=SpotLightHelper.d.ts.map