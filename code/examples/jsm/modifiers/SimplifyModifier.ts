import { Node } from '../../../three-types'
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier.js'
export * from 'three/examples/jsm/modifiers/SimplifyModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SimplifyModifier: typeof SimplifyModifier
    }
}

Three.SimplifyModifier = SimplifyModifier

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            simplifyModifier: SimplifyModifierProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        simplifyModifier: typeof simplifyModifier
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        simplifyModifier: typeof _simplifyModifier
    }
}



const simplifyModifier = ([
] as const).distinct()
consParams.simplifyModifier = simplifyModifier



const _simplifyModifier = ([
] as const).distinct()
objProps.simplifyModifier = _simplifyModifier

export type SimplifyModifierProps = Node<SimplifyModifier, typeof SimplifyModifier, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        simplifyModifier: {}
    }
}

defaults.simplifyModifier = {}

