import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader.js'
export * from 'three/examples/jsm/loaders/MD2Loader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        md2Loader: typeof md2Loader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        md2Loader: typeof _md2Loader
    }
}



const md2Loader = ([
    'manager',
] as const).distinct()
consParams.md2Loader = md2Loader



const _md2Loader = ([...objProps.loader,
] as const).distinct()
objProps.md2Loader = _md2Loader

export type MD2LoaderProps = Node<MD2Loader, typeof MD2Loader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Loader: { manager?: LoadingManager; }
    }
}

defaults.md2Loader = {}

