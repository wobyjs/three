import { LineDashedMaterial } from 'three/src/materials/LineDashedMaterial.js';
export { LineDashedMaterial } from 'three/src/materials/LineDashedMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './LineBasicMaterial';
import '../../lib/three/extensions';
Three.LineDashedMaterial = LineDashedMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts
consParams.lineDashedMaterialParameters = ['scale',
    'dashSize',
    'gapSize',
].toObject();
consParams.lineDashedMaterial = {
    ...consParams.lineBasicMaterial,
    ...[
        'scale',
        'dashSize',
        'gapSize',
    ].toObject(),
};
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts    
objParams.lineDashedMaterialParameters = [...objParams.lineBasicMaterialParameters,
    'scale',
    'dashSize',
    'gapSize',
].distinct();
objParams.lineDashedMaterial = [...objParams.lineBasicMaterial,
    /**
     * @default 'LineDashedMaterial'
     */
    'type',
    /**
     * @default 1
     */
    'scale',
    /**
     * @default 1
     */
    'dashSize',
    /**
     * @default 1
     */
    'gapSize',
].distinct();
defaults.lineDashedMaterial = {};
