import UserDataNode from 'three/src/nodes/accessors/UserDataNode.js';
export { UserDataNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.UserDataNode = UserDataNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts
consParams.userDataNode = [
    'property',
    'inputType',
    'userData',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts    
objParams.userDataNode = [...objParams.referenceNode,
    'userData',
].distinct();
defaults.userDataNode = {};
