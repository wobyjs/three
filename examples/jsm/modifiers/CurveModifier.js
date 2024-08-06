// import { BufferGeometry, Curve, DataTexture, InstancedMesh, IUniform, Material, Mesh, Vector3 } ;
import { InstancedFlow, Flow } from 'three/examples/jsm/modifiers/CurveModifier.js';
export * from 'three/examples/jsm/modifiers/CurveModifier.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.InstancedFlow = InstancedFlow;
Three.Flow = Flow;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts
consParams.splineUniform = [
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
].distinct();
consParams.flow = [
    'mesh',
    'numberOfCurves',
].distinct();
consParams.instancedFlow = [
    'count',
    'curveCount',
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts
objParams.splineUniform = [
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
].distinct();
objParams.flow = [
    'curveArray',
    'curveLengthArray',
    'object3d',
    'splineTexure',
    'uniforms',
].distinct();
objParams.instancedFlow = [...objParams.flow,
    'object3d',
    'offsets',
    'whichCurve',
].distinct();
defaults.instancedFlow = {};
defaults.flow = {};
defaults.splineUniform = {};
