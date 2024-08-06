import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { MapControls } from 'three/examples/jsm/controls/MapControls.js'
export * from 'three/examples/jsm/controls/MapControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MapControls: typeof MapControls
    }
}

Three.MapControls = MapControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mapControls: MapControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mapControls: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mapControls: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\MapControls.d.ts
/**
 * MapControls performs orbiting, dollying (zooming), and panning.
 * Unlike TrackballControls, it maintains the "up" direction
 * object.up (+Y by default).
 *
 *orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch:
 *two-finger rotate
 *zoom - middle mouse, or mousewheel / touch-finger spread or squish
 *pan - left mouse, or arrow keys / touch-finger move
 *
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */

consParams.mapControls = [
    'object',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\MapControls.d.ts
/**
 * MapControls performs orbiting, dollying (zooming), and panning.
 * Unlike TrackballControls, it maintains the "up" direction
 * object.up (+Y by default).
 *
 *    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch:
 *    two-finger rotate
 *    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
 *    Pan - left mouse, or arrow keys / touch: one-finger move
 *
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */

objParams.mapControls = [...objParams.orbitControls,
].distinct()

export type MapControlsProps = Node<MapControls, typeof MapControls, { object: Camera; domElement?: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mapControls: Partial<{ object: Camera; domElement?: HTMLElement; }>
    }
}

defaults.mapControls = {}

