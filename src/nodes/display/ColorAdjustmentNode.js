import ColorAdjustmentNode from 'three/src/nodes/display/ColorAdjustmentNode.js';
export { ColorAdjustmentNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ColorAdjustmentNode = ColorAdjustmentNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts
consParams.colorAdjustmentNode = [
    'method',
    'colorNode',
    'adjustmentNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts    
objParams.colorAdjustmentNode = [...objParams.tempNode,
    'method',
    'colorNode',
    'adjustmentNode',
].distinct();
defaults.colorAdjustmentNode = {};
