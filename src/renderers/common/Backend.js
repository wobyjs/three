import Backend from 'three/src/renderers/common/Backend.js';
export { Backend };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.Backend = Backend;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts
consParams.backendParameters = [
    'canvas',
].toObject();
consParams.backend = { ...consParams.backendParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts
objParams.backendParameters = [
    'canvas',
].distinct();
objParams.backend = [
    'renderer',
    'domElement',
].distinct();
defaults.backend = {};
