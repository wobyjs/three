import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
export * from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RectAreaLightHelper = RectAreaLightHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts
consParams.rectAreaLightHelper = [
    'light',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts    
objParams.rectAreaLightHelper = [...objParams.line,
    'light',
    'color',
].distinct();
defaults.rectAreaLightHelper = {};
