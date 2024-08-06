import { DataTextureLoader } from 'three/src/loaders/DataTextureLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.DataTextureLoader = DataTextureLoader;
consParams.dataTextureLoader = [
    'manager',
].distinct();
objParams.dataTextureLoader = [...objParams.loader];
defaults.dataTextureLoader = {};
