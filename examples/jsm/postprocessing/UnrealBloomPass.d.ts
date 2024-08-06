import { Node, Vector2 } from '../../../three-types';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
export * from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        UnrealBloomPass: typeof UnrealBloomPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: UnrealBloomPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        unrealBloomPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        unrealBloomPass: string[];
    }
}
export type UnrealBloomPassProps = Node<UnrealBloomPass, typeof UnrealBloomPass, {
    resolution: Vector2;
    strength: number;
    radius: number;
    threshold: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        unrealBloomPass: Partial<{
            resolution: Vector2;
            strength: number;
            radius: number;
            threshold: number;
        }>;
    }
}
//# sourceMappingURL=UnrealBloomPass.d.ts.map