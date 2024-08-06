import { Object3DNode } from '../../three-types';
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js';
export { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        DirectionalLightHelper: typeof DirectionalLightHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLightHelper: DirectionalLightHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLightHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        directionalLightHelper: string[];
    }
}
export type DirectionalLightHelperProps = Object3DNode<DirectionalLightHelper, typeof DirectionalLightHelper, {
    light: DirectionalLight;
    size?: number;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLightHelper: Partial<{
            light: DirectionalLight;
            size?: number;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=DirectionalLightHelper.d.ts.map