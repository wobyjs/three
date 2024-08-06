import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js';
export * from 'three/examples/jsm/textures/FlakesTexture.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FlakesTexture = FlakesTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts
consParams.flakesTexture = [
    'width',
    'height',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts    
objParams.flakesTexture = [].distinct();
defaults.flakesTexture = {};
