import { Loader } from 'three/src/loaders/Loader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Loader = Loader;
consParams.loader = [
    'manager',
].distinct();
objParams.loader = [
    /**
     * @default 'anonymous'
     */
    'crossOrigin',
    /**
     * @default false
     */
    'withCredentials',
    /**
     * @default ''
     */
    'path',
    /**
     * @default ''
     */
    'resourcePath',
    'manager',
    /**
     * @default {}
     */
    'requestHeader',
].distinct();
defaults.loader = {};
