import { Node } from '../../../three-types'
import { Sky } from 'three/examples/jsm/objects/Sky.js'
export * from 'three/examples/jsm/objects/Sky.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Sky: typeof Sky
    }
}

Three.Sky = Sky

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sky: SkyProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        sky: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        sky: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts

consParams.sky = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts    

objParams.sky = [...objParams.mesh,
    'geometry',
    'material',
].distinct()

export type SkyProps = Node<Sky, typeof Sky, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sky: Partial<{}>
    }
}

defaults.sky = {}

