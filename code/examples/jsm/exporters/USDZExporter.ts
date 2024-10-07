import { Node } from '../../../three-types'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'
export * from 'three/examples/jsm/exporters/USDZExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        USDZExporter: typeof USDZExporter
    }
}

Three.USDZExporter = USDZExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            usdzExporter: USDZExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        usdzExporter: typeof usdzExporter
        usdzExporterOptions: typeof usdzExporterOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        usdzExporter: typeof _usdzExporter
        usdzExporterOptions: typeof _usdzExporterOptions
    }
}



const usdzExporterOptions = ([
    'quickLookCompatible',
    'maxTextureSize',
] as const).distinct()
consParams.usdzExporterOptions = usdzExporterOptions


const usdzExporter = ([
] as const).distinct()
consParams.usdzExporter = usdzExporter



const _usdzExporterOptions = ([
    'quickLookCompatible',
    'maxTextureSize',
] as const).distinct()
objProps.usdzExporterOptions = _usdzExporterOptions


const _usdzExporter = ([
] as const).distinct()
objProps.usdzExporter = _usdzExporter

export type USDZExporterProps = Node<USDZExporter, typeof USDZExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzExporter: {}
    }
}

defaults.usdzExporter = {}

