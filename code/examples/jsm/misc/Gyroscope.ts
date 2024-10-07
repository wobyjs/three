import { Node } from '../../../three-types'
import { Gyroscope } from 'three/examples/jsm/misc/Gyroscope.js'
export * from 'three/examples/jsm/misc/Gyroscope.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        gyroscope: typeof gyroscope
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gyroscope: typeof _gyroscope
    }
}



const gyroscope = ([
] as const).distinct()
consParams.gyroscope = gyroscope



const _gyroscope = ([...objProps.object3d,
] as const).distinct()
objProps.gyroscope = _gyroscope

export type GyroscopeProps = Node<Gyroscope, typeof Gyroscope, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gyroscope: {}
    }
}

defaults.gyroscope = {}

