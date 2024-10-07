import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js'
import { WebGLObjects } from 'three/src/renderers/webgl/WebGLObjects.js'
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
export { WebGLShadowMap } from 'three/src/renderers/webgl/WebGLShadowMap.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLShadowMap: typeof WebGLShadowMap
    }
}

Three.WebGLShadowMap = WebGLShadowMap

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglShadowMap: WebGLShadowMapProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglShadowMap: typeof webglShadowMap
        webglDepthBuffer: typeof webglDepthBuffer
        webglStencilBuffer: typeof webglStencilBuffer
        webglColorBuffer: typeof webglColorBuffer
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglShadowMap: typeof _webglShadowMap
        webglDepthBuffer: typeof _webglDepthBuffer
        webglStencilBuffer: typeof _webglStencilBuffer
        webglColorBuffer: typeof _webglColorBuffer
    }
}




const webglShadowMap = ([
    '_renderer',
    '_objects',
    '_capabilities',
] as const).distinct()
consParams.webglShadowMap = webglShadowMap




const _webglShadowMap = ([
    /**
     * @default false
     */
    'enabled',
    /**
     * @default true
     */
    'autoUpdate',
    /**
     * @default false
     */
    'needsUpdate',
    /**
     * @default THREE.PCFShadowMap
     */
    'type',
    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    'cullFace',
] as const).distinct()
objProps.webglShadowMap = _webglShadowMap


const webglDepthBuffer = ([
] as const).distinct()
consParams.webglDepthBuffer = webglDepthBuffer

const webglStencilBuffer = ([
] as const).distinct()
consParams.webglStencilBuffer = webglStencilBuffer
//@ts-ignore



const webglColorBuffer = ([
] as const).distinct()
consParams.webglColorBuffer = webglColorBuffer



const _webglColorBuffer = ([
] as const).distinct()
objProps.webglColorBuffer = _webglColorBuffer


const _webglDepthBuffer = ([
] as const).distinct()
objProps.webglDepthBuffer = _webglDepthBuffer


const _webglStencilBuffer = ([
] as const).distinct()
objProps.webglStencilBuffer = _webglStencilBuffer

export type WebGLShadowMapProps = Node<WebGLShadowMap, typeof WebGLShadowMap, { _renderer: WebGLRenderer; _objects: WebGLObjects; _capabilities: WebGLCapabilities; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLShadowMap: Partial<{ _renderer: WebGLRenderer; _objects: WebGLObjects; _capabilities: WebGLCapabilities; }>
    }
}

defaults.webGLShadowMap = {}

