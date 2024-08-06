import { ShadowMaterial } from 'three/src/materials/ShadowMaterial.js';
export { ShadowMaterial } from 'three/src/materials/ShadowMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
Three.ShadowMaterial = ShadowMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts
consParams.shadowMaterialParameters = {
    ...consParams.shaderMaterialParameters,
    ...['color',
        'fog',
    ].toObject()
};
consParams.shadowMaterial = {
    ...consParams.shadowMaterialParameters,
    ...[
        /**
         * @default 'ShadowMaterial'
         */
        'type',
        /**
         * @default new THREE.Color( 0x000000 )
         */
        'color',
        /**
         * @default true
         */
        'transparent',
        /**
         * Whether the material is affected by fog. Default is true.
         * @default fog
         */
        'fog',
    ].toObject()
};
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts    
objParams.shadowMaterialParameters = [...objParams.materialParameters,
    'color',
    'fog',
].distinct();
objParams.shadowMaterial = [...objParams.material,
    /**
     * @default 'ShadowMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0x000000 )
     */
    'color',
    /**
     * @default true
     */
    'transparent',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct();
defaults.shadowMaterial = {};
