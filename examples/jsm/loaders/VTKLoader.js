import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader.js';
export * from 'three/examples/jsm/loaders/VTKLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VTKLoader = VTKLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts
consParams.vtkLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts    
objParams.vtkLoader = [...objParams.loader,
].distinct();
defaults.vtkLoader = {};
