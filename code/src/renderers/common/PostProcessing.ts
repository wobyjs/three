import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import Renderer from 'three/src/renderers/common/Renderer.js'
import PostProcessing from 'three/src/renderers/common/PostProcessing.js'
export { PostProcessing }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        postProcessing: typeof postProcessing
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        postProcessing: typeof _postProcessing
    }
}



const postProcessing = ([
    'renderer',
    'outputNode',
] as const).distinct()
consParams.postProcessing = postProcessing



const _postProcessing = ([
    'renderer',
    'outputNode',
] as const).distinct()
objProps.postProcessing = _postProcessing

export type PostProcessingProps = Node<PostProcessing, typeof PostProcessing, { renderer: Renderer; outputNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        postProcessing: Partial<{ renderer: Renderer; outputNode?: ENode; }>
    }
}

defaults.postProcessing = {}

