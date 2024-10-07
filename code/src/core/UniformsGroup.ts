import { Node } from '../../three-types'
import { UniformsGroup } from 'three/src/core/UniformsGroup.js'
export { UniformsGroup } from 'three/src/core/UniformsGroup.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        uniformsGroup: typeof uniformsGroup
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        uniformsGroup: typeof _uniformsGroup
    }
}


/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js}
 */

const uniformsGroup = ([
] as const).distinct()
consParams.uniformsGroup = uniformsGroup


/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGl2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */

const _uniformsGroup = ([
    'id',
    'usage',
    'uniforms',
] as const).distinct()
objProps.uniformsGroup = _uniformsGroup

export type UniformsGroupProps = Node<UniformsGroup, typeof UniformsGroup, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        uniformsGroup: Partial<{}>
    }
}

defaults.uniformsGroup = {}

