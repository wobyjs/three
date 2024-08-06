import { Object3DNode } from '../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { PolarGridHelper } from 'three/src/helpers/PolarGridHelper.js';
export { PolarGridHelper } from 'three/src/helpers/PolarGridHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        PolarGridHelper: typeof PolarGridHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            polarGridHelper: PolarGridHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        polarGridHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        polarGridHelper: string[];
    }
}
export type PolarGridHelperProps = Object3DNode<PolarGridHelper, typeof PolarGridHelper, {
    radius?: number;
    radials?: number;
    circles?: number;
    divisions?: number;
    color1?: ColorRepresentation;
    color2?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        polarGridHelper: {
            radius?: number;
            sectors?: number;
            rings?: number;
            divisions?: number;
            color1?: ColorRepresentation;
            color2?: ColorRepresentation;
        };
    }
}
//# sourceMappingURL=PolarGridHelper.d.ts.map