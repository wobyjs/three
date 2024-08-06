import { Node } from '../../../three-types'
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
export { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglObjects: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglObjects: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts

consParams.webglObjects = [
    'gl',
    'geometries',
    'attributes',
    'info',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts

objParams.webglObjects = [
].distinct()

export type WebGLObjectsProps = Node<WebGLObjects, typeof WebGLObjects, { gl: WebGLRenderingContext; geometries: any; attributes: any; info: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLObjects: Partial<{ gl: WebGLRenderingContext; geometries: any; attributes: any; info: any; }>
    }
}

defaults.webGLObjects = {}

