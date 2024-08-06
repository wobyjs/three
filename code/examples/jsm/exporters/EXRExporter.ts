import { Node } from '../../../three-types'
import { EXRExporter } from 'three/examples/jsm/exporters/EXRExporter.js'
export * from 'three/examples/jsm/exporters/EXRExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        exrExporter: string[]
        exrExporterParseOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        exrExporter: string[]
        exrExporterParseOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\EXRExporter.d.ts
/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

consParams.exrExporterParseOptions = [
    'compression',
    'type',
].distinct()


consParams.exrExporter = [
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\EXRExporter.d.ts
/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

objParams.exrExporterParseOptions = [
    'compression',
    'type',
].distinct()


objParams.exrExporter = [
].distinct()

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
