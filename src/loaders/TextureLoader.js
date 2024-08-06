import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
export * from 'three/src/loaders/TextureLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
export * from 'three/src/loaders/LoadingManager.js';
import './Loader';
Three.TextureLoader = TextureLoader;
consParams.textureLoader = [
    'manager',
].distinct();
objParams.textureLoader = [...objParams.loader];
defaults.textureLoader = {};
