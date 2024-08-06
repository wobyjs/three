import { CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver.js';
export * from 'three/examples/jsm/animation/CCDIKSolver.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CCDIKSolver = CCDIKSolver;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts
consParams.animationClipCreator = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
// eslint-disable-next-line @typescript-eslint/naming-convention
consParams.iK = [
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
].distinct();
consParams.ccdikSolver = [
    'mesh',
    'iks',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\Addons.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts
objParams.animationClipCreator = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
// eslint-disable-next-line @typescript-eslint/naming-convention
objParams.iK = [
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
].distinct();
objParams.ccdikSolver = [
    'mesh',
    'iks',
].distinct();
consParams.ccdikHelper = [
    'mesh',
    'iks',
    'sphereSize',
].distinct();
objParams.ccdikHelper = [...objParams.object3d,
    'root',
    'iks',
    'sphereGeometry',
    'targetSphereMaterial',
    'effectorSphereMaterial',
    'linkSphereMaterial',
    'lineMaterial',
].distinct();
defaults.cCDIKSolver = {};
