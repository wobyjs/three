import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
export * from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './LineSegmentsGeometry';
Three.WireframeGeometry2 = WireframeGeometry2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts
consParams.wireframeGeometry2 = [
    'geometry',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts    
objParams.wireframeGeometry2 = [...objParams.lineSegmentsGeometry,
].distinct();
defaults.wireframeGeometry2 = {};
