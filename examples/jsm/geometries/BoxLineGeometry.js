import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
export * from 'three/examples/jsm/geometries/BoxLineGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BoxLineGeometry = BoxLineGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts
consParams.boxLineGeometry = [
    'width',
    'height',
    'depth',
    'widthSegments',
    'heightSegments',
    'depthSegments',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts    
objParams.boxLineGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.boxLineGeometry = {};
