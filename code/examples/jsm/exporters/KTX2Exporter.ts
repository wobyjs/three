import { Node } from '../../../three-types'
import { KTX2Exporter } from 'three/examples/jsm/exporters/KTX2Exporter.js'
export * from 'three/examples/jsm/exporters/KTX2Exporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        KTX2Exporter: typeof KTX2Exporter
    }
}

Three.KTX2Exporter = KTX2Exporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktx2Exporter: KTX2ExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ktx2Exporter: typeof ktx2Exporter
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ktx2Exporter: typeof _ktx2Exporter
    }
}



const ktx2Exporter = ([
] as const).distinct()
consParams.ktx2Exporter = ktx2Exporter



const _ktx2Exporter = ([
] as const).distinct()
objProps.ktx2Exporter = _ktx2Exporter

export type KTX2ExporterProps = Node<KTX2Exporter, typeof KTX2Exporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Exporter: {}
    }
}

defaults.ktx2Exporter = {}

