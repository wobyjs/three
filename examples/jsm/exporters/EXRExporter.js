import { EXRExporter } from 'three/examples/jsm/exporters/EXRExporter.js';
export * from 'three/examples/jsm/exporters/EXRExporter.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import { HalfFloatType } from 'three/src/constants';
Three.EXRExporter = EXRExporter;
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
].distinct();
consParams.exrExporter = [].distinct();
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
].distinct();
objParams.exrExporter = [].distinct();
defaults.exrExporter = {
    options: {
        type: HalfFloatType,
        // compression: ZIP_COMPRESSION
    }
};
