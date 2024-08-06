import { Node } from '../../../three-types'
import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js'
export * from 'three/examples/jsm/math/ConvexHull.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        convexHull: string[]
        halfEdge: string[]
        vertexNode: string[]
        vertexList: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        convexHull: string[]
        halfEdge: string[]
        vertexNode: string[]
        vertexList: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts

consParams.halfEdge = [
    'vertex',
    'face',
].distinct()


consParams.vertexNode = [
    'point',
].distinct()


consParams.vertexList = [
].distinct()


consParams.convexHull = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts

objParams.halfEdge = [
    'vertex',
    'prev',
    'next',
    'twin',
    'face',
].distinct()


objParams.vertexNode = [
    'point',
    'prev',
    'next',
    'face',
].distinct()


objParams.vertexList = [
    'head',
    'tail',
].distinct()


objParams.convexHull = [
    'tolerance',
    'faces',
    'newFaces',
    'assigned',
    'unassigned',
    'vertices',
].distinct()

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
