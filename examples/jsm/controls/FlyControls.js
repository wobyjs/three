import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
export * from 'three/examples/jsm/controls/FlyControls.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FlyControls = FlyControls;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts
consParams.flyControlsEventMap = [
    'change',
].distinct();
consParams.flyControls = [
    'object',
    'domElement',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts
objParams.flyControlsEventMap = [
    'change',
].distinct();
objParams.flyControls = [
    'autoForward',
    'domElement',
    'dragToLook',
    'enabled',
    'movementSpeed',
    'object',
    'rollSpeed',
].distinct();
defaults.flyControls = {};
