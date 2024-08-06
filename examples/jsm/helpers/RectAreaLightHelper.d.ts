import { Node } from '../../../three-types';
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
export * from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        RectAreaLightHelper: typeof RectAreaLightHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rectAreaLightHelper: RectAreaLightHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rectAreaLightHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rectAreaLightHelper: string[];
    }
}
export type RectAreaLightHelperProps = Node<RectAreaLightHelper, typeof RectAreaLightHelper, {
    light: RectAreaLight;
    color?: ColorRepresentation;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rectAreaLightHelper: Partial<{
            light: RectAreaLight;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=RectAreaLightHelper.d.ts.map