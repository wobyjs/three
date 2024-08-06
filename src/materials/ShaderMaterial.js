import { ShaderMaterial } from 'three/src/materials/ShaderMaterial.js';
export { ShaderMaterial } from 'three/src/materials/ShaderMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
Three.ShaderMaterial = ShaderMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShaderMaterial.d.ts
consParams.shaderMaterialParameters = {
    ...consParams.materialParameters,
    ...['uniforms',
        'uniformsGroups',
        'vertexShader',
        'fragmentShader',
        'linewidth',
        'wireframe',
        'wireframeLinewidth',
        'lights',
        'clipping',
        'fog',
        'extensions',
        'glslVersion',
    ].toObject()
};
consParams.shaderMaterial = { ...consParams.shaderMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShaderMaterial.d.ts    
objParams.shaderMaterialParameters = [...objParams.materialParameters,
    'uniforms',
    'cloneUniformsGroups',
    'vertexShader',
    'fragmentShader',
    'linewidth',
    'wireframe',
    'wireframeLinewidth',
    'lights',
    'clipping',
    'fog',
    'extensions',
    'glslVersion',
].distinct();
objParams.shaderMaterial = [...objParams.material,
    /**
     * @default 'ShaderMaterial'
     */
    'type',
    /**
     * @default {}
     */
    'defines',
    /**
     * @default {}
     */
    'uniforms',
    'uniformsGroups',
    'vertexShader',
    'fragmentShader',
    /**
     * @default 1
     */
    'linewidth',
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
    /**
     * @default false
     */
    'lights',
    /**
     * @default false
     */
    'clipping',
    /**
     * @default {
     *   clipCullDistance: false,
     *   multiDraw: false
     * }
     */
    'extensions',
    /**

objParams.             * @default { 'color': [ 1, 1, 1 ].distinct() 'uv': [ 0, 0 ].distinct() 'uv1' = [ 0, 0 ].distinct() }
     */
    'defaultAttributeValues',
    /**
     * @default undefined
     */
    'index0AttributeName',
    /**
     * @default false
     */
    'uniformsNeedUpdate',
    /**
     * @default null
     */
    'glslVersion',
].distinct();
defaults.shaderMaterial = {};
