import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js'
export { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebXRManager: typeof WebXRManager
    }
}

Three.WebXRManager = WebXRManager

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webxrManager: WebXRManagerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webXrManagerEventMap: typeof webXrManagerEventMap
        webXrManager: typeof webXrManager
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webXrManagerEventMap: typeof _webXrManagerEventMap
        webXrManager: typeof _webXrManager
    }
}


// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 

const webXrManagerEventMap = ([
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
] as const).distinct()
consParams.webXrManagerEventMap = webXrManagerEventMap

const webXrManager = ([
    'renderer',
    'gl',
] as const).distinct()
consParams.webXrManager = webXrManager


// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 

const _webXrManagerEventMap = ([
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
] as const).distinct()
objProps.webXrManagerEventMap = _webXrManagerEventMap


const _webXrManager = ([
    /**
     * @default false
     */
    'enabled',
    /**
     * @default false
     */
    'isPresenting',
    /**
     * @default true
     */
    'cameraAutoUpdate',
] as const).distinct()
objProps.webXrManager = _webXrManager


export type WebXRManagerProps = Node<WebXRManager, typeof WebXRManager, { renderer: WebGLRenderer; gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRManager: Partial<{ renderer: WebGLRenderer; gl: WebGLRenderingContext; }>
    }
}

defaults.webXRManager = {}

