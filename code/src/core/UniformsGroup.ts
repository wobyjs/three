import { Node } from '../../three-types'
import { UniformsGroup } from 'three/src/core/UniformsGroup.js'
export { UniformsGroup } from 'three/src/core/UniformsGroup.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        UniformsGroup: typeof UniformsGroup
    }
}

Three.UniformsGroup = UniformsGroup

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformsGroup: UniformsGroupProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        uniformsGroup: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        uniformsGroup: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js}
 */

consParams.uniformsGroup = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGl2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */

objParams.uniformsGroup = [
    'id',
    'usage',
    'uniforms',
].distinct()

export type UniformsGroupProps = Node<UniformsGroup, typeof UniformsGroup, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        uniformsGroup: Partial<{}>
    }
}

defaults.uniformsGroup = {}

