import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js';
export * from 'three/examples/jsm/interactive/SelectionBox.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SelectionBox = SelectionBox;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts
consParams.selectionBox = [
    'camera',
    'scene',
    'deep',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts
objParams.selectionBox = [
    'camera',
    'collection',
    'deep',
    'endPoint',
    'scene',
    'startPoint',
    'instances',
].distinct();
defaults.selectionBox = {};
