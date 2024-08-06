import PosterizeNode from 'three/src/nodes/display/PosterizeNode.js';
export { PosterizeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PosterizeNode = PosterizeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts
consParams.posterizeNode = [
    'sourceNode',
    'stepsNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts    
objParams.posterizeNode = [...objParams.node,
    'sourceNode',
    'stepsNode',
].distinct();
defaults.posterizeNode = {};
