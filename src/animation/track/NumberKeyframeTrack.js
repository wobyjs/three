import { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js';
export { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NumberKeyframeTrack = NumberKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts
consParams.numberKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts    
objParams.numberKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'number'
     */
    'ValueTypeName',
].distinct();
defaults.numberKeyframeTrack = {};
