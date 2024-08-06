import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js'
export * from 'three/examples/jsm/controls/ArcballControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ArcballControls: typeof ArcballControls
    }
}

Three.ArcballControls = ArcballControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arcballControls: ArcballControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        arcballControls: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        arcballControls: string[]
        arcballControlsEventMap: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts

consParams.arcballControls = [
    'camera',
    'domElement',
    'scene',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts

objParams.arcballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct()

export type ArcballControlsProps = Node<ArcballControls, typeof ArcballControls, { camera: Camera; domElement: HTMLElement; scene?: Scene | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        arcballControls: Partial<{ camera: Camera; domElement: HTMLElement; scene?: Scene | null; }>
    }
}

defaults.arcballControls = {}

