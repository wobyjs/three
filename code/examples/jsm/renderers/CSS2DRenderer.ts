import { CSS2DParameters, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
export * from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CSS2DRenderer: typeof CSS2DRenderer
    }
}

Three.CSS2DRenderer = CSS2DRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css2DRenderer: CSS2DRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        css2dRenderer: string[]
        css2dObject: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        css2dRenderer: string[]
        css2dObject: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css2DRenderer.d.ts

consParams.css2dObject = [
    'element',
].distinct()


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS2dRenderer.d.ts    

objParams.css2dObject = [...objParams.object3d,
    'element',
    'center',
].distinct()


objParams.css2dRenderer = [
    'domElement',
].distinct()

export type CSS2DRendererProps = Node<CSS2DRenderer, typeof CSS2DRenderer, CSS2DParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        css2DRenderer: CSS2DParameters
    }
}

defaults.css2DRenderer = {}

