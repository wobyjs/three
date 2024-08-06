import { Object3DNode } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js'
export { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webxrManager: string[]
        webXrManagerEventMap: string[]
        webXrManager: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webxrManager: string[]
        webXrManagerEventMap: string[]
        webXrManager: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 

consParams.webXrManagerEventMap = [
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
].distinct()

consParams.webXrManager = [
    'renderer',
    'gl',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 

objParams.webXrManagerEventMap = [
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
].distinct()


objParams.webXrManager = [
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
].distinct()


export type WebXRManagerProps = Object3DNode<WebXRManager, typeof WebXRManager, { renderer: WebGLRenderer; gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRManager: Partial<{ renderer: WebGLRenderer; gl: WebGLRenderingContext; }>
    }
}

defaults.webXRManager = {}

