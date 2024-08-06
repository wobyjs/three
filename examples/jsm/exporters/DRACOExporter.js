import { DRACOExporter } from 'three/examples/jsm/exporters/DRACOExporter.js';
export * from 'three/examples/jsm/exporters/DRACOExporter.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.DRACOExporter = DRACOExporter;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\DRACOExporter.d.ts
consParams.dracoExporterOptions = [
    'decodeSpeed',
    'encodeSpeed',
    'encoderMethod',
    'quantization',
    'exportUvs',
    'exportNormals',
    'exportColor',
].distinct();
consParams.dracoExporter = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\DRACOExporter.d.ts
objParams.dracoExporterOptions = [
    'decodeSpeed',
    'encodeSpeed',
    'encoderMethod',
    'quantization',
    'exportUvs',
    'exportNormals',
    'exportColor',
].distinct();
objParams.dracoExporter = [].distinct();
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
};
