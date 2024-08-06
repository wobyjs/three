import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js';
export * from 'three/examples/jsm/loaders/PDBLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PDBLoader = PDBLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts
consParams.pdb = [
    'geometryAtoms',
    'geometryBonds',
    'json',
].distinct();
consParams.pdbLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts
objParams.pdb = [
    'geometryAtoms',
    'geometryBonds',
    'json',
].distinct();
objParams.pdbLoader = [...objParams.loader,
].distinct();
defaults.pdbLoader = {};
