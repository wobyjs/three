import { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js';
export { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.StringKeyframeTrack = StringKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts
consParams.stringKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts    
objParams.stringKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'string'
     */
    'ValueTypeName',
].distinct();
defaults.stringKeyframeTrack = {};
