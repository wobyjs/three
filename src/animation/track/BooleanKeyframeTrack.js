import { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js';
export { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BooleanKeyframeTrack = BooleanKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts
consParams.booleanKeyframeTrack = [
    'name',
    'times',
    'values',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts    
objParams.booleanKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'bool'
     */
    'ValueTypeName',
].distinct();
defaults.booleanKeyframeTrack = {};
