import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader.js'
export * from 'three/examples/jsm/loaders/XYZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XYZLoader: typeof XYZLoader
    }
}

Three.XYZLoader = XYZLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xyzLoader: XYZLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xyzLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xyzLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts

consParams.xyzLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts    

objParams.xyzLoader = [...objParams.loader,
].distinct()


export type XYZLoaderProps = Node<XYZLoader, typeof XYZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xyzLoader: { manager?: LoadingManager; }
    }
}

defaults.xyzLoader = {}

