import { Node } from '../../../three-types'
import { Projector } from 'three/examples/jsm/renderers/Projector.js'
export * from 'three/examples/jsm/renderers/Projector.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        projector: typeof projector
        renderableObject: typeof renderableObject
        renderableFace: typeof renderableFace
        renderableVertex: typeof renderableVertex
        renderableLine: typeof renderableLine
        renderableSprite: typeof renderableSprite
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        projector: typeof _projector
        renderableObject: typeof _renderableObject
        renderableFace: typeof _renderableFace
        renderableVertex: typeof _renderableVertex
        renderableLine: typeof _renderableLine
        renderableSprite: typeof _renderableSprite
    }
}



const renderableObject = ([
] as const).distinct()
consParams.renderableObject = renderableObject


const renderableFace = ([
] as const).distinct()
consParams.renderableFace = renderableFace


const renderableVertex = ([
] as const).distinct()
consParams.renderableVertex = renderableVertex


const renderableLine = ([
] as const).distinct()
consParams.renderableLine = renderableLine


const renderableSprite = ([
] as const).distinct()
consParams.renderableSprite = renderableSprite


const projector = ([
] as const).distinct()
consParams.projector = projector



const _renderableObject = ([
    'id',
    'object',
    'z',
    'renderOrder',
] as const).distinct()
objProps.renderableObject = _renderableObject


const _renderableFace = ([
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
] as const).distinct()
objProps.renderableFace = _renderableFace


const _renderableVertex = ([
    'position',
    'positionWorld',
    'positionScreen',
    'visible',
] as const).distinct()
objProps.renderableVertex = _renderableVertex


const _renderableLine = ([
    'id',
    'v1',
    'v2',
    'vertexColors',
    'material',
    'z',
    'renderOrder',
] as const).distinct()
objProps.renderableLine = _renderableLine


const _renderableSprite = ([
    'id',
    'object',
    'x',
    'y',
    'z',
    'rotation',
    'scale',
    'material',
    'renderOrder',
] as const).distinct()
objProps.renderableSprite = _renderableSprite


const _projector = ([
] as const).distinct()
objProps.projector = _projector

export type ProjectorProps = Node<Projector, typeof Projector, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        projector: {}
    }
}

defaults.projector = {}

