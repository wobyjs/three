import { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js';
export { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.QuaternionKeyframeTrack = QuaternionKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts
consParams.quaternionKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts    
objParams.quaternionKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'quaternion'
     */
    'ValueTypeName',
].distinct();
defaults.quaternionKeyframeTrack = {};
