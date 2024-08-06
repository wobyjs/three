import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
export * from 'three/examples/jsm/controls/PointerLockControls.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PointerLockControls = PointerLockControls;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts
consParams.pointerLockControls = [
    'camera',
    'domElement',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts    
objParams.pointerLockControls = [
    'camera',
    'domElement',
    // API
    'isLocked',
    'minPolarAngle',
    'maxPolarAngle',
    'pointerSpeed',
].distinct();
defaults.pointerLockControls = {};
