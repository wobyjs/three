import { SDFGeometryGenerator } from 'three/examples/jsm/geometries/SDFGeometryGenerator.js';
export * from 'three/examples/jsm/geometries/SDFGeometryGenerator.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SDFGeometryGenerator = SDFGeometryGenerator;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts
consParams.sdfGeometryGenerator = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts
objParams.sdfGeometryGenerator = [].distinct();
defaults.sDFGeometryGenerator = {};
