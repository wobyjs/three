import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader.js'
export * from 'three/examples/jsm/loaders/MD2Loader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MD2Loader: typeof MD2Loader
    }
}

Three.MD2Loader = MD2Loader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2Loader: MD2LoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        md2Loader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        md2Loader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts

consParams.md2Loader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts    

objParams.md2Loader = [...objParams.loader,
].distinct()

export type MD2LoaderProps = Node<MD2Loader, typeof MD2Loader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Loader: { manager?: LoadingManager; }
    }
}

defaults.md2Loader = {}

