import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js'
export { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLCubeUVMaps: typeof WebGLCubeUVMaps
    }
}

Three.WebGLCubeUVMaps = WebGLCubeUVMaps

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeUVMaps: WebGLCubeUVMapsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCubeUvMaps: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCubeUvMaps: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeUVMaps.d.ts

consParams.webglCubeUvMaps = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeUvMaps.d.ts

objParams.webglCubeUvMaps = [
].distinct()

export type WebGLCubeUVMapsProps = Node<WebGLCubeUVMaps, typeof WebGLCubeUVMaps, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeUVMaps: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.webGLCubeUVMaps = {}

