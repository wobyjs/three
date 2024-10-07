import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
export * from 'three/examples/jsm/capabilities/WebGL.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webgl: typeof webgl
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webgl: typeof _webgl
    }
}


// tslint:disable-next-line:no-unnecessary-class

const webgl = ([
] as const).distinct()
consParams.webgl = webgl


// tslint:disable-next-line:no-unnecessary-class

const _webgl = ([
] as const).distinct()
objProps.webgl = _webgl

export type WebGLProps = Node<WebGL, typeof WebGL, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGL: {}
    }
}

defaults.webGL = {}

