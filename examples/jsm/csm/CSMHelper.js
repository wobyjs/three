import { CSMHelper } from 'three/examples/jsm/csm/CSMHelper.js';
export * from 'three/examples/jsm/csm/CSMHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CSMHelper = CSMHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts
consParams.csmHelper = [
    'csm',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts    
objParams.csmHelper = [...objParams.group,
    'csm',
    'displayFrustum',
    'displayPlanes',
    'displayShadowBounds',
    'frustumLines',
    'cascadeLines',
    'cascadePlanes',
    'shadowLines',
].distinct();
defaults.csmHelper = {};
