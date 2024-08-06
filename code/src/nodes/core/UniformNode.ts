import { Node } from '../../../three-types'
import UniformNode from 'three/src/nodes/core/UniformNode.js'
export { UniformNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformNode: UniformNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        uniformNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\UniformNode.d.ts

consParams.uniformNode = [
    'value',
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\UniformNode.d.ts

objParams.uniformNode = [
].distinct()

export type UniformNodeProps<T> = Node<UniformNode<T>, typeof UniformNode<T>, { value: T; nodeType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformNode: Partial<{ value: any; nodeType?: string | null; }>
    }
}

defaults.uniformNode = {}

