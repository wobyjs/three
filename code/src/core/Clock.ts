import { Node } from '../../three-types'
import { Clock } from 'three/src/core/Clock.js'
export { Clock } from 'three/src/core/Clock.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Clock: typeof Clock
    }
}

Three.Clock = Clock

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clock: ClockProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        clock: typeof clock
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        clock: typeof _clock
    }
}


/**
 * Object for keeping track of time
 * @remarks
 * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now.now} if it is available,
 * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now.now}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js}
 */

const clock = ([
    /**
     * Create a new instance of {@link THREE.Clock}
     * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
     */
    'autoStart',
] as const).distinct()
consParams.clock = clock


/**
 * Object for keeping track of time
 * @remarks
 * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
 * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
 */

const _clock = ([
    /**
     * If set, starts the clock automatically when {@link getDelta | .getDelta()} is called for the first time.
     * @defaultValue `true`
     */
    'autoStart',
    /**
     * Holds the time at which the clock's {@link start | .start()} method was last called.
     * @defaultValue `0`
     */
    'startTime',
    /**
     * Holds the time at which the clock's {@link start | .start() {@link getElapsedTime | .getElapsedTime()} or {@link getDelta | .getDelta()} methods were last called.
     * @defaultValue `0`
     */
    'oldTime',
    /**
     * Keeps track of the total time that the clock has been running.
     * @defaultValue `0`
     */
    'elapsedTime',
    /**
     * Whether the clock is running or not.
     * @defaultValue `false`
     */
    'running',
] as const).distinct()
objProps.clock = _clock

export type ClockProps = Node<Clock, typeof Clock, { autoStart?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        clock: Partial<{ autoStart?: boolean; }>
    }
}

defaults.clock = { autoStart: true }