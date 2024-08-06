import { Node } from '../../../three-types'
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier.js'
export * from 'three/examples/jsm/modifiers/SimplifyModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        simplifyModifier: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        simplifyModifier: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\SimplifyModifier.d.ts

consParams.simplifyModifier = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\SimplifyModifier.d.ts

objParams.simplifyModifier = [
].distinct()

export type SimplifyModifierProps = Node<SimplifyModifier, typeof SimplifyModifier, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        simplifyModifier: {}
    }
}

defaults.simplifyModifier = {}

