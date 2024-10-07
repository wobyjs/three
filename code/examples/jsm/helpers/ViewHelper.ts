import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js'
export * from 'three/examples/jsm/helpers/ViewHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewHelper: typeof ViewHelper
    }
}

Three.ViewHelper = ViewHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewHelper: ViewHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewHelper: typeof viewHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewHelper: typeof _viewHelper
    }
}



const viewHelper = ([
    'camera',
    'domElement',
] as const).distinct()
consParams.viewHelper = viewHelper



const _viewHelper = ([...objProps.object3d,
    'animating',
    'center',
] as const).distinct()
objProps.viewHelper = _viewHelper

export type ViewHelperProps = Node<ViewHelper, typeof ViewHelper, { camera: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewHelper: Partial<{ camera: Camera; domElement: HTMLElement; }>
    }
}

defaults.viewHelper = {}

