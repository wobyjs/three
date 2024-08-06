import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
export * from 'three/examples/jsm/lines/LineGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './LineSegmentsGeometry';
Three.LineGeometry = LineGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts
consParams.lineGeometry = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts    
objParams.lineGeometry = [...objParams.lineSegmentsGeometry,
].distinct();
defaults.lineGeometry = {};
