import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js';
export * from 'three/examples/jsm/helpers/PositionalAudioHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PositionalAudioHelper = PositionalAudioHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts
consParams.positionalAudioHelper = [
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts    
objParams.positionalAudioHelper = [...objParams.line,
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
].distinct();
defaults.positionalAudioHelper = {};
