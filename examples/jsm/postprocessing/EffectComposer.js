import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
export * from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.EffectComposer = EffectComposer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts
consParams.effectComposer = [
    'renderer',
    'renderTarget',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts
objParams.effectComposer = [
    'renderer',
    'renderTarget1',
    'renderTarget2',
    'writeBuffer',
    'readBuffer',
    'passes',
    'copyPass',
    'clock',
    'renderToScreen',
].distinct();
defaults.effectComposer = {};
