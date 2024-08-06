import NodeLoader from 'three/src/nodes/loaders/NodeLoader.js';
export { NodeLoader };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeLoader = NodeLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts
consParams.nodeLoaderResult = [].distinct();
consParams.nodeLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts
objParams.nodeLoaderResult = [].distinct();
objParams.nodeLoader = [...objParams.loader,
].distinct();
defaults.nodeLoader = {};
