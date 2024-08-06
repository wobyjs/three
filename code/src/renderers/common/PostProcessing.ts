import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import Renderer from 'three/src/renderers/common/Renderer.js'
import PostProcessing from 'three/src/renderers/common/PostProcessing.js'
export { PostProcessing }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PostProcessing: typeof PostProcessing
    }
}

Three.PostProcessing = PostProcessing

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            postProcessing: PostProcessingProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        postProcessing: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        postProcessing: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts

consParams.postProcessing = [
    'renderer',
    'outputNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts

objParams.postProcessing = [
    'renderer',
    'outputNode',
].distinct()

export type PostProcessingProps = Node<PostProcessing, typeof PostProcessing, { renderer: Renderer; outputNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        postProcessing: Partial<{ renderer: Renderer; outputNode?: ENode; }>
    }
}

defaults.postProcessing = {}

