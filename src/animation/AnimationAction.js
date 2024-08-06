import { AnimationAction } from 'three/src/animation/AnimationAction.js';
export { AnimationAction } from 'three/src/animation/AnimationAction.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.AnimationAction = AnimationAction;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\utils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationAction.d.ts
// Animation ////////////////////////////////////////////////////////////////////////////////////////
consParams.animationAction = [
    'mixer',
    'clip',
    'localRoot',
    'blendMode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\utils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationAction.d.ts
// Animation ////////////////////////////////////////////////////////////////////////////////////////
objParams.animationAction = [
    'blendMode',
    /**
     * @default THREE.LoopRepeat
     */
    'loop',
    /**
     * @default 0
     */
    'time',
    /**
     * @default 1
     */
    'timeScale',
    /**
     * @default 1
     */
    'weight',
    /**
     * @default Infinity
     */
    'repetitions',
    /**
     * @default false
     */
    'paused',
    /**
     * @default true
     */
    'enabled',
    /**
     * @default false
     */
    'clampWhenFinished',
    /**
     * @default true
     */
    'zeroSlopeAtStart',
    /**
     * @default true
     */
    'zeroSlopeAtEnd',
].distinct();
defaults.animationAction = {};
