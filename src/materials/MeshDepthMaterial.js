import { MeshDepthMaterial } from 'three/src/materials/MeshDepthMaterial.js';
export { MeshDepthMaterial } from 'three/src/materials/MeshDepthMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
import '../../lib/three/extensions';
Three.MeshDepthMaterial = MeshDepthMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts
consParams.meshDepthMaterialParameters = {
    ...consParams.materialParameters,
    ...['map',
        'alphaMap',
        'depthPacking',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'wireframe',
        'wireframeLinewidth',
    ].toObject()
};
consParams.meshDepthMaterial = { ...consParams.meshDepthMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts    
objParams.meshDepthMaterialParameters = [...objParams.materialParameters,
    'map',
    'alphaMap',
    'depthPacking',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'wireframe',
    'wireframeLinewidth',
].distinct();
objParams.meshDepthMaterial = [...objParams.material,
    /**
     * @default 'MeshDepthMaterial'
     */
    'type',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default THREE.BasicDepthPacking
     */
    'depthPacking',
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
     * @default false
     */
    'fog',
].distinct();
defaults.meshDepthMaterial = {};
