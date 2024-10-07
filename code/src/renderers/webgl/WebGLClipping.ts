import { Node } from '../../../three-types'
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js'
export { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLClipping: typeof WebGLClipping
    }
}

Three.WebGLClipping = WebGLClipping

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglClipping: WebGLClippingProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglClipping: typeof webglClipping
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglClipping: typeof _webglClipping
    }
}



const webglCubeMaps = ([
    'renderer',
] as const).distinct()
consParams.webglCubeMaps = webglCubeMaps



const _webglCubeMaps = ([
] as const).distinct()
objProps.webglCubeMaps = _webglCubeMaps



const webglClipping = ([
    'properties',
    'uniform',
] as const).distinct()
consParams.webglClipping = webglClipping



const _webglClipping = ([
    'uniform',
    /**
     * @default 0
     */
    'numPlanes',
    /**
     * @default 0
     */
    'numIntersection',
] as const).distinct()
objProps.webglClipping = _webglClipping

export type WebGLClippingProps = Node<WebGLClipping, typeof WebGLClipping, { properties: WebGLProperties; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLClipping: Partial<{ properties: WebGLProperties; }>
    }
}

defaults.webGLClipping = {}

