import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader.js';
export * from 'three/examples/jsm/loaders/LUTCubeLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LUTCubeLoader = LUTCubeLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUTCubeLoader.d.ts
consParams.lutCubeResult = [
    'title',
    'size',
    'domainMin',
    'domainMax',
    'texture3d',
].distinct();
/**
 * A 3d LUT loader that supports the .cube file format.
 *
 * Based on the following reference:
 *
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */
consParams.lutCubeLoader = [
    /**
     * Creates a new {@link LUTCubeLoader}.
     * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
     */
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUTCubeLoader.d.ts
objParams.lutCubeResult = [
    'title',
    'size',
    'domainMin',
    'domainMax',
    'texture3d',
].distinct();
/**
 * A 3d LUT loader that supports the .cube file format.
 *
 * Based on the following reference:
 *
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */
objParams.lutCubeLoader = [...objParams.loader,
    'type',
].distinct();
defaults.lutCubeLoader = {};
