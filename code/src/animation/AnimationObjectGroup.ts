import { Node } from '../../three-types'
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
export { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        AnimationObjectGroup: typeof AnimationObjectGroup
    }
}

Three.AnimationObjectGroup = AnimationObjectGroup

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationObjectGroup: AnimationObjectGroupProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        animationObjectGroup: typeof animationObjectGroup
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        animationObjectGroup: typeof _animationObjectGroup
    }
}



const animationObjectGroup = ([
    // '...this.args',
] as const).distinct()
consParams.animationObjectGroup = animationObjectGroup



const _animationObjectGroup = ([
    'uuid',
    'stats',
] as const).distinct()
objProps.animationObjectGroup = _animationObjectGroup

export type AnimationObjectGroupProps = Node<AnimationObjectGroup, typeof AnimationObjectGroup, { args: any[]; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationObjectGroup: Partial<{ args: any[]; }>
    }
}

defaults.animationObjectGroup = {}