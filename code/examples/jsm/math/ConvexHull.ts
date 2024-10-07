import { Node } from '../../../three-types'
import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js'
export * from 'three/examples/jsm/math/ConvexHull.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ConvexHull: typeof ConvexHull
    }
}

Three.ConvexHull = ConvexHull

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexHull: ConvexHullProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        convexHull: typeof convexHull
        halfEdge: typeof halfEdge
        vertexNode: typeof vertexNode
        vertexList: typeof vertexList
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        convexHull: typeof _convexHull
        halfEdge: typeof _halfEdge
        vertexNode: typeof _vertexNode
        vertexList: typeof _vertexList
    }
}



const halfEdge = ([
    'vertex',
    'face',
] as const).distinct()
consParams.halfEdge = halfEdge


const vertexNode = ([
    'point',
] as const).distinct()
consParams.vertexNode = vertexNode


const vertexList = ([
] as const).distinct()
consParams.vertexList = vertexList


const convexHull = ([
] as const).distinct()
consParams.convexHull = convexHull



const _halfEdge = ([
    'vertex',
    'prev',
    'next',
    'twin',
    'face',
] as const).distinct()
objProps.halfEdge = _halfEdge


const _vertexNode = ([
    'point',
    'prev',
    'next',
    'face',
] as const).distinct()
objProps.vertexNode = _vertexNode


const _vertexList = ([
    'head',
    'tail',
] as const).distinct()
objProps.vertexList = _vertexList


const _convexHull = ([
    'tolerance',
    'faces',
    'newFaces',
    'assigned',
    'unassigned',
    'vertices',
] as const).distinct()
objProps.convexHull = _convexHull

export type ConvexHullProps = Node<ConvexHull, typeof ConvexHull, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convexHull: Partial<{}>
    }
}

defaults.convexHull = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        convexHull: Partial<{}>
    }
}

defaults.convexHull = {}
