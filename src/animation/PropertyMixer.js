import { PropertyMixer } from 'three/src/animation/PropertyMixer.js';
export { PropertyMixer } from 'three/src/animation/PropertyMixer.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.PropertyMixer = PropertyMixer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyMixer.d.ts
consParams.propertyMixer = [
    'binding',
    'typeName',
    'valueSize',
].distinct();
objParams.propertyMixer = [
    'binding',
    'valueSize',
    'buffer',
    'cumulativeWeight',
    'cumulativeWeightAdditive',
    'useCount',
    'referenceCount',
].distinct();
defaults.propertyMixer = {};
