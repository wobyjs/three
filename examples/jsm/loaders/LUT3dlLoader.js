import { LUT3dlLoader } from 'three/examples/jsm/loaders/LUT3dlLoader.js';
export * from 'three/examples/jsm/loaders/LUT3dlLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LUT3dlLoader = LUT3dlLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts
consParams.lut3dlResult = [
    'size',
    'texture3d',
].distinct();
/**
 * A 3d LUT loader that supports the .3dl file format.
 *
 * Based on the following references:
 *
 * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
 * https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258
 */
consParams.lut3dlLoader = [
    /**
     * Creates a new {@link LUT3dlLoader}.
     * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
     */
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts
objParams.lut3dlResult = [
    'size',
    'texture3d',
].distinct();
/**
 * A 3d LUT loader that supports the .3dl file format.
 *
 * Based on the following references:
 *
 * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
 * https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258
 */
objParams.lut3dlLoader = [...objParams.loader,
    'type',
].distinct();
defaults.lut3dlLoader = {};
