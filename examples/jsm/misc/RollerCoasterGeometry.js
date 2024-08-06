import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts
consParams.rollerCoasterGeometry = [
    'curve',
    'divisions',
].distinct();
consParams.rollerCoasterLiftersGeometry = [
    'curve',
    'divisions',
].distinct();
consParams.rollerCoasterShadowGeometry = [
    'curve',
    'divisions',
].distinct();
consParams.skyGeometry = [].distinct();
consParams.treesGeometry = [
    'landscape',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts
objParams.rollerCoasterGeometry = [...objParams.bufferGeometry,
].distinct();
objParams.rollerCoasterLiftersGeometry = [...objParams.bufferGeometry,
].distinct();
objParams.rollerCoasterShadowGeometry = [...objParams.bufferGeometry,
].distinct();
objParams.skyGeometry = [...objParams.bufferGeometry,
].distinct();
objParams.treesGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.rollerCoasterGeometry = {};
defaults.rollerCoasterLiftersGeometry = {};
defaults.rollerCoasterShadowGeometry = {};
defaults.skyGeometry = {};
defaults.treesGeometry = {};
