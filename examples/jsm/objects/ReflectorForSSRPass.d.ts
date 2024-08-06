import { ReflectorForSSRPassOptions, ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass.js';
export * from 'three/examples/jsm/objects/ReflectorForSSRPass.js';
import { Node } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        ReflectorForSSRPass: typeof ReflectorForSSRPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflectorForSsrPass: ReflectorForSSRPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        reflectorForSsrPass: string[];
        reflectorShader: string[];
        reflectorForSsrPassOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        reflectorForSsrPass: string[];
        reflectorShader: string[];
        reflectorForSsrPassOptions: string[];
    }
}
export type ReflectorForSSRPassProps<TGeometry extends BufferGeometry = BufferGeometry> = Node<ReflectorForSSRPass<TGeometry>, typeof ReflectorForSSRPass<TGeometry>, {
    geometry: TGeometry;
    options: ReflectorForSSRPassOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorForSsrPass: Partial<{
            geometry: BufferGeometry;
            options: ReflectorForSSRPassOptions;
        }>;
    }
}
//# sourceMappingURL=ReflectorForSSRPass.d.ts.map