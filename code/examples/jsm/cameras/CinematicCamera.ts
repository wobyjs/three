import { Node } from '../../../three-types'
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera.js'
export * from 'three/examples/jsm/cameras/CinematicCamera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CinematicCamera: typeof CinematicCamera
    }
}

Three.CinematicCamera = CinematicCamera

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cinematicCamera: CinematicCameraProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cinematicCamera: typeof cinematicCamera
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cinematicCamera: typeof _cinematicCamera
    }
}



const cinematicCamera = ([
    'fov',
    'aspect',
    'near',
    'far',
] as const).distinct()
consParams.cinematicCamera = cinematicCamera



const _cinematicCamera = ([...objProps.perspectiveCamera,
    'postprocessing',
    'shaderSettings',
    'materialDepth',
    'coc',
    'aperture',
    'fNumber',
    'hyperFocal',
    'filmGauge',
] as const).distinct()
objProps.cinematicCamera = _cinematicCamera

export type CinematicCameraProps = Node<CinematicCamera, typeof CinematicCamera, { fov: number; aspect: number; near: number; far: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cinematicCamera: Partial<{ fov: number; aspect: number; near: number; far: number; }>
    }
}

defaults.cinematicCamera = {}

