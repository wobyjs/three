import PostProcessing from 'three/src/renderers/common/PostProcessing.js';
export { PostProcessing };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PostProcessing = PostProcessing;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts
consParams.postProcessing = [
    'renderer',
    'outputNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts
objParams.postProcessing = [
    'renderer',
    'outputNode',
].distinct();
defaults.postProcessing = {};
