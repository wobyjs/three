import { Node } from '../../../three-types'
import { KTX2Exporter } from 'three/examples/jsm/exporters/KTX2Exporter.js'
export * from 'three/examples/jsm/exporters/KTX2Exporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        ktx2Exporter: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ktx2Exporter: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\KTX2Exporter.d.ts

consParams.ktx2Exporter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\KTX2Exporter.d.ts

objParams.ktx2Exporter = [
].distinct()

export type KTX2ExporterProps = Node<KTX2Exporter, typeof KTX2Exporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Exporter: {}
    }
}

defaults.ktx2Exporter = {}

