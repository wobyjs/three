import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
export * from 'three/examples/jsm/postprocessing/FilmPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.FilmPass = FilmPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts
consParams.filmPass = [
    'intensity',
    'grayscale',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts    
objParams.filmPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.filmPass = {};
