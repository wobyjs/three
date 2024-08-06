import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
export * from 'three/examples/jsm/exporters/USDZExporter.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.USDZExporter = USDZExporter;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\usdzExporter.d.ts
consParams.usdzExporterOptions = [
    'quickLookCompatible',
    'maxTextureSize',
].distinct();
consParams.usdzExporter = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\USDZExporter.d.ts
objParams.usdzExporterOptions = [
    'quickLookCompatible',
    'maxTextureSize',
].distinct();
objParams.usdzExporter = [].distinct();
defaults.usdzExporter = {};
