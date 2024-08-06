import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass.js'
export * from 'three/examples/jsm/postprocessing/RenderTransitionPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        renderTransitionPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        renderTransitionPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts

consParams.renderTransitionPass = [
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts    

objParams.renderTransitionPass = [...objParams.pass,
    'material',
    'fsQuad',
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
    'renderTargetA',
    'renderTargetB',
].distinct()

export type RenderTransitionPassProps = Node<RenderTransitionPass, typeof RenderTransitionPass, { sceneA: Object3D; cameraA: Camera; sceneB: Object3D; cameraB: Camera; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderTransitionPass: Partial<{ sceneA: Object3D; cameraA: Camera; sceneB: Object3D; cameraB: Camera; }>
    }
}

defaults.renderTransitionPass = {}

