import { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js';
export { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
Three.MeshPhongMaterial = MeshPhongMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhongMaterial.d.ts
consParams.meshPhongMaterialParameters = {
    ...consParams.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    ...['color',
        'specular',
        'shininess',
        'opacity',
        'map',
        'lightMap',
        'lightMapIntensity',
        'aoMap',
        'aoMapIntensity',
        'emissive',
        'emissiveIntensity',
        'emissiveMap',
        'bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'specularMap',
        'alphaMap',
        'envMap',
        'envMapRotation',
        'combine',
        'reflectivity',
        'refractionRatio',
        'wireframe',
        'wireframeLinewidth',
        'wireframeLinecap',
        'wireframeLinejoin',
        'fog',
        'flatShading',
    ].toObject()
};
consParams.meshPhongMaterial = { ...consParams.meshPhongMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhongMaterial.d.ts    
objParams.meshPhongMaterialParameters = [...objParams.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    'color',
    'specular',
    'shininess',
    'opacity',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'emissive',
    'emissiveIntensity',
    'emissiveMap',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'specularMap',
    'alphaMap',
    'envMap',
    'envMapRotation',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframe',
    'wireframeLinewidth',
    'wireframeLinecap',
    'wireframeLinejoin',
    'fog',
    'flatShading',
].distinct();
objParams.meshPhongMaterial = [...objParams.material,
    /**
     * @default 'MeshNormalMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default new THREE.Color( 0x111111 )
     */
    'specular',
    /**
     * @default 30
     */
    'shininess',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'lightMap',
    /**
     * @default null
     */
    'lightMapIntensity',
    /**
     * @default null
     */
    'aoMap',
    /**
     * @default null
     */
    'aoMapIntensity',
    /**
     * @default new THREE.Color( 0x000000 )
     */
    'emissive',
    /**
     * @default 1
     */
    'emissiveIntensity',
    /**
     * @default null
     */
    'emissiveMap',
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
    'specularMap',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default null
     */
    'envMap',
    /**
     * The rotation of the environment map in radians. Default is `(0,0,0)`.
     */
    'envMapRotation',
    /**
     * @default THREE.MultiplyOperation
     */
    'combine',
    /**
     * @default 1
     */
    'reflectivity',
    /**
     * @default 0.98
     */
    'refractionRatio',
    /**
     * @default false
     */
    'wireframe',
    /**
     * @default 1
     */
    'wireframeLinewidth',
    /**
     * @default 'round'
     */
    'wireframeLinecap',
    /**
     * @default 'round'
     */
    'wireframeLinejoin',
    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
    /**
     * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
     */
    'metal',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct();
defaults.meshPhongMaterial = {};
