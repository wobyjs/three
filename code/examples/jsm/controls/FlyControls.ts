import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'
export * from 'three/examples/jsm/controls/FlyControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FlyControls: typeof FlyControls
    }
}

Three.FlyControls = FlyControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flyControls: FlyControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        flyControls: typeof flyControls
        flyControlsEventMap: typeof flyControlsEventMap
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        flyControls: typeof _flyControls
        flyControlsEventMap: typeof _flyControlsEventMap
    }
}



const flyControlsEventMap = ([
    'change',
] as const).distinct()
consParams.flyControlsEventMap = flyControlsEventMap

const flyControls = ([
    'object',
    'domElement',
] as const).distinct()
consParams.flyControls = flyControls



const _flyControlsEventMap = ([
    'change',
] as const).distinct()
objProps.flyControlsEventMap = _flyControlsEventMap

const _flyControls = ([
    'autoForward',
    'domElement',
    'dragToLook',
    'enabled',
    'movementSpeed',
    'object',
    'rollSpeed',
] as const).distinct()
objProps.flyControls = _flyControls

export type FlyControlsProps = Node<FlyControls, typeof FlyControls, { object: Camera; domElement?: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flyControls: Partial<{ object: Camera; domElement?: HTMLElement; }>
    }
}

defaults.flyControls = {}

