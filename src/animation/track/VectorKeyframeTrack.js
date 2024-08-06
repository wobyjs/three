import { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js';
export { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VectorKeyframeTrack = VectorKeyframeTrack;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts
consParams.vectorKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts    
objParams.vectorKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'vector'
     */
    'ValueTypeName',
].distinct();
defaults.vectorKeyframeTrack = {};
