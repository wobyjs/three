import { AudioLoader } from 'three/src/loaders/AudioLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.AudioLoader = AudioLoader;
consParams.audioLoader = [
    'manager',
].distinct();
objParams.audioLoader = [...objParams.loader];
defaults.audioLoader = {};
