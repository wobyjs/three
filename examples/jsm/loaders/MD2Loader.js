import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader.js';
export * from 'three/examples/jsm/loaders/MD2Loader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MD2Loader = MD2Loader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts
consParams.md2Loader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts    
objParams.md2Loader = [...objParams.loader,
].distinct();
defaults.md2Loader = {};
