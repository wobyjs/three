import { Node } from '../../three-types';
import { Interpolant } from 'three/src/math/Interpolant.js';
export { Interpolant } from 'three/src/math/Interpolant.js';
declare module '../../lib/3/three' {
    interface Three {
        Interpolant: typeof Interpolant;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interpolant: InterpolantProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        interpolant: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        interpolant: string[];
    }
}
export type InterpolantProps = Node<Interpolant, typeof Interpolant, {
    parameterPositions: any;
    sampleValues: any;
    sampleSize: number;
    resultBuffer?: any;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        interpolant: Partial<{
            parameterPositions: any;
            sampleValues: any;
            sampleSize: number;
            resultBuffer?: any;
        }>;
    }
}
//# sourceMappingURL=Interpolant.d.ts.map