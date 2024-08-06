import { Node } from '../../../three-types'
import { HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh.js'
export * from 'three/examples/jsm/interactive/HTMLMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        htmlMesh: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        htmlMesh: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts

consParams.htmlMesh = [
    'dom',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts    

objParams.htmlMesh = [...objParams.mesh,
].distinct()

export type HTMLMeshProps = Node<HTMLMesh, typeof HTMLMesh, { dom: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hTMLMesh: Partial<{ dom: HTMLElement; }>
    }
}

defaults.hTMLMesh = {}

