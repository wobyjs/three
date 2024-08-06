import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
export * from 'three/examples/jsm/controls/TrackballControls.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TrackballControls = TrackballControls;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts
consParams.trackballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct();
consParams.trackballControls = [
    'object',
    'domElement',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts
objParams.trackballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct();
objParams.trackballControls = [
    'object',
    'domElement',
    // API
    'enabled',
    'screen',
    'rotateSpeed',
    'zoomSpeed',
    'panSpeed',
    'noRotate',
    'noZoom',
    'noPan',
    'noRoll',
    'staticMoving',
    'dynamicDampingFactor',
    'minDistance',
    'maxDistance',
    'minZoom',
    'maxZoom',
    'keys',
    'mouseButtons',
    'target',
    'position0',
    'target0',
    'up0',
].distinct();
defaults.trackballControls = {};
