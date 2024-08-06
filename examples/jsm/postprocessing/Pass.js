import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
export * from 'three/examples/jsm/postprocessing/Pass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Pass = Pass;
Three.FullScreenQuad = FullScreenQuad;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts
consParams.pass = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts
objParams.pass = [
    'isPass',
    'enabled',
    'needsSwap',
    'clear',
    'renderToScreen',
].distinct();
consParams.fullScreenQuad = [
    'material',
].distinct();
objParams.fullScreenQuad = [
    'material',
].distinct();
defaults.pass = {};
defaults.fullScreenQuad = {};
