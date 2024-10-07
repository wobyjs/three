import { Node } from '../../../three-types'
import UserDataNode, { NodeUserData } from 'three/src/nodes/accessors/UserDataNode.js'
export { UserDataNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        UserDataNode: typeof UserDataNode
    }
}

Three.UserDataNode = UserDataNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            userDataNode: UserDataNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        userDataNode: typeof userDataNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        userDataNode: typeof _userDataNode
    }
}



const userDataNode = ([
    'property',
    'inputType',
    'userData',
] as const).distinct()
consParams.userDataNode = userDataNode



const _userDataNode = ([...objProps.referenceNode,
    'userData',
] as const).distinct()
objProps.userDataNode = _userDataNode

export type UserDataNodeProps = Node<UserDataNode, typeof UserDataNode, { property: string; inputType: string; userData?: NodeUserData | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        userDataNode: Partial<{ property: string; inputType: string; userData?: NodeUserData | null; }>
    }
}

defaults.userDataNode = {}

