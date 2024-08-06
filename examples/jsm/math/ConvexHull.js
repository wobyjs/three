import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js';
export * from 'three/examples/jsm/math/ConvexHull.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ConvexHull = ConvexHull;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts
consParams.halfEdge = [
    'vertex',
    'face',
].distinct();
consParams.vertexNode = [
    'point',
].distinct();
consParams.vertexList = [].distinct();
consParams.convexHull = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts
objParams.halfEdge = [
    'vertex',
    'prev',
    'next',
    'twin',
    'face',
].distinct();
objParams.vertexNode = [
    'point',
    'prev',
    'next',
    'face',
].distinct();
objParams.vertexList = [
    'head',
    'tail',
].distinct();
objParams.convexHull = [
    'tolerance',
    'faces',
    'newFaces',
    'assigned',
    'unassigned',
    'vertices',
].distinct();
defaults.convexHull = {};
defaults.convexHull = {};
