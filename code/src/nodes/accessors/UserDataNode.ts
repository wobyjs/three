import { Object3DNode } from '../../../three-types'
import UserDataNode, { NodeUserData } from 'three/src/nodes/accessors/UserDataNode.js'
export { UserDataNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        userDataNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        userDataNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts

consParams.userDataNode = [
    'property',
    'inputType',
    'userData',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts    

objParams.userDataNode = [...objParams.referenceNode,
    'userData',
].distinct()

export type UserDataNodeProps = Object3DNode<UserDataNode, typeof UserDataNode, { property: string; inputType: string; userData?: NodeUserData | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        userDataNode: Partial<{ property: string; inputType: string; userData?: NodeUserData | null; }>
    }
}

defaults.userDataNode = {}

