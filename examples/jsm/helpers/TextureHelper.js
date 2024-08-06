import { TextureHelper } from 'three/examples/jsm/helpers/TextureHelper.js';
export * from 'three/examples/jsm/helpers/TextureHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TextureHelper = TextureHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts
consParams.textureHelper = [
    'texture',
    'width',
    'height',
    'depth',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts    
objParams.textureHelper = [...objParams.mesh,
    'texture',
].distinct();
defaults.textureHelper = {};
