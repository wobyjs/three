import { Object3DNode } from '../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { GridHelper } from 'three/src/helpers/GridHelper.js';
export { GridHelper } from 'three/src/helpers/GridHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        GridHelper: typeof GridHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gridHelper: GridHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        gridHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        gridHelper: string[];
    }
}
export type GridHelperProps = Object3DNode<GridHelper, typeof GridHelper, {
    size?: number;
    divisions?: number;
    colorCenterLine?: ColorRepresentation;
    colorGrid?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        gridHelper: {
            size?: number;
            divisions?: number;
            colorCenterLine?: ColorRepresentation;
            colorGrid?: ColorRepresentation;
        };
    }
}
//# sourceMappingURL=GridHelper.d.ts.map