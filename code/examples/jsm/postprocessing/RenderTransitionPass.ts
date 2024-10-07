import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass.js'
export * from 'three/examples/jsm/postprocessing/RenderTransitionPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        RenderTransitionPass: typeof RenderTransitionPass
    }
}

Three.RenderTransitionPass = RenderTransitionPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderTransitionPass: RenderTransitionPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        renderTransitionPass: typeof renderTransitionPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        renderTransitionPass: typeof _renderTransitionPass
    }
}



const renderTransitionPass = ([
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
] as const).distinct()
consParams.renderTransitionPass = renderTransitionPass



const _renderTransitionPass = ([...objProps.pass,
    'material',
    'fsQuad',
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
    'renderTargetA',
    'renderTargetB',
] as const).distinct()
objProps.renderTransitionPass = _renderTransitionPass

export type RenderTransitionPassProps = Node<RenderTransitionPass, typeof RenderTransitionPass, { sceneA: Object3D; cameraA: Camera; sceneB: Object3D; cameraB: Camera; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderTransitionPass: Partial<{ sceneA: Object3D; cameraA: Camera; sceneB: Object3D; cameraB: Camera; }>
    }
}

defaults.renderTransitionPass = {}

