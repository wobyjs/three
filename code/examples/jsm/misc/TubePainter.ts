import { Node } from '../../../three-types'
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js'
export * from 'three/examples/jsm/misc/TubePainter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TubePainter: typeof TubePainter
    }
}

Three.TubePainter = TubePainter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tubePainter: TubePainterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tubePainter: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tubePainter: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\TubePainter.d.ts

consParams.tubePainter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\TubePainter.d.ts

objParams.tubePainter = [
    'mesh',
].distinct()

export type TubePainterProps = Node<TubePainter, typeof TubePainter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tubePainter: {}
    }
}

defaults.tubePainter = {}

