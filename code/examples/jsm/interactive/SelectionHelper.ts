import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js'
export * from 'three/examples/jsm/interactive/SelectionHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SelectionHelper: typeof SelectionHelper
    }
}

Three.SelectionHelper = SelectionHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            selectionHelper: SelectionHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        selectionHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        selectionHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts

consParams.selectionHelper = [
    'renderer',
    'cssClassName',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts

objParams.selectionHelper = [
    'element',
    'isDown',
    'enabled',
    'pointBottomRight',
    'pointTopLeft',
    'renderer',
    'startPoint',
].distinct()

export type SelectionHelperProps = Node<SelectionHelper, typeof SelectionHelper, { renderer: WebGLRenderer; cssClassName: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionHelper: Partial<{ renderer: WebGLRenderer; cssClassName: string; }>
    }
}

defaults.selectionHelper = {}

