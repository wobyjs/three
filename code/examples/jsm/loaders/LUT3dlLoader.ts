import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LUT3dlLoader } from 'three/examples/jsm/loaders/LUT3dlLoader.js'
export * from 'three/examples/jsm/loaders/LUT3dlLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LUT3dlLoader: typeof LUT3dlLoader
    }
}

Three.LUT3dlLoader = LUT3dlLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lut3dlLoader: LUT3dlLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lut3dlLoader: string[]
        lut3dlResult: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lut3dlLoader: string[]
        lut3dlResult: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts

consParams.lut3dlResult = [
    'size',
    'texture3d',
].distinct()
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
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts

objParams.lut3dlResult = [
    'size',
    'texture3d',
].distinct()

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
].distinct()

export type LUT3dlLoaderProps = Node<LUT3dlLoader, typeof LUT3dlLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lut3dlLoader: { manager?: LoadingManager; }
    }
}

defaults.lut3dlLoader = {}

