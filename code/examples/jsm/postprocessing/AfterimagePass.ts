import { Node } from '../../../three-types'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'
export * from 'three/examples/jsm/postprocessing/AfterimagePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AfterimagePass: typeof AfterimagePass
    }
}

Three.AfterimagePass = AfterimagePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterimagePass: AfterimagePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        afterimagePass: typeof afterimagePass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        afterimagePass: typeof _afterimagePass
    }
}



const afterimagePass = ([
    'damp',
] as const).distinct()
consParams.afterimagePass = afterimagePass



const _afterimagePass = ([...objProps.pass,
    'shader',
    'uniforms',
    'textureComp',
    'textureOld',
    'shaderMaterial',
    'compFsQuad',
    'copyFsQuad',
] as const).distinct()
objProps.afterimagePass = _afterimagePass

export type AfterimagePassProps = Node<AfterimagePass, typeof AfterimagePass, { damp?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        afterimagePass: Partial<{ damp?: number; }>
    }
}

defaults.afterimagePass = {}

