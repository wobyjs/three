import { CSMFrustum } from 'three/examples/jsm/csm/CSMFrustum.js';
export default CSMFrustum;
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.CSMFrustum = CSMFrustum;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts
consParams.csmFrustumVerticies = [
    'near',
    'far',
].distinct();
consParams.csmFrustumParameters = [
    'projectionMatrix',
    'maxFar',
].toObject();
consParams.csmFrustum = [
    'data',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts
objParams.csmFrustumVerticies = [
    'near',
    'far',
].distinct();
objParams.csmFrustumParameters = [
    'projectionMatrix',
    'maxFar',
].distinct();
objParams.csmFrustum = [
    'vertices',
].distinct();
defaults.cSMFrustum = {};
