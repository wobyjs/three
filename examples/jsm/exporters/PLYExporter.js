import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter.js';
export * from 'three/examples/jsm/exporters/PLYExporter.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PLYExporter = PLYExporter;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\plyExporter.d.ts
consParams.plyExporterOptionsBase = [
    'excludeAttributes',
    'littleEndian',
].distinct();
consParams.plyExporterOptionsBinary = [
    'binary',
].distinct();
consParams.plyExporterOptionsString = [
    'binary',
].distinct();
consParams.plyExporterOptions = [
    'binary',
].distinct();
consParams.plyExporter = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\PLYExporter.d.ts
objParams.plyExporterOptionsBase = [
    'excludeAttributes',
    'littleEndian',
].distinct();
objParams.plyExporterOptionsBinary = [...objParams.plyExporterOptionsBase,
    'binary',
].distinct();
objParams.plyExporterOptionsString = [...objParams.plyExporterOptionsBase,
    'binary',
].distinct();
objParams.plyExporterOptions = [...objParams.plyExporterOptionsBase,
    'binary',
].distinct();
objParams.plyExporter = [].distinct();
defaults.plyExporter = {
    options: {
        excludeAttributes: [],
        binary: false
    }
};
