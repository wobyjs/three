import { Node } from '../../three-types';
import { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow.js';
export { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow.js';
import './LightShadow';
declare module '../../lib/3/three' {
    interface Three {
        DirectionalLightShadow: typeof DirectionalLightShadow;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLightShadow: DirectionalLightShadowProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        directionalLightShadow: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        directionalLightShadow: string[];
    }
}
export type DirectionalLightShadowProps = Node<DirectionalLightShadow, typeof DirectionalLightShadow, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        directionalLightShadow: {};
    }
}
//# sourceMappingURL=DirectionalLightShadow.d.ts.map