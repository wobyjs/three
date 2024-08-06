import { AnimationMixer } from 'three/src/animation/AnimationMixer.js';
export { AnimationMixer } from 'three/src/animation/AnimationMixer.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.AnimationMixer = AnimationMixer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts
consParams.animationMixerEventMap = [
    'loop',
    'finished',
].distinct();
consParams.animationMixer = [
    'root',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts
objParams.animationMixerEventMap = [
    'loop',
    'finished',
].distinct();
objParams.animationMixer = [
    /**
     * @default 0
     */
    'time',
    /**
     * @default 1.0
     */
    'timeScale',
].distinct();
defaults.animationMixer = {};
