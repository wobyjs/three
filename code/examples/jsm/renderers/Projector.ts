import { Node } from '../../../three-types'
import { Projector } from 'three/examples/jsm/renderers/Projector.js'
export * from 'three/examples/jsm/renderers/Projector.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Projector: typeof Projector
    }
}

Three.Projector = Projector

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            projector: ProjectorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        projector: string[]
        renderableObject: string[]
        renderableFace: string[]
        renderableVertex: string[]
        renderableLine: string[]
        renderableSprite: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        projector: string[]
        renderableObject: string[]
        renderableFace: string[]
        renderableVertex: string[]
        renderableLine: string[]
        renderableSprite: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts

consParams.renderableObject = [
].distinct()


consParams.renderableFace = [
].distinct()


consParams.renderableVertex = [
].distinct()


consParams.renderableLine = [
].distinct()


consParams.renderableSprite = [
].distinct()


consParams.projector = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts

objParams.renderableObject = [
    'id',
    'object',
    'z',
    'renderOrder',
].distinct()


objParams.renderableFace = [
    'id',
    'v1',
    'v2',
    'v3',
    'normalModel',
    'vertexNormalsModel',
    'vertexNormalsLength',
    'color',
    'material',
    'uvs',
    'z',
    'renderOrder',
].distinct()


objParams.renderableVertex = [
    'position',
    'positionWorld',
    'positionScreen',
    'visible',
].distinct()


objParams.renderableLine = [
    'id',
    'v1',
    'v2',
    'vertexColors',
    'material',
    'z',
    'renderOrder',
].distinct()


objParams.renderableSprite = [
    'id',
    'object',
    'x',
    'y',
    'z',
    'rotation',
    'scale',
    'material',
    'renderOrder',
].distinct()


objParams.projector = [
].distinct()

export type ProjectorProps = Node<Projector, typeof Projector, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        projector: {}
    }
}

defaults.projector = {}

