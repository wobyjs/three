import { Node } from '../../../three-types'
import { Gyroscope } from 'three/examples/jsm/misc/Gyroscope.js'
export * from 'three/examples/jsm/misc/Gyroscope.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Gyroscope: typeof Gyroscope
    }
}

Three.Gyroscope = Gyroscope

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gyroscope: GyroscopeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gyroscope: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gyroscope: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Gyroscope.d.ts

consParams.gyroscope = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Gyroscope.d.ts    

objParams.gyroscope = [...objParams.object3d,
].distinct()

export type GyroscopeProps = Node<Gyroscope, typeof Gyroscope, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gyroscope: {}
    }
}

defaults.gyroscope = {}

