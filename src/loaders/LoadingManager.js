import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import { DefaultLoadingManager, LoadingManager } from 'three/src/loaders/LoadingManager.js';
export { DefaultLoadingManager, LoadingManager }; //from 'three/src/loaders/LoadingManager.js'
import './Loader';
Three.LoadingManager = LoadingManager;
consParams.loadingManager = [
    'onLoad',
    'onProgress',
    'onError',
].distinct();
objParams.loadingManager = [
    /**
      * Will be called when loading of an item starts.
      * @param url The url of the item that started loading.
      * @param loaded The number of items already loaded so far.
      * @param total The total amount of items to be loaded.
      */
    'onStart',
    /**
     * Will be called when all items finish loading.
     * The default is a function with empty body.
     */
    'onLoad',
    /**
     * Will be called for each loaded item.
     * The default is a function with empty body.
     * @param url The url of the item just loaded.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    'onProgress',
    /**
     * Will be called when item loading fails.
     * The default is a function with empty body.
     * @param url The url of the item that errored.
     */
    'onError',
];
defaults.loadingManager = {};
