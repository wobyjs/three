import { Node } from '../../../three-types'
import { EdgeSplitModifier } from 'three/examples/jsm/modifiers/EdgeSplitModifier.js'
export * from 'three/examples/jsm/modifiers/EdgeSplitModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        edgeSplitModifier: typeof edgeSplitModifier
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        edgeSplitModifier: typeof _edgeSplitModifier
    }
}



const edgeSplitModifier = ([
] as const).distinct()
consParams.edgeSplitModifier = edgeSplitModifier



const _edgeSplitModifier = ([
] as const).distinct()
objProps.edgeSplitModifier = _edgeSplitModifier

export type EdgeSplitModifierProps = Node<EdgeSplitModifier, typeof EdgeSplitModifier, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        edgeSplitModifier: {}
    }
}

defaults.edgeSplitModifier = {}

