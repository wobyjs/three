import { Node } from '../../../three-types'
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js'
export * from 'three/examples/jsm/exporters/STLExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        STLExporter: typeof STLExporter
    }
}

Three.STLExporter = STLExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stlExporter: STLExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stlExporter: typeof stlExporter
        stlExporterOptionsBinary: typeof stlExporterOptionsBinary
        stlExporterOptionsString: typeof stlExporterOptionsString
        stlExporterOptions: typeof stlExporterOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stlExporter: typeof _stlExporter
        stlExporterOptionsBinary: typeof _stlExporterOptionsBinary
        stlExporterOptionsString: typeof _stlExporterOptionsString
        stlExporterOptions: typeof _stlExporterOptions
    }
}



const stlExporterOptionsBinary = ([
    'binary',
] as const).distinct()
consParams.stlExporterOptionsBinary = stlExporterOptionsBinary


const stlExporterOptionsString = ([
    'binary',
] as const).distinct()
consParams.stlExporterOptionsString = stlExporterOptionsString


const stlExporterOptions = ([
    'binary',
] as const).distinct()
consParams.stlExporterOptions = stlExporterOptions


const stlExporter = ([
] as const).distinct()
consParams.stlExporter = stlExporter



const _stlExporterOptionsBinary = ([
    'binary',
] as const).distinct()
objProps.stlExporterOptionsBinary = _stlExporterOptionsBinary


const _stlExporterOptionsString = ([
    'binary',
] as const).distinct()
objProps.stlExporterOptionsString = _stlExporterOptionsString


const _stlExporterOptions = ([
    'binary',
] as const).distinct()
objProps.stlExporterOptions = _stlExporterOptions


const _stlExporter = ([
] as const).distinct()
objProps.stlExporter = _stlExporter

export type STLExporterProps = Node<STLExporter, typeof STLExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stlExporter: {}
    }
}

defaults.stlExporter = { optoins: { binary: false } }
