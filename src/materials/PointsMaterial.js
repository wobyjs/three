import { PointsMaterial } from 'three/src/materials/PointsMaterial.js';
export { PointsMaterial } from 'three/src/materials/PointsMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
Three.PointsMaterial = PointsMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts
consParams.pointsMaterialParameters = {
    ...consParams.materialParameters,
    ...['color',
        'map',
        'alphaMap',
        'size',
        'sizeAttenuation',
        'fog',
    ].toObject()
};
consParams.pointsMaterial = { ...consParams.pointsMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts    
objParams.pointsMaterialParameters = [...objParams.materialParameters,
    'color',
    'map',
    'alphaMap',
    'size',
    'sizeAttenuation',
    'fog',
].distinct();
objParams.pointsMaterial = [...objParams.material,
    /**
     * @default 'PointsMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default 1
     */
    'size',
    /**
     * @default true
     */
    'sizeAttenuation',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct();
defaults.pointsMaterial = {};
