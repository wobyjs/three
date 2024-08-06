import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import Color4 from 'three/src/renderers/common/Color4.js'
export { Color4 }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Color4: typeof Color4
    }
}

Three.Color4 = Color4

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            color4: Color4Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        color4: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        color4: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts

consParams.color4 = [
    'r',
    'g',
    'b',
    'a',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts    

objParams.color4 = [...objParams.color,
].distinct()

export type Color4Props = Node<Color4, typeof Color4, { color?: ColorRepresentation; } | { r: number; g: number; b: number; a?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        color4: { color?: ColorRepresentation; } | { r: number; g: number; b: number; a?: number; }
    }
}

defaults.color4 = {}

