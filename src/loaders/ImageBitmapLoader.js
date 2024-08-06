import { ImageBitmapLoader } from 'three/src/loaders/ImageBitmapLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.ImageBitmapLoader = ImageBitmapLoader;
consParams.imageBitmapLoader = [
    'manager',
].distinct();
objParams.imageBitmapLoader = [...objParams.loader,
    /**
    * @default { premultiplyAlpha: 'none' }
    */
    'options',
];
defaults.imageBitmapLoader = {};
