import { Node } from '../../../three-types';
import { HSL, CMYK } from 'three/examples/jsm/math/ColorConverter.js';
export * from 'three/examples/jsm/math/ColorConverter.js';
declare module '../../../lib/3/three' {
    interface Three {
        HSL: HSL;
        CMYK: CMYK;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hsl: HSL;
            cmyk: CMYK;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        hsl: string[];
        cmyk: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        hsl: string[];
        cmyk: string[];
    }
}
export type HSLProps = Node<HSL, HSL, {
    h: number;
    s: number;
    l: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        hsl: Partial<{
            h: number;
            s: number;
            l: number;
        }>;
    }
}
export type CMYKProps = Node<CMYK, CMYK, {
    c: number;
    m: number;
    y: number;
    k: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cmyk: Partial<{
            c: number;
            m: number;
            y: number;
            k: number;
        }>;
    }
}
//# sourceMappingURL=ColorConverter.d.ts.map