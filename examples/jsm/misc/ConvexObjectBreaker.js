import { ConvexObjectBreaker } from 'three/examples/jsm/misc/ConvexObjectBreaker.js';
export * from 'three/examples/jsm/misc/ConvexObjectBreaker.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ConvexObjectBreaker = ConvexObjectBreaker;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts
consParams.cutByPlaneOutput = [
    'object1',
    'object2',
].distinct();
consParams.convexObjectBreaker = [
    'minSizeForBreak',
    'smallDelta',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts
objParams.cutByPlaneOutput = [
    'object1',
    'object2',
].distinct();
objParams.convexObjectBreaker = [].distinct();
defaults.convexObjectBreaker = {};
