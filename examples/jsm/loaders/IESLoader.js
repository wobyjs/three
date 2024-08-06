import { IESLoader } from 'three/examples/jsm/loaders/IESLoader.js';
export * from 'three/examples/jsm/loaders/IESLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.IESLoader = IESLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts
consParams.iesLoader = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts    
objParams.iesLoader = [...objParams.loader,
].distinct();
defaults.iesLoader = {};
