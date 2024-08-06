import { Node } from '../../three-types';
import { Uniform } from 'three/src/core/Uniform.js';
export { Uniform } from 'three/src/core/Uniform.js';
declare module '../../lib/3/three' {
    interface Three {
        Uniform: typeof Uniform;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniform: UniformProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        uniform: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        uniform: string[];
    }
}
export type UniformProps<T = any> = Node<Uniform<T>, typeof Uniform<T>, {
    value: T;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        uniforms: Partial<{
            value: any;
        }>;
    }
}
//# sourceMappingURL=Uniform.d.ts.map