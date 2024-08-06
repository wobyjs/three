import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial';
export * from 'three/src/materials/LineBasicMaterial';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
Three.LineBasicMaterial = LineBasicMaterial;
consParams.lineBasicMaterial = ['color',
    'fog',
    'linewidth',
    'linecap',
    'linejoin',
].toObject(); //as LineBasicMaterialParameters
objParams.lineBasicMaterial = [...objParams.material,
    /**
     * @default 'LineBasicMaterial'
     */
    'type',
    /**
     * @default 0xffffff
     */
    'color',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    'fog',
    /**
     * @default 1
     */
    'linewidth',
    /**
     * @default 'round'
     */
    'linecap',
    /**
     * @default 'round'
     */
    'linejoin',
    /**
     * Sets the color of the lines using data from a {@link Texture}.
     */
    'map',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts
consParams.lineBasicMaterialParameters = {
    ...consParams.materialParameters,
    ...['color',
        'fog',
        'linewidth',
        'linecap',
        'linejoin',
    ].toObject()
};
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts    
objParams.lineBasicMaterialParameters = [...objParams.materialParameters,
    'color',
    'fog',
    'linewidth',
    'linecap',
    'linejoin',
].distinct();
defaults.lineBasicMaterialParameters = {};
