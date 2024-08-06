import { Node } from '../../../three-types'
import Info from 'three/src/renderers/common/Info.js'
export { Info }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Info: typeof Info
    }
}

Three.Info = Info

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            info: InfoProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        info: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        info: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts

consParams.info = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts

objParams.info = [
    'autoReset',
    'frame',
    'calls',
    'render',
    'compute',
    'memory',
].distinct()

export type InfoProps = Node<Info, typeof Info, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        info: {}
    }
}

defaults.info = {}

