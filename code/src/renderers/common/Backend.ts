import { Node, WrapAsString } from '../../../three-types'
import Backend, { BackendParameters } from 'three/src/renderers/common/Backend.js'
export { Backend }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        Backend: typeof Backend
    }
}

Three.Backend = Backend

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            backend: BackendProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        backend: WrapAsString<BackendParameters>
        backendParameters: WrapAsString<BackendParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        backend: string[]
        backendParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts

consParams.backendParameters = ([
    'canvas',
] as const).toObject()


consParams.backend = { ...consParams.backendParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts

objParams.backendParameters = [
    'canvas',
].distinct()

objParams.backend = [
    'renderer',
    'domElement',
].distinct()

export type BackendProps = Node<Backend, typeof Backend, BackendParameters>

declare module '../../../lib/3/defaults' {
    interface defaults {
        backend: BackendParameters
    }
}

defaults.backend = {}

