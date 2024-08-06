import { Projector } from 'three/examples/jsm/renderers/Projector.js';
export * from 'three/examples/jsm/renderers/Projector.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Projector = Projector;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts
consParams.renderableObject = [].distinct();
consParams.renderableFace = [].distinct();
consParams.renderableVertex = [].distinct();
consParams.renderableLine = [].distinct();
consParams.renderableSprite = [].distinct();
consParams.projector = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts
objParams.renderableObject = [
    'id',
    'object',
    'z',
    'renderOrder',
].distinct();
objParams.renderableFace = [
    'id',
    'v1',
    'v2',
    'v3',
    'normalModel',
    'vertexNormalsModel',
    'vertexNormalsLength',
    'color',
    'material',
    'uvs',
    'z',
    'renderOrder',
].distinct();
objParams.renderableVertex = [
    'position',
    'positionWorld',
    'positionScreen',
    'visible',
].distinct();
objParams.renderableLine = [
    'id',
    'v1',
    'v2',
    'vertexColors',
    'material',
    'z',
    'renderOrder',
].distinct();
objParams.renderableSprite = [
    'id',
    'object',
    'x',
    'y',
    'z',
    'rotation',
    'scale',
    'material',
    'renderOrder',
].distinct();
objParams.projector = [].distinct();
defaults.projector = {};
