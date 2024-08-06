import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
export * from 'three/examples/jsm/lines/LineSegments2.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../src/materials';
Three.LineSegments2 = LineSegments2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts
consParams.lineSegments2 = [
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts    
objParams.lineSegments2 = [
    'geometry',
    'material',
].distinct();
defaults.lineSegments2 = {};
