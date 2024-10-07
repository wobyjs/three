import { Node } from '../../../three-types'
import UniformGroupNode from 'three/src/nodes/core/UniformGroupNode.js'
export { UniformGroupNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        UniformGroupNode: typeof UniformGroupNode
    }
}

Three.UniformGroupNode = UniformGroupNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformGroupNode: UniformGroupNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformGroupNode: typeof uniformGroupNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        uniformGroupNode: typeof _uniformGroupNode
    }
}



const uniformGroupNode = ([
    'name',
    'shared',
] as const).distinct()
consParams.uniformGroupNode = uniformGroupNode



const _uniformGroupNode = ([...objProps.node,
    'version',
    'shared',
    'isUniformGroup',
] as const).distinct()
objProps.uniformGroupNode = _uniformGroupNode

export type UniformGroupNodeProps = Node<UniformGroupNode, typeof UniformGroupNode, { name: string, shared?: boolean }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformGroupNode: Partial<{ name: string, shared?: boolean }>
    }
}

defaults.uniformGroupNode = {}

