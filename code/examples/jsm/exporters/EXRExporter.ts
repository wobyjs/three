import { Node } from '../../../three-types'
import { EXRExporter } from 'three/examples/jsm/exporters/EXRExporter.js'
export * from 'three/examples/jsm/exporters/EXRExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { HalfFloatType } from 'three/src/constants'

declare module '../../../lib/3/three'
{
    interface Three {
        EXRExporter: typeof EXRExporter
    }
}

Three.EXRExporter = EXRExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            exrExporter: EXRExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        exrExporter: typeof exrExporter
        exrExporterParseOptions: typeof exrExporterParseOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        exrExporter: typeof _exrExporter
        exrExporterParseOptions: typeof _exrExporterParseOptions
    }
}


/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

const exrExporterParseOptions = ([
    'compression',
    'type',
] as const).distinct()
consParams.exrExporterParseOptions = exrExporterParseOptions


const exrExporter = ([
] as const).distinct()
consParams.exrExporter = exrExporter

/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

const _exrExporterParseOptions = ([
    'compression',
    'type',
] as const).distinct()
objProps.exrExporterParseOptions = _exrExporterParseOptions


const _exrExporter = ([
] as const).distinct()
objProps.exrExporter = _exrExporter

export type EXRExporterProps = Node<EXRExporter, typeof EXRExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        exrExporter: {}
    }
}

defaults.exrExporter = {
    options: {
        type: HalfFloatType,
        // compression: ZIP_COMPRESSION
    }
}
