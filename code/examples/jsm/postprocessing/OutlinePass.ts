import { Node, Vector2 } from '../../../three-types'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
export * from 'three/examples/jsm/postprocessing/OutlinePass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        OutlinePass: typeof OutlinePass
    }
}

Three.OutlinePass = OutlinePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outlinePass: OutlinePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outlinePass: typeof outlinePass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        outlinePass: typeof _outlinePass
    }
}



const outlinePass = ([
    'resolution',
    'scene',
    'camera',
    'selectedObjects',
] as const).distinct()
consParams.outlinePass = outlinePass



const _outlinePass = ([...objProps.pass,
    'renderScene',
    'renderCamera',
    'selectedObjects',
    'visibleEdgeColor',
    'hiddenEdgeColor',
    'edgeGlow',
    'usePatternTexture',
    'edgeThickness',
    'edgeStrength',
    'downSampleRatio',
    'pulsePeriod',
    'resolution',
    'patternTexture',
    'maskBufferMaterial',
    'renderTargetMaskBuffer',
    'depthMaterial',
    'prepareMaskMaterial',
    'renderTargetDepthBuffer',
    'renderTargetMaskDownSampleBuffer',
    'renderTargetBlurBuffer1',
    'renderTargetBlurBuffer2',
    'edgeDetectionMaterial',
    'renderTargetEdgeBuffer1',
    'renderTargetEdgeBuffer2',
    'separableBlurMaterial1',
    'separableBlurMaterial2',
    'overlayMaterial',
    'copyUniforms',
    'materialCopy',
    'oldClearColor',
    'oldClearAlpha',
    'fsQuad',
    'tempPulseColor1',
    'tempPulseColor2',
    'textureMatrix',
] as const).distinct()
objProps.outlinePass = _outlinePass

export type OutlinePassProps = Node<OutlinePass, typeof OutlinePass, { resolution: Vector2; scene: Scene; camera: Camera; selectedObjects?: Object3D[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outlinePass: Partial<{ resolution: Vector2; scene: Scene; camera: Camera; selectedObjects?: Object3D[]; }>
    }
}

defaults.outlinePass = {}

