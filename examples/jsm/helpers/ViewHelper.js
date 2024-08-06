import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js';
export * from 'three/examples/jsm/helpers/ViewHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewHelper = ViewHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts
consParams.viewHelper = [
    'camera',
    'domElement',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts    
objParams.viewHelper = [...objParams.object3d,
    'animating',
    'center',
].distinct();
defaults.viewHelper = {};
