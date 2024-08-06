import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.CubeTextureLoader = CubeTextureLoader;
consParams.cubeTextureLoader = [
    'manager',
].distinct();
objParams.cubeTextureLoader = [...objParams.loader];
defaults.cubeTextureLoader = {};
