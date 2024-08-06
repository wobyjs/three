import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js'
export * from 'three/examples/jsm/interactive/SelectionBox.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        selectionBox: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        selectionBox: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts

consParams.selectionBox = [
    'camera',
    'scene',
    'deep',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts

objParams.selectionBox = [
    'camera',
    'collection',
    'deep',
    'endPoint',
    'scene',
    'startPoint',
    'instances',
].distinct()

export type SelectionBoxProps = Node<SelectionBox, typeof SelectionBox, { camera: Camera; scene: Scene; deep?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionBox: Partial<{ camera: Camera; scene: Scene; deep?: number; }>
    }
}

defaults.selectionBox = {}

