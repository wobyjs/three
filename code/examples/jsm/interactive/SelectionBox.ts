import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js'
export * from 'three/examples/jsm/interactive/SelectionBox.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SelectionBox: typeof SelectionBox
    }
}

Three.SelectionBox = SelectionBox

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            selectionBox: SelectionBoxProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        selectionBox: typeof selectionBox
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        selectionBox: typeof _selectionBox
    }
}



const selectionBox = ([
    'camera',
    'scene',
    'deep',
] as const).distinct()
consParams.selectionBox = selectionBox



const _selectionBox = ([
    'camera',
    'collection',
    'deep',
    'endPoint',
    'scene',
    'startPoint',
    'instances',
] as const).distinct()
objProps.selectionBox = _selectionBox

export type SelectionBoxProps = Node<SelectionBox, typeof SelectionBox, { camera: Camera; scene: Scene; deep?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionBox: Partial<{ camera: Camera; scene: Scene; deep?: number; }>
    }
}

defaults.selectionBox = {}

