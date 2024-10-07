import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'
export * from 'three/examples/jsm/capabilities/WebGPU.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webGpu: typeof webGpu
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webGpu: typeof _webGpu
    }
}


// tslint:disable-next-line:no-unnecessary-class

const webGpu = ([
] as const).distinct()
consParams.webGpu = webGpu


// tslint:disable-next-line:no-unnecessary-class

const _webGpu = ([
] as const).distinct()
objProps.webGpu = _webGpu

export type WebGPUProps = Node<WebGPU, typeof WebGPU, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGPU: {}
    }
}

defaults.webGPU = {}

