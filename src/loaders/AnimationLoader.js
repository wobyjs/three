import { AnimationLoader } from 'three/src/loaders/AnimationLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.AnimationLoader = AnimationLoader;
consParams.animationLoader = [
    'manager',
].distinct();
objParams.animationLoader = [...objParams.loader];
defaults.animationLoader = {};
