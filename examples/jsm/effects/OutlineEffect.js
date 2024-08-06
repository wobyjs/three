import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';
export * from 'three/examples/jsm/effects/OutlineEffect.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.OutlineEffect = OutlineEffect;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts
consParams.outlineEffectParameters = [
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
].toObject();
consParams.outlineEffect = [
    'renderer',
    'parameters', //outlineEffectParameters
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts
objParams.outlineEffectParameters = [
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
].distinct();
objParams.outlineEffect = [
    'enabled',
    'autoClear',
    'domElement',
    'shadowMap',
].distinct();
defaults.outlineEffect = {};
