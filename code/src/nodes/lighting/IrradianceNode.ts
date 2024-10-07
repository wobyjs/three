import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import IrradianceNode from 'three/src/nodes/lighting/IrradianceNode.js'
export { IrradianceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        IrradianceNode: typeof IrradianceNode
    }
}

Three.IrradianceNode = IrradianceNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            irradianceNode: IrradianceNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        irradianceNode: typeof irradianceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        irradianceNode: typeof _irradianceNode
    }
}



const irradianceNode = ([
    'node',
] as const).distinct()
consParams.irradianceNode = irradianceNode



const _irradianceNode = ([...objProps.lightingNode,
    'node',
] as const).distinct()
objProps.irradianceNode = _irradianceNode

export type IrradianceNodeProps = Node<IrradianceNode, typeof IrradianceNode, { node?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        irradianceNode: { node?: ENode | null; }
    }
}

defaults.irradianceNode = {}

