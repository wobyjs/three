import { Node } from '../../../three-types'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js'
export * from 'three/examples/jsm/modifiers/TessellateModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TessellateModifier: typeof TessellateModifier
    }
}

Three.TessellateModifier = TessellateModifier

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tessellateModifier: TessellateModifierProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tessellateModifier: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tessellateModifier: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts

consParams.tessellateModifier = [
    'maxEdgeLength',
    'maxIterations',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts

objParams.tessellateModifier = [
    'maxEdgeLength',
    'maxIterations',
].distinct()

export type TessellateModifierProps = Node<TessellateModifier, typeof TessellateModifier, { maxEdgeLength?: number; maxIterations?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tessellateModifier: { maxEdgeLength?: number; maxIterations?: number; }
    }
}

defaults.tessellateModifier = {}

