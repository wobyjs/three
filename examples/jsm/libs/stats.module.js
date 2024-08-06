import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
export { Stats };
// class Panel {
//     constructor(name: string, foregroundColor: string, backgroundColor: string);
//     dom: HTMLCanvasElement;
//     update(value: number, maxValue: number): void;
// }
Three.Stats = Stats;
consParams.panel = [
    'name',
    'foregroundColor',
    'backgroundColor',
].distinct();
objParams.stats = [
    'dom',
].distinct();
consParams.stats = [].distinct();
objParams.panel = [
    'dom',
].distinct();
defaults.stats = {};
defaults.panel = {};
// import { } from 'three/examples/jsm/libs/fflate.module'
// import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
// import { } from 'three/examples/jsm/libs/stats.module'
// import { } from 'three/examples/jsm/libs/tween.module'
