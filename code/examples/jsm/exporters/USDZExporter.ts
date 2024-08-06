import { Node } from '../../../three-types'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'
export * from 'three/examples/jsm/exporters/USDZExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        usdzExporter: string[]
        usdzExporterOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        usdzExporter: string[]
        usdzExporterOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\usdzExporter.d.ts

consParams.usdzExporterOptions = [
    'quickLookCompatible',
    'maxTextureSize',
].distinct()


consParams.usdzExporter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\USDZExporter.d.ts

objParams.usdzExporterOptions = [
    'quickLookCompatible',
    'maxTextureSize',
].distinct()


objParams.usdzExporter = [
].distinct()

export type USDZExporterProps = Node<USDZExporter, typeof USDZExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzExporter: {}
    }
}

defaults.usdzExporter = {}

