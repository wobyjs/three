import ArrayElementNode from 'three/src/nodes/utils/ArrayElementNode.js';
export { ArrayElementNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ArrayElementNode = ArrayElementNode;
consParams.arrayElementNode = [
    'node',
    'indexNode',
];
objParams.arrayElementNode = [
    'node',
    'indexNode',
];
defaults.arrayElementNode = {};
