import { PropertyBinding } from 'three/src/animation/PropertyBinding.js';
export { PropertyBinding } from 'three/src/animation/PropertyBinding.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.PropertyBinding = PropertyBinding;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts
consParams.parseTrackNameResults = [
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
].distinct();
consParams.propertyBinding = [
    'rootNode',
    'path',
    'parsedPath',
].distinct();
objParams.propertyBinding = [
    'path',
    'parsedPath',
    'node',
    'rootNode',
    'BindingType',
    'Versioning',
    'GetterByBindingType',
    'SetterByBindingTypeAndVersioning',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts
objParams.parseTrackNameResults = [
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
].distinct();
defaults.parseTrackNameResults = {};
