import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'
export * from 'three/examples/jsm/capabilities/WebGPU.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGPU: typeof WebGPU
    }
}

Three.WebGPU = WebGPU

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpu: WebGPUProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpu: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpu: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGpu.d.ts
// tslint:disable-next-line:no-unnecessary-class

consParams.webGpu = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGpu.d.ts
// tslint:disable-next-line:no-unnecessary-class

objParams.webGpu = [
].distinct()

export type WebGPUProps = Node<WebGPU, typeof WebGPU, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGPU: {}
    }
}

defaults.webGPU = {}

