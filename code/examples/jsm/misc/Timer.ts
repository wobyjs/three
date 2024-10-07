import { Node } from '../../../three-types'
import { Timer } from 'three/examples/jsm/misc/Timer.js'
export * from 'three/examples/jsm/misc/Timer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Timer: typeof Timer
    }
}

Three.Timer = Timer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            timer: TimerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        timer: typeof timer
        fixedTimer: typeof fixedTimer
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        timer: typeof _timer
        fixedTimer: typeof _fixedTimer
    }
}


/**
 * This class is an alternative to {@link THREE.Clock} with a different API design and behavior
 * The goal is to avoid the conceptual flaws that became apparent in {@link THREE.Clock} over time.
 *
 * - {@link Timer} has an {@link .update()} method that updates its internal state. That makes it possible to call
 *   {@link .getDelta()} and {@link .getElapsed()} multiple times per simulation step without getting different values.
 * - The class uses the Page Visibility API to avoid large time delta values when the app is inactive (e.g. tab switched
 *   or browser hidden).
 *
 * @example
 * const timer = new Timer(,
 *
 * function animate(timestamp) {
 *   requestAnimationFrame(animate,
 *   // timestamp is optional
 *   timer.update(timestamp,
 *   const delta = timer.getDelta(,
 *   // do something with delta
 *   renderer.render(scene, camera,
 * }
 *
 * @see https://threejs.org/examples/#webgl_morphtargets_sphere
 */

const timer = ([
] as const).distinct()
consParams.timer = timer

/**
 * A timer that uses a fixed delta.
 */

const fixedTimer = ([
    /**
     * @param fps The desired fixed delta expressed in frames per second.
     */
    'fps',
] as const).distinct()
consParams.fixedTimer = fixedTimer


/**
 * This class is an alternative to {@link THREE.Clock} with a different API design and behavior
 * The goal is to avoid the conceptual flaws that became apparent in {@link THREE.Clock} over time.
 *
 * - {@link Timer} has an {@link .update()} method that updates its internal state. That makes it possible to call
 *   {@link .getDelta()} and {@link .getElapsed()} multiple times per simulation step without getting different values.
 * - The class uses the Page Visibility API to avoid large time delta values when the app is inactive (e.g. tab switched
 *   or browser hidden).
 *
 * @example
 * const timer = new Timer()
 *
 * function animate(timestamp) {
 *   requestAnimationFrame(animate)
 *   // timestamp is optional
 *   timer.update(timestamp)
 *   const delta = timer.getDelta()
 *   // do something with delta
 *   renderer.render(scene, camera)
 * }
 *
 * @see https://threejs.org/examples/#webgl_morphtargets_sphere
 */

const _timer = ([
] as const).distinct()
objProps.timer = _timer

/**
 * A timer that uses a fixed delta.
 */

const _fixedTimer = ([...objProps.timer,
] as const).distinct()
objProps.fixedTimer = _fixedTimer

export type TimerProps = Node<Timer, typeof Timer, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        timer: {}
    }
}

defaults.timer = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        timer: {}
    }
}

defaults.timer = {}
