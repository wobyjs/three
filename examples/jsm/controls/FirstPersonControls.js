import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
export * from 'three/examples/jsm/controls/FirstPersonControls.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FirstPersonControls = FirstPersonControls;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts
consParams.firstPersonControls = [
    'object',
    'domElement',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts
objParams.firstPersonControls = [
    'object',
    'domElement',
    'enabled',
    'movementSpeed',
    'lookSpeed',
    'lookVertical',
    'autoForward',
    'activeLook',
    'heightSpeed',
    'heightCoef',
    'heightMin',
    'heightMax',
    'constrainVertical',
    'verticalMin',
    'verticalMax',
    'mouseDragOn',
].distinct();
defaults.firstPersonControls = {};
