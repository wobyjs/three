import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
export * from 'three/examples/jsm/controls/PointerLockControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointerLockControls: typeof PointerLockControls
    }
}

Three.PointerLockControls = PointerLockControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointerLockControls: PointerLockControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointerLockControls: typeof pointerLockControls
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pointerLockControls: typeof _pointerLockControls
    }
}



const pointerLockControls = ([
    'camera',
    'domElement',
] as const).distinct()
consParams.pointerLockControls = pointerLockControls



const _pointerLockControls = ([
    'camera',
    'domElement',
    // API
    'isLocked',
    'minPolarAngle',
    'maxPolarAngle',
    'pointerSpeed',
] as const).distinct()
objProps.pointerLockControls = _pointerLockControls


export type PointerLockControlsProps = Node<PointerLockControls, typeof PointerLockControls, { object: Camera; domElement: E }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointerLockControls: Partial<{ object: Camera; domElement: E }>
    }
}

defaults.pointerLockControls = {}

