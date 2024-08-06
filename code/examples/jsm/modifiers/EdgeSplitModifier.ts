import { Node } from '../../../three-types'
import { EdgeSplitModifier } from 'three/examples/jsm/modifiers/EdgeSplitModifier.js'
export * from 'three/examples/jsm/modifiers/EdgeSplitModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        EdgeSplitModifier: typeof EdgeSplitModifier
    }
}

Three.EdgeSplitModifier = EdgeSplitModifier

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            edgeSplitModifier: EdgeSplitModifierProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        edgeSplitModifier: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        edgeSplitModifier: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\EdgeSplitModifier.d.ts

consParams.edgeSplitModifier = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\EdgeSplitModifier.d.ts

objParams.edgeSplitModifier = [
].distinct()

export type EdgeSplitModifierProps = Node<EdgeSplitModifier, typeof EdgeSplitModifier, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        edgeSplitModifier: {}
    }
}

defaults.edgeSplitModifier = {}

