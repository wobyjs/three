import { Node } from '../../../three-types'
import WebGLRenderer from 'three/src/renderers/webgpu/WebGPURenderer'
import { ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMapGPU.js'
export * from 'three/examples/jsm/misc/ProgressiveLightMapGPU.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ProgressiveLightMapGPU: typeof ProgressiveLightMap
    }
}

Three.ProgressiveLightMapGPU = ProgressiveLightMap

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            progressiveLightMapGPU: ProgressiveLightMapProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        progressiveLightMapGPU: typeof progressiveLightMapGPU
        uvBoxes: typeof uvBoxes
        lightMapContainers: typeof lightMapContainers
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        progressiveLightMapGPU: typeof _progressiveLightMapGPU
        uvBoxes: typeof _uvBoxes
        lightMapContainers: typeof _lightMapContainers
    }
}



const uvBoxes = ([
    'w',
    'h',
    'index',
] as const).distinct()
consParams.uvBoxes = uvBoxes


const lightMapContainers = ([
    'basicMat',
    'object',
] as const).distinct()
consParams.lightMapContainers = lightMapContainers


const progressiveLightMapGPU = ([
    'renderer',
    'res',
] as const).distinct()
consParams.progressiveLightMapGPU = progressiveLightMapGPU



const _uvBoxes = ([
    'w',
    'h',
    'index',
] as const).distinct()
objProps.uvBoxes = _uvBoxes


const _lightMapContainers = ([
    'basicMat',
    'object',
] as const).distinct()
objProps.lightMapContainers = _lightMapContainers


const _progressiveLightMapGPU = ([
    'renderer',
    'res',
    'lightMapContainers',
    'compiled',
    'scene',
    'tinyTarget',
    'buffer1Active',
    'firstUpdate',
    'warned',
    'progressiveLightMap1',
    'progressiveLightMap2',
    'uvMat',
    'uv_boxes',
    'blurringPlane',
    'labelMaterial',
    'labelPlane',
    'labelMesh',
] as const).distinct()
objProps.progressiveLightMapGPU = _progressiveLightMapGPU

export type ProgressiveLightMapProps = Node<ProgressiveLightMap, typeof ProgressiveLightMap, { renderer: WebGLRenderer; res?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        progressiveLightMapGPU: Partial<{ renderer: WebGLRenderer; res?: number }>
    }
}

defaults.progressiveLightMapGPU = {}

