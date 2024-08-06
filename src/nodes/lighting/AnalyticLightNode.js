import AnalyticLightNode from 'three/src/nodes/lighting/AnalyticLightNode.js';
export { AnalyticLightNode };
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts
consParams.analyticLightNode = [
    'light',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts    
objParams.analyticLightNode = [...objParams.lightingNode,
    'light',
].distinct();
defaults.analyticLightNode = {};
