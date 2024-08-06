import { Node } from '../../../three-types'
import { ShadowMapViewer, Size, Position } from 'three/examples/jsm/utils/ShadowMapViewer.js'
export * from 'three/examples/jsm/utils/ShadowMapViewer.js'

import { Three } from '../../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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

declare module 'woby' {
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
        shadowMapViewer: string[]
        size: string[]
        position: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowMapViewer: string[]
        size: string[]
        position: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

consParams.shadowMapViewer = [
    'light',
].distinct()

objParams.position = [
    'x',
    'y'
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\ShadowMapViewer.d.ts

consParams.size = [
    'width',
    'height',
].distinct()


consParams.position = [
    'x',
    'y',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SceneUtils.d.ts
/**
 * @param object Object to traverse.
 * @yields Objects that passed the filter condition.
 */
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\ShadowMapViewer.d.ts

objParams.size = [
    'width',
    'height',
].distinct()


objParams.shadowMapViewer = [
    'enabled',
    'size',
    'position',
].distinct()

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
