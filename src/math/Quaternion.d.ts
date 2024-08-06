import { Node } from '../../three-types';
import { Quaternion } from 'three/src/math/Quaternion.js';
declare module '../../lib/3/three' {
    interface Three {
        Quaternion: typeof Quaternion;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternion: QuaternionProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        quaternion: string[];
        quaternionLike: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        quaternion: string[];
        quaternionLike: string[];
    }
}
export type QuaternionProps = Node<Quaternion, typeof Quaternion, {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        quaternion: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    }
}
//# sourceMappingURL=Quaternion.d.ts.map