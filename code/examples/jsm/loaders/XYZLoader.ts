import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader.js'
export * from 'three/examples/jsm/loaders/XYZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        xyzLoader: typeof xyzLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xyzLoader: typeof _xyzLoader
    }
}



const xyzLoader = ([
    'manager',
] as const).distinct()
consParams.xyzLoader = xyzLoader



const _xyzLoader = ([...objProps.loader,
] as const).distinct()
objProps.xyzLoader = _xyzLoader


export type XYZLoaderProps = Node<XYZLoader, typeof XYZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xyzLoader: { manager?: LoadingManager; }
    }
}

defaults.xyzLoader = {}

