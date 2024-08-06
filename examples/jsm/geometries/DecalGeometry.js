export * from 'three/examples/jsm/geometries/DecalGeometry.js';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts
consParams.decalGeometry = [
    'mesh',
    'position',
    'orientation',
    'size',
].distinct();
consParams.decalVertex = [
    'position',
    'normal',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts    
objParams.decalGeometry = [...objParams.bufferGeometry,
].distinct();
objParams.decalVertex = [].distinct();
defaults.decalGeometry = {};
defaults.decalVertex = {};
