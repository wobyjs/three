import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export * from 'three/examples/jsm/controls/OrbitControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OrbitControls: typeof OrbitControls
    }
}

//@ts-ignore
Three.OrbitControls = OrbitControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: OrbitControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        orbitControls: typeof orbitControls
        orbitControlsEventMap: typeof orbitControlsEventMap
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        orbitControls: typeof _orbitControls
        orbitControlsEventMap: typeof _orbitControlsEventMap
    }
}



const orbitControlsEventMap = ([
    'change',
    'start',
    'end',
] as const).distinct()
consParams.orbitControlsEventMap = orbitControlsEventMap

/**
 * Orbit controls allow the camera to orbit around a target.
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */

const orbitControls = ([
    /**
  * The camera being controlled.
  */
    'camera',
    /**
     * The HTMLElement used to listen for mouse / touch events.
     * This must be passed in the constructor
     * changing it here will not set up new event listeners.
     */
    'domElement',
] as const).distinct()
consParams.orbitControls = orbitControls



const _orbitControlsEventMap = ([
    'change',
    'start',
    'end',
] as const).distinct()
objProps.orbitControlsEventMap = _orbitControlsEventMap

/**
 * Orbit controls allow the camera to orbit around a target.
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */

const _orbitControls = ([
    /**
     * The camera being controlled.
     */
    // 'camera',
    /**
     * The HTMLElement used to listen for mouse / touch events.
     * This must be passed in the constructor
     * changing it here will not set up new event listeners.
     */
    'domElement',
    /**
     * When set to `false`, the controls will not respond to user input.
     * @default true
     */
    'enabled',
    /**
     * The focus point of the controls, the .object orbits around this.
     * It can be updated manually at any point to change the focus
     * of the controls.
     */
    'target',
    /** @deprecated */
    'center',
    /**
     * The focus point of the {@link .minTargetRadius} and {@link .maxTargetRadius} limits. It can be updated manually
     * at any point to change the center of interest for the {@link .target}.
     */
    'cursor',
    /**
     * How far you can dolly in ( PerspectiveCamera only ).
     * @default 0
     */
    'minDistance',
    /**
     * How far you can dolly out ( PerspectiveCamera only ).
     * @default Infinity
     */
    'maxDistance',
    /**
     * How far you can zoom in ( OrthographicCamera only ).
     * @default 0
     */
    'minZoom',
    /**
     * How far you can zoom out ( OrthographicCamera only ).
     * @default Infinity
     */
    'maxZoom',
    /**
     * How close you can get the target to the 3d {@link .cursor}.
     * @default 0
     */
    'minTargetRadius',
    /**
     * How far you can move the target from the 3d {@link .cursor}.
     * @default Infinity
     */
    'maxTargetRadius',
    /**
     * How far you can orbit vertically, lower limit.
     * Range is 0 to Math.PI radians.
     * @default 0
     */
    'minPolarAngle',
    /**
     * How far you can orbit vertically, upper limit.
     * Range is 0 to Math.PI radians.
     * @default Math.PI.
     */
    'maxPolarAngle',
    /**
     * How far you can orbit horizontally, lower limit.
     * If set, the interval [ min, max ] 
     * must be a sub-interval of [ - 2 PI, 2 PI ].distinct()
 
     * with ( max - min < 2 PI ).
     * @default Infinity
     */
    'minAzimuthAngle',
    /**
     * How far you can orbit horizontally, upper limit.
     * If set, the interval [ min, max ].distinct()
 must be a sub-interval
     * of [ - 2 PI, 2 PI ].distinct()
 with ( max - min < 2 PI ).
     * @default Infinity
     */
    'maxAzimuthAngle',
    /**
     * Set to true to enable damping (inertia), which can
     * be used to give a sense of weight to the controls.
     * Note that if this is enabled, you must call
     * .update () in your animation loop.
     * @default false
     */
    'enableDamping',
    /**
     * The damping inertia used if .enableDamping is set to true.
     * Note that for this to work,
     * you must call .update () in your animation loop.
     * @default 0.05
     */
    'dampingFactor',
    /**
     * Enable or disable zooming (dollying) of the camera.
     * @default true
     */
    'enableZoom',
    /**
     * Speed of zooming / dollying.
     * @default 1
     */
    'zoomSpeed',
    /**
     * Setting this property to `true` allows to zoom to the cursor's position.
     * @default false
     */
    'zoomToCursor',
    /**
     * Enable or disable horizontal and
     * vertical rotation of the camera.
     * Note that it is possible to disable a single axis
     * by setting the min and max of the polar angle or
     * azimuth angle to the same value, which will cause
     * the vertical or horizontal rotation to be fixed at that value.
     * @default true
     */
    'enableRotate',
    /**
     * Speed of rotation.
     * @default 1
     */
    'rotateSpeed',
    /**
     * Enable or disable camera panning.
     * @default true
     */
    'enablePan',
    /**
     * Speed of panning.
     * @default 1
     */
    'panSpeed',
    /**
     * Defines how the camera's position is translated when panning.
     * If true, the camera pans in screen space. Otherwise,
     * the camera pans in the plane orthogonal to the camera's
     * up direction. Default is true for OrbitControls; false for MapControls.
     * @default true
     */
    'screenSpacePanning',
    /**
     * How fast to pan the camera when the keyboard is used.
     * Default is 7.0 pixels per keypress.
     * @default 7
     */
    'keyPanSpeed',
    /**
     * Set to true to automatically rotate around the target.
     * Note that if this is enabled, you must call .update() in your animation loop. If you want the auto-rotate speed
     * to be independent of the frame rate (the refresh rate of the display), you must pass the time `deltaTime`, in
     * seconds, to .update().
     */
    'autoRotate',
    /**
     * How fast to rotate around the target if .autoRotate is true.
     * Default is 2.0, which equates to 30 seconds per orbit at 60fps.
     * Note that if .autoRotate is enabled, you must call
     * .update () in your animation loop.
     * @default 2
     */
    'autoRotateSpeed',
    /**
     * This object contains references to the keycodes for controlling
     * camera panning. Default is the 4 arrow keys.
     */
    'keys',
    /**
     * This object contains references to the mouse actions used
     * by the controls.
     */
    'mouseButtons',
    /**
     * This object contains references to the touch actions used by
     * the controls.
     */
    'touches',
    /**
     * Used internally by the .saveState and .reset methods.
     */
    'target0',
    /**
     * Used internally by the .saveState and .reset methods.
     */
    'position0',
    /**
     * Used internally by the .saveState and .reset methods.
     */
    'zoom0',
] as const).distinct()
objProps.orbitControls = _orbitControls

export type OrbitControlsProps = Node<OrbitControls, typeof OrbitControls, { camera: Camera; domElement: HTMLElement }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        //@ts-ignore
        orbitControls: Partial<{ camera: Camera; domElement: E }>
    }
}

defaults.orbitControls = {}
