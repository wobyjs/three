import { Node } from '../../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import Color4 from 'three/src/renderers/common/Color4.js';
export { Color4 };
declare module '../../../lib/3/three' {
    interface Three {
        Color4: typeof Color4;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            color4: Color4Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        color4: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        color4: string[];
    }
}
export type Color4Props = Node<Color4, typeof Color4, {
    color?: ColorRepresentation;
} | {
    r: number;
    g: number;
    b: number;
    a?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        color4: {
            color?: ColorRepresentation;
        } | {
            r: number;
            g: number;
            b: number;
            a?: number;
        };
    }
}
//# sourceMappingURL=Color4.d.ts.map