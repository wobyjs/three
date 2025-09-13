import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'
export * from 'three/examples/jsm/controls/FirstPersonControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FirstPersonControls: typeof FirstPersonControls
    }
}

Three.FirstPersonControls = FirstPersonControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            firstPersonControls: FirstPersonControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        firstPersonControls: typeof firstPersonControls
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        firstPersonControls: typeof _firstPersonControls
    }
}



const firstPersonControls = ([
    'object',
    'domElement',
] as const).distinct()
consParams.firstPersonControls = firstPersonControls



const _firstPersonControls = ([
    'object',
    'domElement',
    'enabled',
    'movementSpeed',
    'lookSpeed',
    'lookVertical',
    'autoForward',
    'activeLook',
    'heightSpeed',
    'heightCoef',
    'heightMin',
    'heightMax',
    'constrainVertical',
    'verticalMin',
    'verticalMax',
    'mouseDragOn',
] as const).distinct()
objProps.firstPersonControls = _firstPersonControls

export type FirstPersonControlsProps = Node<FirstPersonControls, typeof FirstPersonControls, { object: Camera; domElement?: HTMLElement }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        firstPersonControls: Partial<{ object: Camera; domElement?: HTMLElement }>
    }
}

defaults.firstPersonControls = {}

