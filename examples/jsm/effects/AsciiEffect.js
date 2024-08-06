import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
export * from 'three/examples/jsm/effects/AsciiEffect.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AsciiEffect = AsciiEffect;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts
consParams.asciiEffectOptions = [
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
].distinct();
consParams.asciiEffect = [
    'renderer',
    'charSet',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts
objParams.asciiEffectOptions = [
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
].distinct();
objParams.asciiEffect = [
    'domElement',
].distinct();
defaults.asciiEffect = {};
