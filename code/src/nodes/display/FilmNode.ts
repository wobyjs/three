import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import FilmNode from 'three/src/nodes/display/FilmNode.js'
export { FilmNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        FilmNode: typeof FilmNode
    }
}

Three.FilmNode = FilmNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            filmNode: FilmNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        filmNode: typeof filmNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        filmNode: typeof _filmNode
    }
}


const filmNode = ([
    'inputNode',
    'intensityNode',
    'uvNode',
] as const).distinct()
consParams.filmNode = filmNode

const _filmNode = ([...objProps.tempNode,
    'inputNode',
    'intensityNode',
    'uvNode',
] as const).distinct()
objProps.filmNode = _filmNode

export type FilmNodeProps = Node<FilmNode, typeof FilmNode, { inputNode: ENode, intensityNode?: ENode | null, uvNode?: ENode | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        filmNode: Partial<{ inputNode: ENode, intensityNode?: ENode | null, uvNode?: ENode | null }>
    }
}

defaults.filmNode = {}


