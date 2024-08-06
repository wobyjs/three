import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js';
export { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.KeyframeTrack = KeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts
consParams.keyframeTrack = [
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts    
objParams.keyframeTrack = [
    'name',
    'times',
    'values',
    'ValueTypeName',
    'TimeBufferType',
    'ValueBufferType',
].distinct();
defaults.keyframeTrack = {};
