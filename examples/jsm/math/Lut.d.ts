import { Node } from '../../../three-types';
import { Lut } from 'three/examples/jsm/math/Lut.js';
export * from 'three/examples/jsm/math/Lut.js';
declare module '../../../lib/3/three' {
    interface Three {
        Lut: typeof Lut;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lut: LutProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lut: string[];
        colorMapKeywords: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lut: string[];
        colorMapKeywords: string[];
    }
}
export type LutProps = Node<Lut, typeof Lut, {
    colormap?: string;
    numberofcolors?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lut: Partial<{
            colormap?: string;
            numberofcolors?: number;
        }>;
    }
}
//# sourceMappingURL=Lut.d.ts.map