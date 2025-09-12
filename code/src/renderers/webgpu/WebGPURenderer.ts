import { Node } from '../../../three-types'
import WebGPUBackend from 'three/src/renderers/webgpu/WebGPUBackend.js'
export * from 'three/src/renderers/webgpu/WebGPUBackend.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { WebGPUBackendProps } from './WebGPUBackend'

// We need to define the interface type here.

declare module '../../../lib/3/three'
{
    interface Three {
        WebGPUBackend: typeof WebGPUBackend
    }
}

Three.WebGPUBackend = WebGPUBackend

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fallbackWebGPUBackend: WebGPUBackendProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fallbackWebGPUBackend: typeof fallbackWebGPUBackend
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fallbackWebGPUBackend: typeof _webGPUBackend
    }
}

// ---[ Constructor Parameters ]---

const fallbackWebGPUBackend = (['parameters'] as const).distinct()
consParams.fallbackWebGPUBackend = fallbackWebGPUBackend

// ---[ Object Properties ]---

const _webGPUBackend = ([
    ...(objProps.backend || []), // Inherit properties from Backend
    'isWebGPUBackend',
    'coordinateSystem', // Getter
    'getMaxAnisotropy',
] as const).distinct()
objProps.fallbackWebGPUBackend = _webGPUBackend


// ---[ Props & Defaults ]---

// The props type will need to define the interface.
type WebGPUBackendParameters = {
    alpha?: boolean | undefined
    requiredLimits?: Record<string, GPUSize64> | undefined
    trackTimestamp?: boolean | undefined
    device?: GPUDevice | undefined
    powerPreference?: GPUPowerPreference | undefined
    context?: GPUCanvasContext | undefined
    outputType?: any //  Replace 'any' with appropriate type from constants.
}

// The final Props type for the JSX component, including the backend parameters.
type WebGPUBackendArgs = {
    parameters?: WebGPUBackendParameters
}

// export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend, WebGPUBackendArgs>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fallbackWebGPUBackend: Partial<WebGPUBackendArgs>
    }
}

defaults.fallbackWebGPUBackend = {}