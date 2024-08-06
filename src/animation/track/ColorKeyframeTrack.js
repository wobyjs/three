import { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js';
export { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ColorKeyframeTrack = ColorKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts
consParams.colorKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts    
objParams.colorKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'color'
     */
    'ValueTypeName',
].distinct();
defaults.colorKeyframeTrack = {};
