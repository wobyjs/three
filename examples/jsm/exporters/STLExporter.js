import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
export * from 'three/examples/jsm/exporters/STLExporter.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.STLExporter = STLExporter;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\stlExporter.d.ts
consParams.stlExporterOptionsBinary = [
    'binary',
].distinct();
consParams.stlExporterOptionsString = [
    'binary',
].distinct();
consParams.stlExporterOptions = [
    'binary',
].distinct();
consParams.stlExporter = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\STLExporter.d.ts
objParams.stlExporterOptionsBinary = [
    'binary',
].distinct();
objParams.stlExporterOptionsString = [
    'binary',
].distinct();
objParams.stlExporterOptions = [
    'binary',
].distinct();
objParams.stlExporter = [].distinct();
defaults.stlExporter = { optoins: { binary: false } };
