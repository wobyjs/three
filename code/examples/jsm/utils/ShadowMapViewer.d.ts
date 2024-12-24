import { Node } from '../../../three-types'
import { ShadowMapViewer, Size, Position } from 'three/examples/jsm/utils/ShadowMapViewer.js'
export * from 'three/examples/jsm/utils/ShadowMapViewer.js'

import { Three } from '../../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        ShadowMapViewer: ShadowMapViewer
        Size: Size
        Position: Position
    }
}

Three.ShadowMapViewer = ShadowMapViewer
Three.Size = Size
Three.Position = Position

declare global {
    namespace JSX {
        interface IntrinsicElements {
            shadowMapViewer: ShadowMapViewerProps,
            size: SizeProps,
            position: PositionProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMapViewer: typeof shadowMapViewer
        size: typeof size
        position: typeof position
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        shadowMapViewer: typeof _shadowMapViewer
        size: typeof _size
        position: typeof _position
    }
}



const shadowMapViewer = ([
    'light',
] as const).distinct()
consParams.shadowMapViewer = shadowMapViewer

const _position = ([
    'x',
    'y'
] as const).distinct()
objProps.position = _position



const size = ([
    'width',
    'height',
] as const).distinct()
consParams.size = size


const position = ([
    'x',
    'y',
] as const).distinct()
consParams.position = position


/**
 * @param object Object to traverse.
 * @yields Objects that passed the filter condition.
 */


const _size = ([
    'width',
    'height',
] as const).distinct()
objProps.size = _size


const _shadowMapViewer = ([
    'enabled',
    'size',
    'position',
] as const).distinct()
objProps.shadowMapViewer = _shadowMapViewer

export type ShadowMapViewerProps = Node<ShadowMapViewer, typeof ShadowMapViewer, { light: Light }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMapViewer: Partial<{ light: Light }>
    }
}

defaults.shadowMapViewer = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMapViewer: Partial<{ light: Light }>
    }
}

defaults.shadowMapViewer = { light: Light }
export type SizeProps = Node<Size, typeof Size, { width: number, height: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        size: Partial<{ width: number, height: number }>
    }
}

defaults.size = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        size: Partial<{ width: number, height: number }>
    }
}

defaults.size = { width: number, height: number }
export type PositionProps = Node<Position, typeof Position, { x: number, y: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        position: Partial<{ x: number, y: number }>
    }
}

defaults.position = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        position: Partial<{ x: number, y: number }>
    }
}

defaults.position = { x: number, y: number }
