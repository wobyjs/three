import { Node } from '../../../three-types'
import CodeNode, { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js'
export { CodeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        codeNode: string[]
        codeNodeInclude: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        codeNode: string[]
        codeNodeInclude: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts

consParams.codeNodeInclude = [
].distinct()


consParams.codeNode = [
    'code',
    'includes',
    'language',
].distinct()


objParams.codeNode = [...objParams.node,
    'isCodeNode',
    'code',
    'language',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts

objParams.codeNodeInclude = [
].distinct()

export type CodeNodeProps = Node<CodeNode, typeof CodeNode, { code?: string; includes?: CodeNodeInclude[]; language?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        codeNode: { code?: string; includes?: CodeNodeInclude[]; language?: string; }
    }
}

defaults.codeNode = {}

