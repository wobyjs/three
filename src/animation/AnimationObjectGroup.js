import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js';
export { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.AnimationObjectGroup = AnimationObjectGroup;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts
consParams.animationObjectGroup = [
// '...this.args',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts
objParams.animationObjectGroup = [
    'uuid',
    'stats',
].distinct();
defaults.animationObjectGroup = {};
