import { LottieLoader } from 'three/examples/jsm/loaders/LottieLoader.js';
export * from 'three/examples/jsm/loaders/LottieLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LottieLoader = LottieLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts
consParams.lottieLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts    
objParams.lottieLoader = [...objParams.loader,
].distinct();
defaults.lottieLoader = {};
