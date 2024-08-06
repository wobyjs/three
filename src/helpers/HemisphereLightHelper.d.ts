import { Object3DNode } from '../../three-types';
import { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js';
export { HemisphereLightHelper } from 'three/src/helpers/HemisphereLightHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        HemisphereLightHelper: typeof HemisphereLightHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLightHelper: HemisphereLightHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        hemisphereLightHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        hemisphereLightHelper: string[];
    }
}
export type HemisphereLightHelperProps = Object3DNode<HemisphereLightHelper, typeof HemisphereLightHelper, {
    light: HemisphereLight;
    size: number;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        hemisphereLightHelper: Partial<{
            light: HemisphereLight;
            size: number;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=HemisphereLightHelper.d.ts.map