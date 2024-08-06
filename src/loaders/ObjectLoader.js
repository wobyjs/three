import { ObjectLoader } from 'three/src/loaders/ObjectLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.ObjectLoader = ObjectLoader;
consParams.objectLoader = [
    'manager',
].distinct();
objParams.objectLoader = [...objParams.loader];
defaults.objectLoader = {};
