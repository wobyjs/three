import { Node } from '../../three-types'
import { Uniform } from 'three/src/core/Uniform.js'
export { Uniform } from 'three/src/core/Uniform.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Uniform: typeof Uniform
    }
}

Three.Uniform = Uniform

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniform: UniformProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        uniform: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        uniform: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Uniform.d.ts
/**
 * Uniforms are global GlSL variables.
 * They are passed to shader programs.
 * @example
 * When declaring a uniform of a {@link THREE.ShaderMaterial it is declared by value or by object.
 * ```typescript
 * uniforms: {
 * time: {
 *     value.0
 *     
 * resolution Uniform(new Vector2())
 * 
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform / nodes / materials / instance / uniform}
 * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGpu / instance / uniform}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js}
 */

consParams.uniform = [
    /**
     * Create a new instance of {@link THREE.Uniform}
     * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
     */
    'value',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Uniform.d.ts
/**
 * Uniforms are global GlSL variables.
 * They are passed to shader programs.
 * @example
 * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial it is declared by value or by object.
 * ```typescript
 * uniforms: {
 *     time: {
 *         value: 1.0
 *     
 *     resolution: new Uniform(new Vector2())
 * }
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGl2 / nodes / materials / instance / uniform}
 * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGpu / instance / uniform}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
 */

objParams.uniform = [
    /**
     * Current value of the uniform.
     */
    'value',
].distinct()

export type UniformProps<T = any> = Node<Uniform<T>, typeof Uniform<T>, { value: T; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        uniforms: Partial<{ value: any }>
    }
}

defaults.uniforms = {}

