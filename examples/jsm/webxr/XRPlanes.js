import { XRPlanes } from 'three/examples/jsm/webxr/XRPlanes.js';
export * from 'three/examples/jsm/webxr/XRPlanes.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XRPlanes = XRPlanes;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts
consParams.xrPlanes = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts    
objParams.xrPlanes = [...objParams.object3d,
].distinct();
defaults.xrPlanes = {};
