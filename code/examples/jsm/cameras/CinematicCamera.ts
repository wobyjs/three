import { Node } from '../../../three-types'
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera.js'
export * from 'three/examples/jsm/cameras/CinematicCamera.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        cinematicCamera: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        cinematicCamera: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts

consParams.cinematicCamera = [
    'fov',
    'aspect',
    'near',
    'far',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts    

objParams.cinematicCamera = [...objParams.perspectiveCamera,
    'postprocessing',
    'shaderSettings',
    'materialDepth',
    'coc',
    'aperture',
    'fNumber',
    'hyperFocal',
    'filmGauge',
].distinct()

export type CinematicCameraProps = Node<CinematicCamera, typeof CinematicCamera, { fov: number; aspect: number; near: number; far: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cinematicCamera: Partial<{ fov: number; aspect: number; near: number; far: number; }>
    }
}

defaults.cinematicCamera = {}

