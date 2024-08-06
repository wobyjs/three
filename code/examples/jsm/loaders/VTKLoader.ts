import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader.js'
export * from 'three/examples/jsm/loaders/VTKLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        vtkLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vtkLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts

consParams.vtkLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts    

objParams.vtkLoader = [...objParams.loader,
].distinct()

export type VTKLoaderProps = Node<VTKLoader, typeof VTKLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vtkLoader: { manager?: LoadingManager; }
    }
}

defaults.vtkLoader = {}

