import { Node, ColorArray } from '../../three-types';
import { Color, ColorRepresentation } from 'three/src/math/Color.js';
export { Color, ColorRepresentation } from 'three/src/math/Color.js';
declare module '../../lib/3/three' {
    interface Three {
        Color: typeof Color;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            color: ColorProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        color: string[];
        hsl: string[];
        rgb: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        color: string[];
        hsl: string[];
        rgb: string[];
    }
}
export type ColorProps = Node<Color, ColorArray, {
    color?: ColorRepresentation;
} | {
    r: number;
    g: number;
    b: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        color: {
            color?: ColorRepresentation;
        } | {
            r: number;
            g: number;
            b: number;
        };
    }
}
//# sourceMappingURL=Color.d.ts.map