import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
export * from 'three/examples/jsm/controls/TrackballControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TrackballControls: typeof TrackballControls
    }
}

Three.TrackballControls = TrackballControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            trackballControls: TrackballControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        trackballControls: typeof trackballControls
        trackballControlsEventMap: typeof trackballControlsEventMap
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        trackballControls: typeof _trackballControls
        trackballControlsEventMap: typeof _trackballControlsEventMap
    }
}



const trackballControlsEventMap = ([
    'change',
    'start',
    'end',
] as const).distinct()
consParams.trackballControlsEventMap = trackballControlsEventMap

const trackballControls = ([
    'object',
    'domElement',
] as const).distinct()
consParams.trackballControls = trackballControls



const _trackballControlsEventMap = ([
    'change',
    'start',
    'end',
] as const).distinct()
objProps.trackballControlsEventMap = _trackballControlsEventMap

const _trackballControls = ([
    'object',
    'domElement',
    // API
    'enabled',
    'screen',
    'rotateSpeed',
    'zoomSpeed',
    'panSpeed',
    'noRotate',
    'noZoom',
    'noPan',
    'noRoll',
    'staticMoving',
    'dynamicDampingFactor',
    'minDistance',
    'maxDistance',
    'minZoom',
    'maxZoom',
    'keys',
    'mouseButtons',
    'target',
    'position0',
    'target0',
    'up0',
] as const).distinct()
objProps.trackballControls = _trackballControls

export type TrackballControlsProps = Node<TrackballControls, typeof TrackballControls, { object: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        trackballControls: Partial<{ object: Camera; domElement: HTMLElement; }>
    }
}

defaults.trackballControls = {}

