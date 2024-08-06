import { Lut } from 'three/examples/jsm/math/Lut.js';
export * from 'three/examples/jsm/math/Lut.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Lut = Lut;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts
consParams.lut = [
    'colormap',
    'numberofcolors',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts
objParams.lut = [
    'lut',
    'map',
    'n',
    'minV',
    'maxV',
].distinct();
consParams.colorMapKeywords = [
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
].distinct();
objParams.colorMapKeywords = [
    'rainbow',
    'cooltowarm',
    'blackbody',
    'grayscale',
].distinct();
defaults.lut = { colormap: 'rainbow', numberofcolors: 32 };
