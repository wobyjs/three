import { Node } from '../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { FogExp2 } from 'three/src/scenes/FogExp2.js';
export { FogExp2 } from 'three/src/scenes/FogExp2.js';
import './Fog';
declare module '../../lib/3/three' {
    interface Three {
        FogExp2: typeof FogExp2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogExp2: FogExp2Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        fogExp2: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        fogExp2: string[];
    }
}
export type FogExp2Props = Node<FogExp2, typeof FogExp2, {
    color: ColorRepresentation;
    density?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        fogExp2: Partial<{
            color: ColorRepresentation;
            density?: number;
        }>;
    }
}
//# sourceMappingURL=FogExp2.d.ts.map