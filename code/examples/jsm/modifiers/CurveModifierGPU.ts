
import { Node } from '../../../three-types'
import { Flow, SplineUniform } from 'three/examples/jsm/modifiers/CurveModifierGPU.js'
// export * from 'three/examples/jsm/modifiers/CurveModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { BufferGeometry } from 'three/src/core/BufferGeometry'
import { Mesh } from 'three/src/objects/Mesh'
import { Material } from 'three/src/materials/Material'

declare module '../../../lib/3/three'
{
    interface Three {
        FlowGPU: typeof Flow
    }
}

Three.FlowGPU = Flow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            FlowGPU: FlowProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        flow: typeof flow
        splineUniform: typeof splineUniform
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        instancedFlow: typeof _instancedFlow
        flow: typeof _flow
        splineUniform: typeof _splineUniform
    }
}



const splineUniform = ([
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
] as const).distinct()
consParams.splineUniform = splineUniform


const flow = ([
    'mesh',
    'numberOfCurves',
] as const).distinct()
consParams.flow = flow



const _splineUniform = ([
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
] as const).distinct()
objProps.splineUniform = _splineUniform


const _flow = ([
    'curveArray',
    'curveLengthArray',
    'object3d',
    'splineTexure',
    'uniforms',
] as const).distinct()
objProps.flow = _flow


const _instancedFlow = ([...objProps.flow,
    'object3d',
    'offsets',
    'whichCurve',
] as const).distinct()
objProps.instancedFlow = _instancedFlow



declare module '../../../lib/3/defaults' {
    interface defaults {
        instancedFlow: Partial<{ count: number, curveCount: number, geometry: BufferGeometry, material: Material }>
    }
}

defaults.instancedFlow = {}

export type FlowProps = Node<Flow, typeof Flow, { mesh: Mesh, numberOfCurves?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flow: Partial<{ mesh: Mesh, numberOfCurves?: number }>
    }
}

defaults.flow = {}

export type SplineUniformProps = Node<SplineUniform, SplineUniform, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        splineUniform: Partial<{}>
    }
}

defaults.splineUniform = {}
