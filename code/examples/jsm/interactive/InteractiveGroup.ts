import { Node } from '../../../three-types'
import { InteractiveGroup } from 'three/examples/jsm/interactive/InteractiveGroup.js'
export * from 'three/examples/jsm/interactive/InteractiveGroup.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        interactiveGroup: typeof interactiveGroup
        interactiveObject3dEventMap: typeof interactiveObject3dEventMap
        interactiveObject3d: typeof interactiveObject3d
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        interactiveGroup: typeof _interactiveGroup
        interactiveObject3dEventMap: typeof _interactiveObject3dEventMap
        interactiveObject3d: typeof _interactiveObject3d
    }
}



const interactiveObject3dEventMap = ([
    'hoveron',
    'pointerdown',
    'pointerup',
    'pointermove',
    'mousedown',
    'mouseup',
    'mousemove',
    'click',
] as const).distinct()
consParams.interactiveObject3dEventMap = interactiveObject3dEventMap


const interactiveObject3d = ([
] as const).distinct()
consParams.interactiveObject3d = interactiveObject3d


const interactiveGroup = ([
] as const).distinct()
consParams.interactiveGroup = interactiveGroup



const _interactiveObject3dEventMap = ([...objProps.object3dEventMap,
    'hoveron',
    'pointerdown',
    'pointerup',
    'pointermove',
    'mousedown',
    'mouseup',
    'mousemove',
    'click',
] as const).distinct()
objProps.interactiveObject3dEventMap = _interactiveObject3dEventMap


const _interactiveObject3d = ([...objProps.object3d,
] as const).distinct()
objProps.interactiveObject3d = _interactiveObject3d


const _interactiveGroup = ([...objProps.group,
] as const).distinct()
objProps.interactiveGroup = _interactiveGroup

export type InteractiveGroupProps = Node<InteractiveGroup, typeof InteractiveGroup, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        interactiveGroup: {}
    }
}

defaults.interactiveGroup = {}

