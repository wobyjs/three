import { NURBSVolume } from 'three/examples/jsm/curves/NURBSVolume.js';
export * from 'three/examples/jsm/curves/NURBSVolume.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NURBSVolume = NURBSVolume;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSVolume.d.ts
consParams.nurbsVolume = [
    'degree1',
    'degree2',
    'degree3',
    'knots1',
    'knots2',
    'knots3',
    'controlPoints',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSVolume.d.ts
objParams.nurbsVolume = [
    'degree1',
    'degree2',
    'degree3',
    'knots1',
    'knots2',
    'knots3',
    'controlPoints',
].distinct();
defaults.nURBSVolume = {};
