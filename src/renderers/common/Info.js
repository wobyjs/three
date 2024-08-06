import Info from 'three/src/renderers/common/Info.js';
export { Info };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Info = Info;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts
consParams.info = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts
objParams.info = [
    'autoReset',
    'frame',
    'calls',
    'render',
    'compute',
    'memory',
].distinct();
defaults.info = {};
