import { Node } from '../../three-types'
import { EventDispatcher } from 'three/src/core/EventDispatcher.js'
export { EventDispatcher } from 'three/src/core/EventDispatcher.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        eventDispatcher: string[]
        baseEvent: string[]
        event: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        eventDispatcher: string[]
        baseEvent: string[]
        event: string[]
    }
}


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\EventDispatcher.d.ts
/**
 * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
 */

consParams.baseEvent = [
].distinct()
/**
 * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
 */

consParams.event = [
].distinct()
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

consParams.eventDispatcher = [
].distinct()


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\EventDispatcher.d.ts
/**
 * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
 */

objParams.baseEvent = [
].distinct()
/**
 * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
 */

objParams.event = [
].distinct()
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

objParams.eventDispatcher = [
].distinct()

export type EventDispatcherProps = Node<EventDispatcher, typeof EventDispatcher, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        eventDispatcher: Partial<{}>
    }
}

defaults.eventDispatcher = {}

