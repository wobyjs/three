import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js'
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
import { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js'
export { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLTextures: typeof WebGLTextures
    }
}

Three.WebGLTextures = WebGLTextures

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglTextures: WebGLTexturesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglTextures: typeof webglTextures
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglTextures: typeof _webglTextures
    }
}



const webglTextures = ([

    'gl',
    'extensions',
    'state',
    'properties',
    'capabilities',
    'utils',
    'info',
    ,
] as const).distinct()
consParams.webglTextures = webglTextures



const _webglTextures = ([
] as const).distinct()
objProps.webglTextures = _webglTextures

export type WebGLTexturesProps = Node<WebGLTextures, typeof WebGLTextures, { gl: WebGLRenderingContext; extensions: WebGLExtensions; state: WebGLState; properties: WebGLProperties; capabilities: WebGLCapabilities; utils: WebGLUtils; info: WebGLInfo; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLTextures: Partial<{ gl: WebGLRenderingContext; extensions: WebGLExtensions; state: WebGLState; properties: WebGLProperties; capabilities: WebGLCapabilities; utils: WebGLUtils; info: WebGLInfo; }>
    }
}

defaults.webGLTextures = {}

