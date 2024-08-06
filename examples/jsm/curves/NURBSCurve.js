import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve.js';
export * from 'three/examples/jsm/curves/NURBSCurve.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NURBSCurve = NURBSCurve;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts
consParams.nurbsCurve = [
    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts    
objParams.nurbsCurve = [...objParams.curve,
    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
].distinct();
defaults.nURBSCurve = {};
