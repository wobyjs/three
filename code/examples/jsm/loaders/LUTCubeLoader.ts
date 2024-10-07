import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader.js'
export * from 'three/examples/jsm/loaders/LUTCubeLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LUTCubeLoader: typeof LUTCubeLoader
    }
}

Three.LUTCubeLoader = LUTCubeLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lutCubeLoader: LUTCubeLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lutCubeLoader: typeof lutCubeLoader
        lutCubeResult: typeof lutCubeResult
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lutCubeLoader: typeof _lutCubeLoader
        lutCubeResult: typeof _lutCubeResult
    }
}



const lutCubeResult = ([
    'title',
    'size',
    'domainMin',
    'domainMax',
    'texture3d',
] as const).distinct()
consParams.lutCubeResult = lutCubeResult
/**
 * A 3d LUT loader that supports the .cube file format.
 *
 * Based on the following reference:
 *
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */

const lutCubeLoader = ([
    /**
     * Creates a new {@link LUTCubeLoader}.
     * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
     */
    'manager',
] as const).distinct()
consParams.lutCubeLoader = lutCubeLoader



const _lutCubeResult = ([
    'title',
    'size',
    'domainMin',
    'domainMax',
    'texture3d',
] as const).distinct()
objProps.lutCubeResult = _lutCubeResult

/**
 * A 3d LUT loader that supports the .cube file format.
 *
 * Based on the following reference:
 *
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */

const _lutCubeLoader = ([...objProps.loader,
    'type',
] as const).distinct()
objProps.lutCubeLoader = _lutCubeLoader

export type LUTCubeLoaderProps = Node<LUTCubeLoader, typeof LUTCubeLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lutCubeLoader: { manager?: LoadingManager; }
    }
}

defaults.lutCubeLoader = {}

