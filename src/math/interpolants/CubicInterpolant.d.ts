import { Node } from '../../../three-types';
import { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js';
export { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js';
declare module '../../../lib/3/three' {
    interface Three {
        CubicInterpolant: typeof CubicInterpolant;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubicInterpolant: CubicInterpolantProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cubicInterpolant: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cubicInterpolant: string[];
    }
}
export type CubicInterpolantProps = Node<CubicInterpolant, typeof CubicInterpolant, {
    parameterPositions: any;
    samplesValues: any;
    sampleSize: number;
    resultBuffer?: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicInterpolant: Partial<{
            parameterPositions: any;
            samplesValues: any;
            sampleSize: number;
            resultBuffer?: any;
        }>;
    }
}
//# sourceMappingURL=CubicInterpolant.d.ts.map