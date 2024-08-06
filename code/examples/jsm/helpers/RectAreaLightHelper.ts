import { Node } from '../../../three-types'
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
export * from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        rectAreaLightHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rectAreaLightHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts

consParams.rectAreaLightHelper = [
    'light',
    'color',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts    

objParams.rectAreaLightHelper = [...objParams.line,
    'light',
    'color',
].distinct()

export type RectAreaLightHelperProps = Node<RectAreaLightHelper, typeof RectAreaLightHelper, { light: RectAreaLight; color?: ColorRepresentation; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rectAreaLightHelper: Partial<{ light: RectAreaLight; color?: ColorRepresentation; }>
    }
}

defaults.rectAreaLightHelper = {}

