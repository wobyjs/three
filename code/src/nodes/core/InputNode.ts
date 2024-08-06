import { Node } from '../../../three-types'
import InputNode from 'three/src/nodes/core/InputNode.js'
export { InputNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            inputNode: InputNodeProps<any>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        inputNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        inputNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts

consParams.inputNode = [
    'value',
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts    

objParams.inputNode = [...objParams.node,
    'isInputNode',
    'value',
    'precision',
].distinct()

export type InputNodeProps<T> = Node<InputNode<T>, typeof InputNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        inputNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.inputNode = {}
