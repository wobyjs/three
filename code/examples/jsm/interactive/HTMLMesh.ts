import { Node } from '../../../three-types'
import { HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh.js'
export * from 'three/examples/jsm/interactive/HTMLMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HTMLMesh: typeof HTMLMesh
    }
}

Three.HTMLMesh = HTMLMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            htmlMesh: HTMLMeshProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        htmlMesh: typeof htmlMesh
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        htmlMesh: typeof _htmlMesh
    }
}



const htmlMesh = ([
    'dom',
] as const).distinct()
consParams.htmlMesh = htmlMesh



const _htmlMesh = ([...objProps.mesh,
] as const).distinct()
objProps.htmlMesh = _htmlMesh

export type HTMLMeshProps = Node<HTMLMesh, typeof HTMLMesh, { dom: HTMLElement }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hTMLMesh: Partial<{ dom: HTMLElement }>
    }
}

defaults.hTMLMesh = {}

