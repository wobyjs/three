import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js';
export * from 'three/examples/jsm/controls/ArcballControls.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ArcballControls = ArcballControls;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts
consParams.arcballControls = [
    'camera',
    'domElement',
    'scene',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts
objParams.arcballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct();
defaults.arcballControls = {};
