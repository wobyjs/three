import { MaterialNode } from './MaterialNode'
import { ShaderMaterial, ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js'
export { ShaderMaterial } from 'three/src/materials/ShaderMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { WrapAsString } from '../../three-types'
import './Material'

declare module '../../lib/3/three'
{
    interface Three {
        ShaderMaterial: typeof ShaderMaterial
    }
}

Three.ShaderMaterial = ShaderMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderMaterial: ShaderMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        shaderMaterial: WrapAsString<ShaderMaterialParameters>
        shaderMaterialParameters: WrapAsString<ShaderMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        shaderMaterial: string[]
        shaderMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShaderMaterial.d.ts

consParams.shaderMaterialParameters = {
    ...consParams.materialParameters,
    ...(['uniforms',
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
    ] as const).toObject()
}


consParams.shaderMaterial = { ...consParams.shaderMaterialParameters }

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
].distinct()


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
].distinct()

export type ShaderMaterialProps = MaterialNode<ShaderMaterial, ShaderMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        shaderMaterial: Partial<ShaderMaterialParameters>
    }
}

defaults.shaderMaterial = {}