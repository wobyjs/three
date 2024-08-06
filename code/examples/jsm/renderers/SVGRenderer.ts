import { Node } from '../../../three-types'
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js'
export * from 'three/examples/jsm/renderers/SVGRenderer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SVGRenderer: typeof SVGRenderer
    }
}

Three.SVGRenderer = SVGRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            svgRenderer: SVGRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        svgRenderer: string[]
        svgObject: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        svgRenderer: string[]
        svgObject: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\svgRenderer.d.ts

consParams.svgObject = [
    'node',
].distinct()


consParams.svgRenderer = [
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\SVGRenderer.d.ts    

objParams.svgObject = [...objParams.object3d,
    'node',
].distinct()


objParams.svgRenderer = [
    'domElement',
    'autoClear',
    'sortObjects',
    'sortElements',
    'overdraw',
    'outputColorSpace',
    'info',
].distinct()

export type SVGRendererProps = Node<SVGRenderer, typeof SVGRenderer, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        svgRenderer: {}
    }
}

defaults.svgRenderer = {}

