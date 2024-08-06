import { Node } from '../../../three-types';
import { LightProbe } from 'three/src/lights/LightProbe.js';
import { LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper.js';
export * from 'three/examples/jsm/helpers/LightProbeHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        LightProbeHelper: typeof LightProbeHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightProbeHelper: LightProbeHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lightProbeHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lightProbeHelper: string[];
    }
}
export type LightProbeHelperProps = Node<LightProbeHelper, typeof LightProbeHelper, {
    lightProbe: LightProbe;
    size: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lightProbeHelper: Partial<{
            lightProbe: LightProbe;
            size: number;
        }>;
    }
}
//# sourceMappingURL=LightProbeHelper.d.ts.map