
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { ParametricGeometries } from 'three/examples/jsm/geometries/ParametricGeometries.js'
export * from 'three/examples/jsm/geometries/ParametricGeometries.js'

export * from './ParametricGeometry'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Curve } from 'three/src/extras/core/Curve'
import { Vector3 } from 'three/src/math/Vector3'

declare module '../../../lib/3/three'
{
    interface Three {
        ParametricGeometries_TubeGeometry: typeof ParametricGeometries.TubeGeometry
        ParametricGeometries_TorusKnotGeometry: typeof ParametricGeometries.TorusKnotGeometry
        ParametricGeometries_SphereGeometry: typeof ParametricGeometries.SphereGeometry
        ParametricGeometries_PlaneGeometry: typeof ParametricGeometries.PlaneGeometry
    }
}

Three.ParametricGeometries_TubeGeometry = ParametricGeometries.TubeGeometry
Three.ParametricGeometries_TorusKnotGeometry = ParametricGeometries.TorusKnotGeometry
Three.ParametricGeometries_SphereGeometry = ParametricGeometries.SphereGeometry
Three.ParametricGeometries_PlaneGeometry = ParametricGeometries.PlaneGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parametricGeometries_TubeGeometry: TubeGeometry,
            parametricGeometries_TorusKnotGeometry: TorusKnotGeometry,
            parametricGeometries_SphereGeometry: SphereGeometry,
            parametricGeometries_PlaneGeometry: PlaneGeometry,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parametricGeometries_tubeGeometry: typeof tubeGeometry
        parametricGeometries_torusKnotGeometry: typeof torusKnotGeometry
        parametricGeometries_sphereGeometry: typeof sphereGeometry
        parametricGeometries_planeGeometry: typeof planeGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        parametricGeometries_tubeGeometry: typeof _tubeGeometry
        parametricGeometries_torusKnotGeometry: typeof _torusKnotGeometry
        parametricGeometries_sphereGeometry: typeof _sphereGeometry
        parametricGeometries_planeGeometry: typeof _planeGeometry
    }
}

const tubeGeometry = ([
    'path',
    'segments',
    'radius',
    'segmentsRadius',
    'closed',
] as const).distinct()
consParams.parametricGeometries_tubeGeometry = tubeGeometry

const _tubeGeometry = ([...objProps.parametricGeometry,
    'tangents',
    'normals',
    'binormals',
    'path',
    'segments',
    'radius',
    'segmentsRadius',
    'closed',
] as const).distinct()
objProps.parametricGeometries_tubeGeometry = _tubeGeometry

const torusKnotGeometry = ([
    'radius',
    'tube',
    'segmentsT',
    'segmentsR',
    'p',
    'q',
] as const).distinct()
consParams.parametricGeometries_torusKnotGeometry = torusKnotGeometry

const _torusKnotGeometry = ([...objProps.tubeGeometry,
    'radius',
    'tube',
    'segmentsT',
    'segmentsR',
    'p',
    'q',
] as const).distinct()
objProps.parametricGeometries_torusKnotGeometry = _torusKnotGeometry

const sphereGeometry = ([
    'radius',
    'tube',
    'segmentsT',
    'segmentsR',
    'p',
    'q',
] as const).distinct()
consParams.parametricGeometries_torusKnotGeometry = sphereGeometry

const _sphereGeometry = ([...objProps.parametricGeometry,
] as const).distinct()
objProps.parametricGeometries_sphereGeometry = _sphereGeometry

const planeGeometry = ([
    'radius',
    'tube',
    'segmentsT',
    'segmentsR',
    'p',
    'q',
] as const).distinct()
consParams.parametricGeometries_planeGeometry = sphereGeometry

const _planeGeometry = ([...objProps.parametricGeometry,
] as const).distinct()
objProps.parametricGeometries_planeGeometry = _planeGeometry


export type TubeGeometry = BufferGeometryNode<ParametricGeometries.TubeGeometry, typeof ParametricGeometries.TubeGeometry, { path: Curve<Vector3>, segments?: number, radius?: number, segmentsRadius?: number, closed?: boolean, }>
export type TorusKnotGeometry = BufferGeometryNode<ParametricGeometries.TorusKnotGeometry, typeof ParametricGeometries.TorusKnotGeometry, { radius?: number, tube?: number, segmentsT?: number, segmentsR?: number, p?: number, q?: number }>
export type SphereGeometry = BufferGeometryNode<ParametricGeometries.SphereGeometry, typeof ParametricGeometries.SphereGeometry, { size: number, u: number, v: number }>
export type PlaneGeometry = BufferGeometryNode<ParametricGeometries.PlaneGeometry, typeof ParametricGeometries.PlaneGeometry, { width: number, depth: number, segmentsWidth: number, segmentsDepth: number }>


declare module '../../../lib/3/defaults' {
    interface defaults {
        parametricGeometries_tubeGeometry: Partial<{ path: Curve<Vector3>, segments?: number, radius?: number, segmentsRadius?: number, closed?: boolean, }>
        parametricGeometries_torusKnotGeometry: Partial<{ radius?: number, tube?: number, segmentsT?: number, segmentsR?: number, p?: number, q?: number }>
        parametricGeometries_sphereGeometry: Partial<{ size: number, u: number, v: number }>
        parametricGeometries_planeGeometry: Partial<{ width: number, depth: number, segmentsWidth: number, segmentsDepth: number }>
    }
}

defaults.parametricGeometries_tubeGeometry = {}
defaults.parametricGeometries_torusKnotGeometry = {}
defaults.parametricGeometries_sphereGeometry = {}
defaults.parametricGeometries_planeGeometry = {}



