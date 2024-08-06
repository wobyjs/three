import { Node } from '../../../three-types'
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js'
export * from 'three/examples/jsm/exporters/OBJExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        objExporter: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        objExporter: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\OBJExporter.d.ts

consParams.objExporter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\OBJExporter.d.ts

objParams.objExporter = [
].distinct()

export type OBJExporterProps = Node<OBJExporter, typeof OBJExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        objExporter: {}
    }
}

defaults.objExporter = {}

