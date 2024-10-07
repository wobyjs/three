import { Node } from '../../../three-types'
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js'
export * from 'three/examples/jsm/exporters/OBJExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OBJExporter: typeof OBJExporter
    }
}

Three.OBJExporter = OBJExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objExporter: OBJExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        objExporter: typeof objExporter
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        objExporter: typeof _objExporter
    }
}



const objExporter = ([
] as const).distinct()
consParams.objExporter = objExporter



const _objExporter = ([
] as const).distinct()
objProps.objExporter = _objExporter

export type OBJExporterProps = Node<OBJExporter, typeof OBJExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        objExporter: {}
    }
}

defaults.objExporter = {}

