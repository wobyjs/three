import { FileLoader } from 'three/src/loaders/FileLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.FileLoader = FileLoader;
consParams.fileLoader = [
    'manager',
].distinct();
objParams.fileLoader = [...objParams.loader];
defaults.fileLoader = {};
