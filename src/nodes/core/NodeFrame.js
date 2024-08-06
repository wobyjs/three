import NodeFrame from 'three/src/nodes/core/NodeFrame.js';
export { NodeFrame };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeFrame = NodeFrame;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts
consParams.nodeFrame = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts
objParams.nodeFrame = [
    'time',
    'deltaTime',
    'frameId',
    'renderId',
    'startTime',
    'frameMap',
    'frameBeforeMap',
    'renderMap',
    'renderBeforeMap',
    'renderer',
    'material',
    'camera',
    'object',
    'scene',
].distinct();
defaults.nodeFrame = {};
