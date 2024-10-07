import { Node } from '../../../three-types'
import { DRACOExporter } from 'three/examples/jsm/exporters/DRACOExporter.js'
export * from 'three/examples/jsm/exporters/DRACOExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DRACOExporter: typeof DRACOExporter
    }
}

Three.DRACOExporter = DRACOExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dracoExporter: DRACOExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        dracoExporter: typeof dracoExporter
        dracoExporterOptions: typeof dracoExporterOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        dracoExporter: typeof _dracoExporter
        dracoExporterOptions: typeof _dracoExporterOptions
    }
}



const dracoExporterOptions = ([
    'decodeSpeed',
    'encodeSpeed',
    'encoderMethod',
    'quantization',
    'exportUvs',
    'exportNormals',
    'exportColor',
] as const).distinct()
consParams.dracoExporterOptions = dracoExporterOptions


const dracoExporter = ([
] as const).distinct()
consParams.dracoExporter = dracoExporter



const _dracoExporterOptions = ([
    'decodeSpeed',
    'encodeSpeed',
    'encoderMethod',
    'quantization',
    'exportUvs',
    'exportNormals',
    'exportColor',
] as const).distinct()
objProps.dracoExporterOptions = _dracoExporterOptions


const _dracoExporter = ([
] as const).distinct()
objProps.dracoExporter = _dracoExporter

export type DRACOExporterProps = Node<DRACOExporter, typeof DRACOExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dracoExporter: {}
    }
}

defaults.dracoExporter = {
    options: {
        decodeSpeed: 5,
        encodeSpeed: 5,
        // encoderMethod: DRACOExporter.MESH_EDGEBREAKER_ENCODING,
        quantization: [16, 8, 8, 8, 8],
        exportUvs: true,
        exportNormals: true,
        exportColor: false,
    }
}

