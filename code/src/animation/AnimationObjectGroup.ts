import { Object3DNode } from '../../three-types'
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
export { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        animationObjectGroup: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        animationObjectGroup: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts

consParams.animationObjectGroup = [
    // '...this.args',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts

objParams.animationObjectGroup = [
    'uuid',
    'stats',
].distinct()

export type AnimationObjectGroupProps = Object3DNode<AnimationObjectGroup, typeof AnimationObjectGroup, { args: any[]; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationObjectGroup: Partial<{ args: any[]; }>
    }
}

defaults.animationObjectGroup = {}