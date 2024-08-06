import { Node } from '../../../three-types';
import { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js';
export { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js';
import '../Interpolant';
declare module '../../../lib/3/three' {
    interface Three {
        QuaternionLinearInterpolant: typeof QuaternionLinearInterpolant;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternionLinearInterpolant: QuaternionLinearInterpolantProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        quaternionLinearInterpolant: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        quaternionLinearInterpolant: string[];
    }
}
export type QuaternionLinearInterpolantProps = Node<QuaternionLinearInterpolant, typeof QuaternionLinearInterpolant, {
    parameterPositions: any;
    samplesValues: any;
    sampleSize: number;
    resultBuffer?: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionLinearInterpolant: Partial<{
            parameterPositions: any;
            samplesValues: any;
            sampleSize: number;
            resultBuffer?: any;
        }>;
    }
}
//# sourceMappingURL=QuaternionLinearInterpolant.d.ts.map