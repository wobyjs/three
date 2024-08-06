import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
export * from 'three/examples/jsm/loaders/SVGLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

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
        svgLoader: string[]
        svgResultPaths: string[]
        svgResult: string[]
        strokeStyle: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        svgLoader: string[]
        svgResultPaths: string[]
        svgResult: string[]
        strokeStyle: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\svgLoader.d.ts

consParams.svgResultPaths = [
    'userData',
].distinct()


consParams.svgResult = [
    'paths',
    'xml',
].distinct()


consParams.strokeStyle = [
    'strokeColor',
    'strokeWidth',
    'strokeLineJoin',
    'strokeLineCap',
    'strokeMiterLimit',
].distinct()


consParams.svgLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\SVGloader.d.ts    

objParams.svgResultPaths = [...objParams.shapePath,
    'userData',
].distinct()


objParams.svgResult = [
    'paths',
    'xml',
].distinct()


objParams.strokeStyle = [
    'strokeColor',
    'strokeWidth',
    'strokeLineJoin',
    'strokeLineCap',
    'strokeMiterLimit',
].distinct()


objParams.svgLoader = [...objParams.loader,
    'defaultDPI',
    'defaultUnit',
].distinct()

export type SVGLoaderProps = Node<SVGLoader, typeof SVGLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        svgLoader: { manager?: LoadingManager; }
    }
}

defaults.svgLoader = {}

