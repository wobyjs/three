import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js'
export * from 'three/examples/jsm/interactive/SelectionHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        selectionHelper: typeof selectionHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        selectionHelper: typeof _selectionHelper
    }
}



const selectionHelper = ([
    'renderer',
    'cssClassName',
] as const).distinct()
consParams.selectionHelper = selectionHelper



const _selectionHelper = ([
    'element',
    'isDown',
    'enabled',
    'pointBottomRight',
    'pointTopLeft',
    'renderer',
    'startPoint',
] as const).distinct()
objProps.selectionHelper = _selectionHelper

export type SelectionHelperProps = Node<SelectionHelper, typeof SelectionHelper, { renderer: WebGLRenderer; cssClassName: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionHelper: Partial<{ renderer: WebGLRenderer; cssClassName: string; }>
    }
}

defaults.selectionHelper = {}

