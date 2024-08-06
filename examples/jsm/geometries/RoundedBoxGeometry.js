import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
export * from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RoundedBoxGeometry = RoundedBoxGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts
consParams.roundedBoxGeometry = [
    'width',
    'height',
    'depth',
    'segments',
    'radius',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts    
objParams.roundedBoxGeometry = [...objParams.boxGeometry,
].distinct();
defaults.roundedBoxGeometry = {};
