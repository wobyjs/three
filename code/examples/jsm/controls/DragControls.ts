import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
export * from 'three/examples/jsm/controls/DragControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DragControls: typeof DragControls
    }
}

Three.DragControls = DragControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dragControls: DragControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        dragControls: typeof dragControls
        dragControlsEventMap: typeof dragControlsEventMap
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        dragControls: typeof _dragControls
        dragControlsEventMap: typeof _dragControlsEventMap
    }
}



const dragControlsEventMap = ([
    /**
     * Fires when the pointer is moved onto a 3d object, or onto one of its children.
     */
    'hoveron',
    /**
     * Fires when the pointer is moved out of a 3d object.
     */
    'hoveroff',
    /**
     * Fires when the user starts to drag a 3d object.
     */
    'dragstart',
    /**
     * Fires when the user drags a 3d object.
     */
    'drag',
    /**
     * Fires when the user has finished dragging a 3d object.
     */
    'dragend',
] as const).distinct()
consParams.dragControlsEventMap = dragControlsEventMap


const dragControls = ([
    /**
     * Creates a new instance of DragControls.
     * @param objects An array of draggable 3d objects.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners.
     */
    'objects',
    'camera',
    'domElement',
] as const).distinct()
consParams.dragControls = dragControls


const _dragControlsEventMap = ([
    /**
     * Fires when the pointer is moved onto a 3d object, or onto one of its children.
     */
    'hoveron',
    /**
     * Fires when the pointer is moved out of a 3d object.
     */
    'hoveroff',
    /**
     * Fires when the user starts to drag a 3d object.
     */
    'dragstart',
    /**
     * Fires when the user drags a 3d object.
     */
    'drag',
    /**
     * Fires when the user has finished dragging a 3d object.
     */
    'dragend',
] as const).distinct()
objProps.dragControlsEventMap = _dragControlsEventMap


const _dragControls = ([
    /**
     * Creates a new instance of DragControls.
     * @param objects An array of draggable 3d objects.
     * @param camera The camera of the rendered scene.
     * @param domElement The HTML element used for event listeners.
     */
    /**
     * Whether or not the controls are enabled.
     */
    'enabled',
    /**
     * Whether children of draggable objects can be dragged independently from their parent. Default is `true`.
     */
    'recursive',
    /**
     * This option only works if the {@link .objects} array contains a single draggable group object. If set to `true`,
     * {@link DragControls} does not transform individual objects but the entire group. Default is `false`.
     */
    'transformGroup',
    /**
     * The current transformation mode. Possible values are `translate`, and `rotate`. Default is `translate`.
     */
    'mode',
    /**
     * The speed at which the object will rotate when dragged in `rotate` mode. The higher the number the faster the
     * rotation. Default is `1`.
     */
    'rotateSpeed',
    /**
     * Adds the event listeners of the controls.
     */
    'activate',
    /**
     * Removes the event listeners of the controls.
     */
    'deactivate',
    /**
     * Should be called if the controls is no longer required.
     */
    'dispose',
    /**
     * Returns the array of draggable objects.
     */
    'getObjects',
    /**
     * Returns the internal {@link Raycaster} instance that is used for intersection tests.
     */
    'getRaycaster',
] as const).distinct()
objProps.dragControls = _dragControls

export type DragControlsProps = Node<DragControls, typeof DragControls, { objects: Object3D[]; camera: Camera; domElement?: HTMLElement }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dragControls: Partial<{ objects: Object3D[]; camera: Camera; domElement?: HTMLElement }>
    }
}

defaults.dragControls = {}

