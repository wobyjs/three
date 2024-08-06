import { LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper.js';
export * from 'three/examples/jsm/helpers/LightProbeHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LightProbeHelper = LightProbeHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts
consParams.lightProbeHelper = [
    'lightProbe',
    'size',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts    
objParams.lightProbeHelper = [...objParams.mesh,
    'lightProbe',
    'size',
].distinct();
defaults.lightProbeHelper = {};
