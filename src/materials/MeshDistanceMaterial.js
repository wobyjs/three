import { MeshDistanceMaterial } from 'three/src/materials/MeshDistanceMaterial.js';
export { MeshDistanceMaterial } from 'three/src/materials/MeshDistanceMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
import '../../lib/three/extensions';
Three.MeshDistanceMaterial = MeshDistanceMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts
consParams.meshDistanceMaterialParameters = ['map',
    'alphaMap',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'farDistance',
    'nearDistance',
    'referencePosition',
].toObject();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts    
objParams.meshDistanceMaterialParameters = [...objParams.materialParameters,
    'map',
    'alphaMap',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'farDistance',
    'nearDistance',
    'referencePosition',
].distinct();
objParams.meshDistanceMaterial = [...objParams.material,
    /**
     * @default 'MeshDistanceMaterial'
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
    'fog',
].distinct();
consParams.meshDistanceMaterial = { ...consParams.meshDistanceMaterialParameters };
defaults.meshDistanceMaterial = {};
