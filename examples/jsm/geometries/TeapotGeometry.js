import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
export * from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TeapotGeometry = TeapotGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts
consParams.teapotGeometry = [
    'size',
    'segments',
    'bottom',
    'lid',
    'body',
    'fitLid',
    'blinn',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts    
objParams.teapotGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.teapotGeometry = {};
