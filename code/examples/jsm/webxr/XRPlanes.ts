import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { XRPlanes } from 'three/examples/jsm/webxr/XRPlanes.js'
export * from 'three/examples/jsm/webxr/XRPlanes.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRPlanes: typeof XRPlanes
    }
}

Three.XRPlanes = XRPlanes

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrPlanes: XRPlanesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrPlanes: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrPlanes: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts

consParams.xrPlanes = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts    

objParams.xrPlanes = [...objParams.object3d,
].distinct()

export type XRPlanesProps = Node<XRPlanes, typeof XRPlanes, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrPlanes: { renderer?: WebGLRenderer; }
    }
}

defaults.xrPlanes = {}

