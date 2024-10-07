import { Node } from '../../../three-types'
import { MMDExporter } from 'three/examples/jsm/exporters/MMDExporter.js'
export * from 'three/examples/jsm/exporters/MMDExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MMDExporter: typeof MMDExporter
    }
}

Three.MMDExporter = MMDExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdExporter: MMDExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdExporter: typeof mmdExporter
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mmdExporter: typeof _mmdExporter
    }
}



const mmdExporter = ([
] as const).distinct()
consParams.mmdExporter = mmdExporter



const _mmdExporter = ([
] as const).distinct()
objProps.mmdExporter = _mmdExporter

export type MMDExporterProps = Node<MMDExporter, typeof MMDExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdExporter: {}
    }
}

defaults.mmdExporter = {}

