import IrradianceNode from 'three/src/nodes/lighting/IrradianceNode.js';
export { IrradianceNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.IrradianceNode = IrradianceNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts
consParams.irradianceNode = [
    'node',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts    
objParams.irradianceNode = [...objParams.lightingNode,
    'node',
].distinct();
defaults.irradianceNode = {};
