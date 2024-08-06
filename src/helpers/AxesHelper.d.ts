import { Object3DNode } from '../../three-types';
import { AxesHelper } from 'three/src/helpers/AxesHelper.js';
export { AxesHelper } from 'three/src/helpers/AxesHelper.js';
import '../../src/core/Object3D';
declare module '../../lib/3/three' {
    interface Three {
        AxesHelper: typeof AxesHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            axesHelper: AxesHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        axesHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        axesHelper: string[];
    }
}
export type AxesHelperProps = Object3DNode<AxesHelper, typeof AxesHelper, {
    size?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        axesHelper: {
            size?: number;
        };
    }
}
//# sourceMappingURL=AxesHelper.d.ts.map