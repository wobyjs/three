import { MaterialLoader } from 'three/src/loaders/MaterialLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.MaterialLoader = MaterialLoader;
consParams.materialLoader = [
    'manager',
].distinct();
objParams.materialLoader = [...objParams.loader,
    /**
     * @default {}
     */
    'textures',
].distinct();
defaults.materialLoader = {};
