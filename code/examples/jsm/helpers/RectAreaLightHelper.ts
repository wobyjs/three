import { Node } from '../../../three-types'
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
export * from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RectAreaLightHelper: typeof RectAreaLightHelper
    }
}

Three.RectAreaLightHelper = RectAreaLightHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rectAreaLightHelper: RectAreaLightHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rectAreaLightHelper: typeof rectAreaLightHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rectAreaLightHelper: typeof _rectAreaLightHelper
    }
}



const rectAreaLightHelper = ([
    'light',
    'color',
] as const).distinct()
consParams.rectAreaLightHelper = rectAreaLightHelper



const _rectAreaLightHelper = ([...objProps.line,
    'light',
    'color',
] as const).distinct()
objProps.rectAreaLightHelper = _rectAreaLightHelper

export type RectAreaLightHelperProps = Node<RectAreaLightHelper, typeof RectAreaLightHelper, { light: RectAreaLight; color?: ColorRepresentation; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rectAreaLightHelper: Partial<{ light: RectAreaLight; color?: ColorRepresentation; }>
    }
}

defaults.rectAreaLightHelper = {}

