import { Node } from '../../../three-types'
import ConstNode from 'three/src/nodes/core/ConstNode.js'
export { ConstNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            constNode: ConstNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        constNode: typeof constNode
        anyObject: typeof anyObject
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        constNode: typeof _constNode
        anyObject: typeof _anyObject
    }
}


/** Should be the same type as Object3d.userData */
/** generic key value type,curretly used by nodes  */

const anyObject = ([
] as const).distinct()
consParams.anyObject = anyObject

/** a generic JSON type, used by nodes only */


const constNode = ([
    'value',
    'nodeType',
] as const).distinct()
consParams.constNode = constNode


/** generic key value type,curretly used by nodes  */

const _anyObject = ([
    // [key: string]
] as const).distinct()
objProps.anyObject = _anyObject

/** a generic JSON type, used by nodes only */


const _constNode = ([
    'isConstNode',
] as const).distinct()
objProps.constNode = _constNode

export type ConstNodeProps<T> = Node<ConstNode<T>, typeof ConstNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        constNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.constNode = {}
