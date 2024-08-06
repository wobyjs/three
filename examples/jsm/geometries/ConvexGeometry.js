import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
export * from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ConvexGeometry = ConvexGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts
consParams.convexGeometry = [
    'points',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts    
objParams.convexGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.convexGeometry = {};
