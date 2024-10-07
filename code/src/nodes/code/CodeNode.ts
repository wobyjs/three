import { Node } from '../../../three-types'
import CodeNode, { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js'
export { CodeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CodeNode: typeof CodeNode
    }
}

Three.CodeNode = CodeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            codeNode: CodeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        codeNode: typeof codeNode
        codeNodeInclude: typeof codeNodeInclude
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        codeNode: typeof _codeNode
        codeNodeInclude: typeof _codeNodeInclude
    }
}



const codeNodeInclude = ([
] as const).distinct()
consParams.codeNodeInclude = codeNodeInclude


const codeNode = ([
    'code',
    'includes',
    'language',
] as const).distinct()
consParams.codeNode = codeNode


const _codeNode = ([...objProps.node,
    'isCodeNode',
    'code',
    'language',
] as const).distinct()
objProps.codeNode = _codeNode



const _codeNodeInclude = ([
] as const).distinct()
objProps.codeNodeInclude = _codeNodeInclude

export type CodeNodeProps = Node<CodeNode, typeof CodeNode, { code?: string; includes?: CodeNodeInclude[]; language?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        codeNode: { code?: string; includes?: CodeNodeInclude[]; language?: string; }
    }
}

defaults.codeNode = {}

