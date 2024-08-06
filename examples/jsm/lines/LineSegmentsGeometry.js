import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
export * from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../src/core/InstancedBufferGeometry';
Three.LineSegmentsGeometry = LineSegmentsGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts
consParams.lineSegmentsGeometry = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts    
objParams.lineSegmentsGeometry = [...objParams.instancedBufferGeometry,
].distinct();
defaults.lineSegmentsGeometry = {};
