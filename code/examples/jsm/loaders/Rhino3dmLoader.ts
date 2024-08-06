import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js'
export * from 'three/examples/jsm/loaders/3DMLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Rhino3dmLoader: typeof Rhino3dmLoader
    }
}

Three.Rhino3dmLoader = Rhino3dmLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rhino3dmLoader: Rhino3dmLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rhino3dmLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rhino3dmLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts

consParams.rhino3dmLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts    

objParams.rhino3dmLoader = [...objParams.loader,
].distinct()

export type Rhino3dmLoaderProps = Node<Rhino3dmLoader, typeof Rhino3dmLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rhino3dmLoader: { manager?: LoadingManager; }
    }
}

defaults.rhino3dmLoader = {}

