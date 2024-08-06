import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
export * from 'three/examples/jsm/capabilities/WebGL.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGL: typeof WebGL
    }
}

Three.WebGL = WebGL

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webgl: WebGLProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webgl: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webgl: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGl.d.ts
// tslint:disable-next-line:no-unnecessary-class

consParams.webgl = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGl.d.ts
// tslint:disable-next-line:no-unnecessary-class

objParams.webgl = [
].distinct()

export type WebGLProps = Node<WebGL, typeof WebGL, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGL: {}
    }
}

defaults.webGL = {}

