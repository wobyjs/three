import { Node } from '../../../three-types'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js'
export * from 'three/examples/jsm/modifiers/TessellateModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        tessellateModifier: typeof tessellateModifier
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tessellateModifier: typeof _tessellateModifier
    }
}



const tessellateModifier = ([
    'maxEdgeLength',
    'maxIterations',
] as const).distinct()
consParams.tessellateModifier = tessellateModifier



const _tessellateModifier = ([
    'maxEdgeLength',
    'maxIterations',
] as const).distinct()
objProps.tessellateModifier = _tessellateModifier

export type TessellateModifierProps = Node<TessellateModifier, typeof TessellateModifier, { maxEdgeLength?: number; maxIterations?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tessellateModifier: { maxEdgeLength?: number; maxIterations?: number; }
    }
}

defaults.tessellateModifier = {}

