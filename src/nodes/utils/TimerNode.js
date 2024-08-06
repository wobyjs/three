import TimerNode from 'three/src/nodes/utils/TimerNode.js';
export { TimerNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../accessors/UniformsNode';
Three.TimerNode = TimerNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts
consParams.timerNode = [
    'scope',
    'scale',
    'value',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts    
objParams.timerNode = [...objParams.uniformNode,
    'scope',
    'scale',
].distinct();
defaults.timerNode = {};
