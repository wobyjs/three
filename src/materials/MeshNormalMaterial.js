import { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js';
export { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
import '../../lib/three/extensions';
Three.MeshNormalMaterial = MeshNormalMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts
consParams.meshNormalMaterialParameters = {
    ...consParams.materialParameters,
    ...['bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'wireframe',
        'wireframeLinewidth',
        'flatShading',
    ].toObject()
};
consParams.meshNormalMaterial = { ...consParams.meshNormalMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts    
objParams.meshNormalMaterialParameters = [...objParams.materialParameters,
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'wireframe',
    'wireframeLinewidth',
    'flatShading',
].distinct();
objParams.meshNormalMaterial = [...objParams.material,
    /**
     * @default 'MeshNormalMaterial'
     */
    'type',
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
     * @default new THREE.Vector2( 1, 1 )
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
     * @default false
     */
    'wireframe',
    /**
     * @default 1
     */
    'wireframeLinewidth',
    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
].distinct();
defaults.meshNormalMaterial = {};
