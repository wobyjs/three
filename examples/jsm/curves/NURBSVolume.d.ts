import { Node, Vector4 } from '../../../three-types';
import { NURBSVolume } from 'three/examples/jsm/curves/NURBSVolume.js';
export * from 'three/examples/jsm/curves/NURBSVolume.js';
declare module '../../../lib/3/three' {
    interface Three {
        NURBSVolume: typeof NURBSVolume;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsVolume: NURBSVolumeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsVolume: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nurbsVolume: string[];
    }
}
export type NURBSVolumeProps = Node<NURBSVolume, typeof NURBSVolume, {
    degree1: number;
    degree2: number;
    degree3: number;
    knots1: readonly number[];
    knots2: readonly number[];
    knots3: readonly number[];
    controlPoints: Vector4[][][];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSVolume: Partial<{
            degree1: number;
            degree2: number;
            degree3: number;
            knots1: readonly number[];
            knots2: readonly number[];
            knots3: readonly number[];
            controlPoints: Vector4[][][];
        }>;
    }
}
//# sourceMappingURL=NURBSVolume.d.ts.map