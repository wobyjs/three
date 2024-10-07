import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
export * from 'three/examples/jsm/loaders/SVGLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

import '../../../src/extras/core/ShapePath'

declare module '../../../lib/3/three'
{
    interface Three {
        SVGLoader: typeof SVGLoader
    }
}

Three.SVGLoader = SVGLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            svgLoader: SVGLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        svgLoader: typeof svgLoader
        svgResultPaths: typeof svgResultPaths
        svgResult: typeof svgResult
        strokeStyle: typeof strokeStyle
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        svgLoader: typeof _svgLoader
        svgResultPaths: typeof _svgResultPaths
        svgResult: typeof _svgResult
        strokeStyle: typeof _strokeStyle
    }
}



const svgResultPaths = ([
    'userData',
] as const).distinct()
consParams.svgResultPaths = svgResultPaths


const svgResult = ([
    'paths',
    'xml',
] as const).distinct()
consParams.svgResult = svgResult


const strokeStyle = ([
    'strokeColor',
    'strokeWidth',
    'strokeLineJoin',
    'strokeLineCap',
    'strokeMiterLimit',
] as const).distinct()
consParams.strokeStyle = strokeStyle


const svgLoader = ([
    'manager',
] as const).distinct()
consParams.svgLoader = svgLoader



const _svgResultPaths = ([...objProps.shapePath,
    'userData',
] as const).distinct()
objProps.svgResultPaths = _svgResultPaths


const _svgResult = ([
    'paths',
    'xml',
] as const).distinct()
objProps.svgResult = _svgResult


const _strokeStyle = ([
    'strokeColor',
    'strokeWidth',
    'strokeLineJoin',
    'strokeLineCap',
    'strokeMiterLimit',
] as const).distinct()
objProps.strokeStyle = _strokeStyle


const _svgLoader = ([...objProps.loader,
    'defaultDPI',
    'defaultUnit',
] as const).distinct()
objProps.svgLoader = _svgLoader

export type SVGLoaderProps = Node<SVGLoader, typeof SVGLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        svgLoader: { manager?: LoadingManager; }
    }
}

defaults.svgLoader = {}

