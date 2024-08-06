import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
export * from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RoomEnvironment = RoomEnvironment;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts
consParams.roomEnvironment = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts    
objParams.roomEnvironment = [...objParams.scene,
].distinct();
defaults.roomEnvironment = {};
