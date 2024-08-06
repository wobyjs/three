import { Node } from '../../../../three-types'
import WGSLNodeFunction from 'three/src/renderers/webgpu/nodes/WGSLNodeFunction.js'
export { WGSLNodeFunction }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objParams } from '../../../../lib/3/objParams'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        WGSLNodeFunction: typeof WGSLNodeFunction
    }
}

Three.WGSLNodeFunction = WGSLNodeFunction

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeFunction: WGSLNodeFunctionProps,
        }
    }
}

declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeFunction: string[]
    }
}

declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeFunction: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts

consParams.wgslNodeFunction = [
    'source',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    

objParams.wgslNodeFunction = [...objParams.nodeFunction,
].distinct()

export type WGSLNodeFunctionProps = Node<WGSLNodeFunction, typeof WGSLNodeFunction, { source: string }>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeFunction: Partial<{ source: string }>
    }
}

defaults.wgslNodeFunction = {}

