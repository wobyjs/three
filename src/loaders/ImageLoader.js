import { ImageLoader } from 'three/src/loaders/ImageLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.ImageLoader = ImageLoader;
consParams.imageLoader = [
    'manager',
].distinct();
objParams.imageLoader = [...objParams.loader];
defaults.imageLoader = {};
