import { Node } from '../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Fog } from 'three/src/scenes/Fog.js';
export { Fog } from 'three/src/scenes/Fog.js';
declare module '../../lib/3/three' {
    interface Three {
        Fog: typeof Fog;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fog: FogProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        fog: string[];
        fogBase: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        fog: string[];
        fogBase: string[];
    }
}
export type FogProps = Node<Fog, typeof Fog, {
    color: ColorRepresentation;
    near?: number;
    far?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        fog: Partial<{
            color: ColorRepresentation;
            near?: number;
            far?: number;
        }>;
    }
}
//# sourceMappingURL=Fog.d.ts.map