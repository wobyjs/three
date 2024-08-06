import NodeMaterialLoader from 'three/src/nodes/loaders/NodeMaterialLoader.js';
export { NodeMaterialLoader };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeMaterialLoader = NodeMaterialLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts
consParams.nodeMaterialLoader = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts    
objParams.nodeMaterialLoader = [...objParams.materialLoader,
    'nodes',
].distinct();
defaults.nodeMaterialLoader = {};
