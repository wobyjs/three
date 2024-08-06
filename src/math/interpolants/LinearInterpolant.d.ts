import { Node } from '../../../three-types';
import { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js';
export { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js';
declare module '../../../lib/3/three' {
    interface Three {
        LinearInterpolant: typeof LinearInterpolant;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            linearInterpolant: LinearInterpolantProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        linearInterpolant: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        linearInterpolant: string[];
    }
}
export type LinearInterpolantProps = Node<LinearInterpolant, typeof LinearInterpolant, {
    parameterPositions: any;
    samplesValues: any;
    sampleSize: number;
    resultBuffer?: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        linearInterpolant: Partial<{
            parameterPositions: any;
            samplesValues: any;
            sampleSize: number;
            resultBuffer?: any;
        }>;
    }
}
//# sourceMappingURL=LinearInterpolant.d.ts.map