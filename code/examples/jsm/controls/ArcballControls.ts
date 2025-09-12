import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js'
export * from 'three/examples/jsm/controls/ArcballControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ArcballControls: typeof ArcballControls
    }
}

Three.ArcballControls = ArcballControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arcballControls: ArcballControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        arcballControls: typeof arcballControls
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        arcballControls: typeof _arcballControls
        arcballControlsEventMap: typeof _arcballControlsEventMap
    }
}

const arcballControls = ([
    'camera',
    'domElement',
    'scene',
] as const).distinct()
consParams.arcballControls = arcballControls


const _arcballControlsEventMap = ([
    'change',
    'start',
    'end',
] as const).distinct()
objProps.arcballControlsEventMap = _arcballControlsEventMap

/**
 * Arcball controls allow the camera to be controlled by a virtual trackball with full touch support and advanced
 * navigation functionality.
 */
const _arcballControls = ([..._arcballControlsEventMap,
    /**
     * The scene rendered by the camera.
     */
    'scene',
    /**
     * The size of the gizmo relative to the screen width and height. Default is 0.67.
     */
    'radiusFactor',
    /**
     * Duration time of focus animation.
     */
    'focusAnimationTime',
    /**
     * If true, camera's near and far values will be adjusted every time zoom is performed trying to mantain the same
     * visible portion given by initial near and far values ( {@link PerspectiveCamera} only ). Default is false.
     */
    'adjustNearFar',
    /**
     * The scaling factor used when performing zoom operation.
     */
    'scaleFactor',
    /**
     * The damping inertia used if [page:.enableAnimations] is set to true.
     */
    'dampingFactor',
    /**
     * Maximum angular velocity allowed on rotation animation start.
     */
    'wMax',
    /**
     * Set to true to enable animations for rotation (damping) and focus operation. Default is true.
     */
    'enableAnimations',
    /**
     * When set to true, a grid will appear when panning operation is being performed (desktop interaction only). Default is false.
     */
    'enableGrid',
    /**
     * Set to true to make zoom become cursor centered.
     */
    'cursorZoom',
    /**
     * Speed of rotation. Default is 1.
     */
    'rotateSpeed',
    /**
     * Enable or disable camera panning. Default is true.
     */
    'enablePan',
    /**
     * Enable or disable camera rotation. Default is true.
     */
    'enableRotate',
    /**
     * Enable or disable zooming of the camera.
     */
    'enableZoom',
    /**
     * How far you can dolly in ( {@link PerspectiveCamera} only ). Default is 0.
     */
    'minDistance',
    /**
     * How far you can dolly out ( {@link PerspectiveCamera} only ). Default is Infinity.
     */
    'maxDistance',
    /**
     * How far you can zoom in ( {@link OrthographicCamera} only ). Default is 0.
     */
    'minZoom',
    /**
     * How far you can zoom out ( {@link OrthographicCamera} only ). Default is Infinity.
     */
    'maxZoom',
] as const).distinct()
objProps.arcballControls = _arcballControls

export type ArcballControlsProps = Node<ArcballControls, typeof ArcballControls, { camera: Camera; domElement: E; scene?: Scene | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        arcballControls: Partial<{ camera: Camera; domElement: E; scene?: Scene | null }>
    }
}

defaults.arcballControls = {}

