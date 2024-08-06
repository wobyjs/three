import { AnimationClip } from 'three/src/animation/AnimationClip.js';
export { AnimationClip } from 'three/src/animation/AnimationClip.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.AnimationClip = AnimationClip;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts
consParams.animationClip = [
    'name',
    'duration',
    'tracks',
    'blendMode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts
objParams.morphTarget = [
    'name',
    'vertices',
].distinct();
objParams.animationClip = [
    'name',
    'tracks',
    /**
     * @default THREE.NormalAnimationBlendMode
     */
    'blendMode',
    /**
     * @default -1
     */
    'duration',
    'uuid',
    'results',
].distinct();
defaults.animationClip = {};
