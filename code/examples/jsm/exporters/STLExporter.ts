import { Node } from '../../../three-types'
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js'
export * from 'three/examples/jsm/exporters/STLExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        stlExporter: string[]
        stlExporterOptionsBinary: string[]
        stlExporterOptionsString: string[]
        stlExporterOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        stlExporter: string[]
        stlExporterOptionsBinary: string[]
        stlExporterOptionsString: string[]
        stlExporterOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\stlExporter.d.ts

consParams.stlExporterOptionsBinary = [
    'binary',
].distinct()


consParams.stlExporterOptionsString = [
    'binary',
].distinct()


consParams.stlExporterOptions = [
    'binary',
].distinct()


consParams.stlExporter = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\STLExporter.d.ts

objParams.stlExporterOptionsBinary = [
    'binary',
].distinct()


objParams.stlExporterOptionsString = [
    'binary',
].distinct()


objParams.stlExporterOptions = [
    'binary',
].distinct()


objParams.stlExporter = [
].distinct()

export type STLExporterProps = Node<STLExporter, typeof STLExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stlExporter: {}
    }
}

defaults.stlExporter = { optoins: { binary: false } }
