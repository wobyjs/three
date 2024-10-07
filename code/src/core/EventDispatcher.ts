import { Node } from '../../three-types'
import { EventDispatcher } from 'three/src/core/EventDispatcher.js'
export { EventDispatcher } from 'three/src/core/EventDispatcher.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        EventDispatcher: typeof EventDispatcher
    }
}

Three.EventDispatcher = EventDispatcher

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            eventDispatcher: EventDispatcherProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        eventDispatcher: typeof eventDispatcher
        baseEvent: typeof baseEvent
        event: typeof event
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        eventDispatcher: typeof _eventDispatcher
        baseEvent: typeof _baseEvent
        event: typeof _event
    }
}



/**
 * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
 */

const baseEvent = ([
] as const).distinct()
consParams.baseEvent = baseEvent
/**
 * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
 */

const event = ([
] as const).distinct()
consParams.event = event
/**
 * JavaScript events for custom objects
 * @example
 * ```typescript
 * // Adding events to a custom object
 * get Car() { return [
 *   start() {
 * this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } ,
 *   }
 * 
 * // Using events with the custom object
 * const car = new Car(,
 * car.addEventListener( 'start',
( event ) => {
 *   alert( event.message ,
 * } ,
 * car.start(,
 * ```
 * @see {@link https://github.com/mrdoob/eventdispatcher.js EventDispatcher on GitHub}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js}
 */

const eventDispatcher = ([
] as const).distinct()
consParams.eventDispatcher = eventDispatcher



/**
 * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
 */

const _baseEvent = ([
] as const).distinct()
objProps.baseEvent = _baseEvent
/**
 * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
 */

const _event = ([
] as const).distinct()
objProps.event = _event
/**
 * JavaScript events for custom objects
 * @example
 * ```typescript
 * // Adding events to a custom object
//@ts-ignore
 * get Car() {return [...this.eventDispatcher,
 *   start() {
 *     this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } )
 *   }
 * }
 * // Using events with the custom object
 * const car = new Car()
 * car.addEventListener( 'start', ( event ) => {
 *   alert( event.message )
 * } )
 * car.start()
 * ```
 * @see {@link https://github.com/mrdoob/eventdispatcher.js | mrdoob EventDispatcher on GitHub}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js | Source}
 */

const _eventDispatcher = ([
] as const).distinct()
objProps.eventDispatcher = _eventDispatcher

export type EventDispatcherProps = Node<EventDispatcher, typeof EventDispatcher, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        eventDispatcher: Partial<{}>
    }
}

defaults.eventDispatcher = {}

