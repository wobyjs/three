import { MeshMatcapMaterial } from 'three/src/materials/MeshMatcapMaterial.js';
export { MeshMatcapMaterial } from 'three/src/materials/MeshMatcapMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
import '../../lib/three/extensions';
Three.MeshMatcapMaterial = MeshMatcapMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts
consParams.meshMatcapMaterialParameters = {
    ...consParams.materialParameters,
    ...['color',
        'matcap',
        'map',
        'bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'alphaMap',
        'fog',
        'flatShading',
    ].toObject()
};
consParams.meshMatcapMaterial = { ...consParams.meshMatcapMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts    
objParams.meshMatcapMaterialParameters = [...objParams.materialParameters,
    'color',
    'matcap',
    'map',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'alphaMap',
    'fog',
    'flatShading',
].distinct();
objParams.meshMatcapMaterial = [...objParams.material,
    /**
     * @default 'MeshMatcapMaterial'
     */
    'type',
    /**
     * @default { 'MATCAP': '' }
     */
    'defines',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default null
     */
    'matcap',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'bumpMap',
    /**
     * @default 1
     */
    'bumpScale',
    /**
     * @default null
     */
    'normalMap',
    /**
     * @default THREE.TangentSpaceNormalMap
     */
    'normalMapType',
    /**
     * @default new Vector2( 1, 1 )
     */
    'normalScale',
    /**
     * @default null
     */
    'displacementMap',
    /**
     * @default 1
     */
    'displacementScale',
    /**
     * @default 0
     */
    'displacementBias',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct();
defaults.meshMatcapMaterial = {};
