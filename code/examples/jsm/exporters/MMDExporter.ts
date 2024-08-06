import { Node } from '../../../three-types'
import { MMDExporter } from 'three/examples/jsm/exporters/MMDExporter.js'
export * from 'three/examples/jsm/exporters/MMDExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        mmdExporter: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdExporter: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\MMDExporter.d.ts

consParams.mmdExporter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\MMDExporter.d.ts

objParams.mmdExporter = [
].distinct()

export type MMDExporterProps = Node<MMDExporter, typeof MMDExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdExporter: {}
    }
}

defaults.mmdExporter = {}

