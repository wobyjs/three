import SplitNode from 'three/src/nodes/utils/SplitNode.js';
export { SplitNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.SplitNode = SplitNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
/** swizzle node */
consParams.splitNode = [
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    'node',
    'components',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
/** swizzle node */
objParams.splitNode = [...objParams.node,
    'node',
    'components',
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
].distinct();
defaults.splitNode = {};
