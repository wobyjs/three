import { Node } from '../../../three-types'
import { InteractiveGroup } from 'three/examples/jsm/interactive/InteractiveGroup.js'
export * from 'three/examples/jsm/interactive/InteractiveGroup.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        InteractiveGroup: typeof InteractiveGroup
    }
}

Three.InteractiveGroup = InteractiveGroup

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interactiveGroup: InteractiveGroupProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        interactiveGroup: string[]
        interactiveObject3dEventMap: string[]
        interactiveObject3d: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        interactiveGroup: string[]
        interactiveObject3dEventMap: string[]
        interactiveObject3d: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\InteractiveGroup.d.ts

consParams.interactiveObject3dEventMap = [
    'hoveron',
    'pointerdown',
    'pointerup',
    'pointermove',
    'mousedown',
    'mouseup',
    'mousemove',
    'click',
].distinct()


consParams.interactiveObject3d = [
].distinct()


consParams.interactiveGroup = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\InteractiveGroup.d.ts    

objParams.interactiveObject3dEventMap = [...objParams.object3dEventMap,
    'hoveron',
    'pointerdown',
    'pointerup',
    'pointermove',
    'mousedown',
    'mouseup',
    'mousemove',
    'click',
].distinct()


objParams.interactiveObject3d = [...objParams.object3d,
].distinct()


objParams.interactiveGroup = [...objParams.group,
].distinct()

export type InteractiveGroupProps = Node<InteractiveGroup, typeof InteractiveGroup, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        interactiveGroup: {}
    }
}

defaults.interactiveGroup = {}

