import { MaterialNode } from './MaterialNode';
import { PointsMaterial, PointsMaterialParameters } from 'three/src/materials/PointsMaterial.js';
export { PointsMaterial, PointsMaterialParameters } from 'three/src/materials/PointsMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        PointsMaterial: typeof PointsMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointsMaterial: PointsMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        pointsMaterial: WrapAsString<PointsMaterialParameters>;
        pointsMaterialParameters: WrapAsString<PointsMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        pointsMaterial: string[];
        pointsMaterialParameters: string[];
    }
}
export type PointsMaterialProps = MaterialNode<PointsMaterial, PointsMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        pointsMaterial: Partial<PointsMaterialParameters>;
    }
}
//# sourceMappingURL=PointsMaterial.d.ts.map