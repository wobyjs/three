import { Node } from '../../../three-types';
import { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js';
export { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js';
declare module '../../../lib/3/three' {
    interface Three {
        DiscreteInterpolant: typeof DiscreteInterpolant;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            discreteInterpolant: DiscreteInterpolantProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        discreteInterpolant: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        discreteInterpolant: string[];
    }
}
export type DiscreteInterpolantProps = Node<DiscreteInterpolant, typeof DiscreteInterpolant, {
    parameterPositions: any;
    samplesValues: any;
    sampleSize: number;
    resultBuffer?: any;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        discreteInterpolant: Partial<{
            parameterPositions: any;
            samplesValues: any;
            sampleSize: number;
            resultBuffer?: any;
        }>;
    }
}
//# sourceMappingURL=DiscreteInterpolant.d.ts.map