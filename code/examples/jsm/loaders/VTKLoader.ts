import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader.js'
export * from 'three/examples/jsm/loaders/VTKLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VTKLoader: typeof VTKLoader
    }
}

Three.VTKLoader = VTKLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vtkLoader: VTKLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vtkLoader: typeof vtkLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vtkLoader: typeof _vtkLoader
    }
}



const vtkLoader = ([
    'manager',
] as const).distinct()
consParams.vtkLoader = vtkLoader



const _vtkLoader = ([...objProps.loader,
] as const).distinct()
objProps.vtkLoader = _vtkLoader

export type VTKLoaderProps = Node<VTKLoader, typeof VTKLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vtkLoader: { manager?: LoadingManager; }
    }
}

defaults.vtkLoader = {}

