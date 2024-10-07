import { Node } from '../../../three-types'
import UniformGroup from 'three/src/nodes/core/UniformGroup.js'
export { UniformGroup }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        UniformGroup: typeof UniformGroup
    }
}

Three.UniformGroup = UniformGroup

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformGroup: UniformGroupProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformGroup: typeof uniformGroup
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        uniformGroup: typeof _uniformGroup
    }
}


const uniformGroup = ([
    'name',
] as const).distinct()
consParams.uniformGroup = uniformGroup



const _uniformGroup = ([
    'name',
    'isUniformGroup',
] as const).distinct()
objProps.uniformGroup = _uniformGroup

export type UniformGroupProps = Node<UniformGroup, typeof UniformGroup, { name: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformGroup: Partial<{ name: string }>
    }
}

defaults.uniformGroup = {}

