import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
export * from 'three/examples/jsm/controls/TrackballControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        trackballControls: string[]
        trackballControlsEventMap: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        trackballControls: string[]
        trackballControlsEventMap: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts

consParams.trackballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct()

consParams.trackballControls = [
    'object',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts

objParams.trackballControlsEventMap = [
    'change',
    'start',
    'end',
].distinct()

objParams.trackballControls = [
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
].distinct()

export type TrackballControlsProps = Node<TrackballControls, typeof TrackballControls, { object: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        trackballControls: Partial<{ object: Camera; domElement: HTMLElement; }>
    }
}

defaults.trackballControls = {}

