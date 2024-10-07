import { Node } from '../../../three-types'
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
export { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLObjects: typeof WebGLObjects
    }
}

Three.WebGLObjects = WebGLObjects

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglObjects: WebGLObjectsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglObjects: typeof webglObjects
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglObjects: typeof _webglObjects
    }
}



const webglObjects = ([
    'gl',
    'geometries',
    'attributes',
    'info',
] as const).distinct()
consParams.webglObjects = webglObjects



const _webglObjects = ([
] as const).distinct()
objProps.webglObjects = _webglObjects

export type WebGLObjectsProps = Node<WebGLObjects, typeof WebGLObjects, { gl: WebGLRenderingContext; geometries: any; attributes: any; info: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLObjects: Partial<{ gl: WebGLRenderingContext; geometries: any; attributes: any; info: any; }>
    }
}

defaults.webGLObjects = {}

