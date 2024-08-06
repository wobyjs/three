import StorageTexture from 'three/src/renderers/common/StorageTexture.js';
export { StorageTexture };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.StorageTexture = StorageTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts
consParams.storageTexture = [
    'width',
    'height',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts    
objParams.storageTexture = [...objParams.texture,
].distinct();
defaults.storageTexture = {};
