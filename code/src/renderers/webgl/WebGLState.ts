import { Node } from '../../../three-types'
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'
export { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLState: typeof WebGLState
    }
}

Three.WebGLState = WebGLState

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglState: WebGLStateProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglState: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglState: string[]
    }
}


consParams.webglState = [
    'gl',
].distinct()


objParams.webglState = [
    'buffers',
].distinct()

export type WebGLStateProps = Node<WebGLState, typeof WebGLState, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLState: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLState = {}

