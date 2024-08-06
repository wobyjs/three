import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js';
export * from 'three/examples/jsm/interactive/SelectionHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SelectionHelper = SelectionHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts
consParams.selectionHelper = [
    'renderer',
    'cssClassName',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts
objParams.selectionHelper = [
    'element',
    'isDown',
    'enabled',
    'pointBottomRight',
    'pointTopLeft',
    'renderer',
    'startPoint',
].distinct();
defaults.selectionHelper = {};
