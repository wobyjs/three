import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera.js';
export * from 'three/examples/jsm/cameras/CinematicCamera.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CinematicCamera = CinematicCamera;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts
consParams.cinematicCamera = [
    'fov',
    'aspect',
    'near',
    'far',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts    
objParams.cinematicCamera = [...objParams.perspectiveCamera,
    'postprocessing',
    'shaderSettings',
    'materialDepth',
    'coc',
    'aperture',
    'fNumber',
    'hyperFocal',
    'filmGauge',
].distinct();
defaults.cinematicCamera = {};
