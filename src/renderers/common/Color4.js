import Color4 from 'three/src/renderers/common/Color4.js';
export { Color4 };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Color4 = Color4;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts
consParams.color4 = [
    'r',
    'g',
    'b',
    'a',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts    
objParams.color4 = [...objParams.color,
].distinct();
defaults.color4 = {};
