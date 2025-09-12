import { MaterialNode } from './MaterialNode'
import { ShaderMaterial, ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js'
export { ShaderMaterial, ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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

declare module '../../lib/3/objProps' {
    interface objProps {
        shaderMaterial: typeof _shaderMaterial
        shaderMaterialParameters: typeof _shaderMaterialParameters
    }
}



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



const _shaderMaterialParameters = ([...objProps.materialParameters,
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
] as const).distinct()
objProps.shaderMaterialParameters = _shaderMaterialParameters


const _shaderMaterial = ([...objProps.material,
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
* @default { 'color': [ 1, 1, 1 ]  'uv': [ 0, 0 ] 'uv1' = [ 0, 0 ] }
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
] as const).distinct()
objProps.shaderMaterial = _shaderMaterial

export type ShaderMaterialProps = MaterialNode<ShaderMaterial, ShaderMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        shaderMaterial: Partial<ShaderMaterialParameters>
    }
}

defaults.shaderMaterial = {}