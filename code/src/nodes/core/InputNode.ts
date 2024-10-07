import { Node } from '../../../three-types'
import InputNode from 'three/src/nodes/core/InputNode.js'
export { InputNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        inputNode: typeof inputNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        inputNode: typeof _inputNode
    }
}



const inputNode = ([
    'value',
    'nodeType',
] as const).distinct()
consParams.inputNode = inputNode



const _inputNode = ([...objProps.node,
    'isInputNode',
    'value',
    'precision',
] as const).distinct()
objProps.inputNode = _inputNode

export type InputNodeProps<T> = Node<InputNode<T>, typeof InputNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        inputNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.inputNode = {}
