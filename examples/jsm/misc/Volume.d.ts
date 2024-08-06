import { Node } from '../../../three-types';
import { Volume } from 'three/examples/jsm/misc/Volume.js';
export * from 'three/examples/jsm/misc/Volume.js';
declare module '../../../lib/3/three' {
    interface Three {
        Volume: typeof Volume;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            volume: VolumeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        volume: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        volume: string[];
    }
}
export type VolumeProps = Node<Volume, typeof Volume, {
    xLength?: number;
    yLength?: number;
    zLength?: number;
    type?: string;
    arrayBuffer?: ArrayLike<number>;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        volume: Partial<{
            xLength?: number;
            yLength?: number;
            zLength?: number;
            type?: string;
            arrayBuffer?: ArrayLike<number>;
        }>;
    }
}
//# sourceMappingURL=Volume.d.ts.map