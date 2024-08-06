import { ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass.js';
export * from 'three/examples/jsm/objects/ReflectorForSSRPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ReflectorForSSRPass = ReflectorForSSRPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts
consParams.reflectorShader = [
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
].distinct();
consParams.reflectorForSsrPassOptions = [
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
].distinct();
consParams.reflectorForSsrPass = [
    'geometry',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts
objParams.reflectorShader = [
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
].distinct();
objParams.reflectorForSsrPassOptions = [
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
].distinct();
objParams.reflectorForSsrPass = [
    'options',
    'needsUpdate',
    'maxDistance',
    'opacity',
    'color',
    'resolution',
    'distanceAttenuation',
    'fresnel',
    'material',
    'renderTarget',
].distinct();
defaults.reflectorForSsrPass = {};
