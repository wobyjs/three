import { Node } from '../../../three-types'
import ConstNode from 'three/src/nodes/core/ConstNode.js'
export { ConstNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        constNode: string[]
        anyObject: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        constNode: string[]
        anyObject: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\constants.d.ts
/** Should be the same type as Object3d.userData */
/** generic key value type,curretly used by nodes  */

consParams.anyObject = [
].distinct()

/** a generic JSON type, used by nodes only */
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ConstNode.d.ts

consParams.constNode = [
    'value',
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\constants.d.ts
/** generic key value type,curretly used by nodes  */

objParams.anyObject = [
    // [key: string].distinct()

].distinct()

/** a generic JSON type, used by nodes only */
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ConstNode.d.ts

objParams.constNode = [
    'isConstNode',
].distinct()

export type ConstNodeProps<T> = Node<ConstNode<T>, typeof ConstNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        constNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.constNode = {}
