import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import IrradianceNode from 'three/src/nodes/lighting/IrradianceNode.js'
export { IrradianceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        irradianceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        irradianceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts

consParams.irradianceNode = [
    'node',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts    

objParams.irradianceNode = [...objParams.lightingNode,
    'node',
].distinct()

export type IrradianceNodeProps = Node<IrradianceNode, typeof IrradianceNode, { node?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        irradianceNode: { node?: ENode | null; }
    }
}

defaults.irradianceNode = {}

