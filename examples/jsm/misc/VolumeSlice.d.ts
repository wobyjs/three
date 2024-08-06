import { Node } from '../../../three-types';
import { VolumeSlice } from 'three/examples/jsm/misc/VolumeSlice.js';
export * from 'three/examples/jsm/misc/VolumeSlice.js';
declare module '../../../lib/3/three' {
    interface Three {
        VolumeSlice: typeof VolumeSlice;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            volumeSlice: VolumeSliceProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        volumeSlice: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        volumeSlice: string[];
    }
}
export type VolumeSliceProps = Node<VolumeSlice, typeof VolumeSlice, {
    xLenvolumeSlice: VolumeSlice;
    index?: number;
    axis?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        volumeSlice: Partial<{
            xLenvolumeSlice: VolumeSlice;
            index?: number;
            axis?: string;
        }>;
    }
}
//# sourceMappingURL=VolumeSlice.d.ts.map