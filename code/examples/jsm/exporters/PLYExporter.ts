import { Node } from '../../../three-types'
import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter.js'
export * from 'three/examples/jsm/exporters/PLYExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PLYExporter: typeof PLYExporter
    }
}

Three.PLYExporter = PLYExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plyExporter: PLYExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        plyExporter: typeof plyExporter
        plyExporterOptionsBase: typeof plyExporterOptionsBase
        plyExporterOptionsBinary: typeof plyExporterOptionsBinary
        plyExporterOptionsString: typeof plyExporterOptionsString
        plyExporterOptions: typeof plyExporterOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        plyExporter: typeof _plyExporter
        plyExporterOptionsBase: typeof _plyExporterOptionsBase
        plyExporterOptionsBinary: typeof _plyExporterOptionsBinary
        plyExporterOptionsString: typeof _plyExporterOptionsString
        plyExporterOptions: typeof _plyExporterOptions
    }
}



const plyExporterOptionsBase = ([
    'excludeAttributes',
    'littleEndian',
] as const).distinct()
consParams.plyExporterOptionsBase = plyExporterOptionsBase

const plyExporterOptionsBinary = ([
    'binary',
] as const).distinct()
consParams.plyExporterOptionsBinary = plyExporterOptionsBinary

const plyExporterOptionsString = ([
    'binary',
] as const).distinct()
consParams.plyExporterOptionsString = plyExporterOptionsString

const plyExporterOptions = ([
    'binary',
] as const).distinct()
consParams.plyExporterOptions = plyExporterOptions

const plyExporter = ([
] as const).distinct()
consParams.plyExporter = plyExporter



const _plyExporterOptionsBase = ([
    'excludeAttributes',
    'littleEndian',
] as const).distinct()
objProps.plyExporterOptionsBase = _plyExporterOptionsBase

const _plyExporterOptionsBinary = ([...objProps.plyExporterOptionsBase,
    'binary',
] as const).distinct()
objProps.plyExporterOptionsBinary = _plyExporterOptionsBinary

const _plyExporterOptionsString = ([...objProps.plyExporterOptionsBase,
    'binary',
] as const).distinct()
objProps.plyExporterOptionsString = _plyExporterOptionsString

const _plyExporterOptions = ([...objProps.plyExporterOptionsBase,
    'binary',
] as const).distinct()
objProps.plyExporterOptions = _plyExporterOptions

const _plyExporter = ([
] as const).distinct()
objProps.plyExporter = _plyExporter

export type PLYExporterProps = Node<PLYExporter, typeof PLYExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        plyExporter: {}
    }
}

defaults.plyExporter = {
    options: {
        excludeAttributes: [],
        binary: false
    }
}
