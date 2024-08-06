import { LightNode } from './LightNode';
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js';
import { LightProbe } from 'three/src/lights/LightProbe.js';
export { LightProbe } from 'three/src/lights/LightProbe.js';
import './Light';
declare module '../../lib/3/three' {
    interface Three {
        LightProbe: typeof LightProbe;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightProbe: LightProbeProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lightProbe: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lightProbe: string[];
    }
}
export type LightProbeProps = LightNode<LightProbe, typeof LightProbe, {
    sh?: SphericalHarmonics3;
    intensity?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lightProbe: {
            sh?: SphericalHarmonics3;
            intensity?: number;
        };
    }
}
//# sourceMappingURL=LightProbe.d.ts.map