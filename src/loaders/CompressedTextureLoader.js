import { CompressedTextureLoader } from 'three/src/loaders/CompressedTextureLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.CompressedTextureLoader = CompressedTextureLoader;
consParams.compressedTextureLoader = [
    'manager',
].distinct();
objParams.compressedTextureLoader = [...objParams.loader];
defaults.compressedTextureLoader = {};
