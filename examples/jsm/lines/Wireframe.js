import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
export * from 'three/examples/jsm/lines/Wireframe.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Wireframe = Wireframe;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts
consParams.wireframe = [
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts    
objParams.wireframe = [
    'geometry',
    'material',
].distinct();
defaults.wireframe = {};
