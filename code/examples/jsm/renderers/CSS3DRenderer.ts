import { CSS3DParameters, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
export * from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        CSS3DRenderer: typeof CSS3DRenderer
    }
}

Three.CSS3DRenderer = CSS3DRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css3DRenderer: CSS3DRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        css3dRenderer: WrapAsString<CSS3DParameters>
        css3dObject: string[]
        css3dSprite: string[]
        css3dParameters: WrapAsString<CSS3DParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        css3dRenderer: string[]
        css3dObject: string[]
        css3dSprite: string[]
        css3dParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css3dRenderer.d.ts

consParams.css3dObject = [
    'element',
].distinct()


consParams.css3dSprite = [
    'element',
].distinct()


consParams.css3dParameters = ([
    'element',
] as const).toObject()


consParams.css3dRenderer = { ...consParams.css3dParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS3dRenderer.d.ts    

objParams.css3dObject = [...objParams.object3d,
    'element',
].distinct()


objParams.css3dSprite = [...objParams.css3dObject,
].distinct()


objParams.css3dParameters = [
    'element',
].distinct()


objParams.css3dRenderer = [
    'domElement',
].distinct()

export type CSS3DRendererProps = Node<CSS3DRenderer, typeof CSS3DRenderer, CSS3DParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        css3DRenderer: CSS3DParameters
    }
}

defaults.css3DRenderer = {}

