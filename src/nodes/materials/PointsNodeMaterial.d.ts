import { MaterialNode } from '../../materials/MaterialNode';
import PointsNodeMaterial, { PointsNodeMaterialParameters } from 'three/src/nodes/materials/PointsNodeMaterial.js';
export { PointsNodeMaterial };
import './NodeMaterial';
import '../../materials/PointsMaterial';
import { WrapAsString } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        PointsNodeMaterial: typeof PointsNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointsNodeMaterial: PointsNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pointsNodeMaterial: WrapAsString<PointsNodeMaterialParameters>;
        pointsNodeMaterialParameters: WrapAsString<PointsNodeMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pointsNodeMaterial: string[];
        pointsNodeMaterialParameters: string[];
    }
}
export type PointsNodeMaterialProps = MaterialNode<PointsNodeMaterial, typeof PointsNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pointsNodeMaterial: Partial<PointsNodeMaterial>;
    }
}
//# sourceMappingURL=PointsNodeMaterial.d.ts.map