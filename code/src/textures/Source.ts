import { Node } from '../../three-types'
import { Source } from 'three/src/textures/Source.js'
export { Source } from 'three/src/textures/Source.js'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            source: SourceProps,
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        source: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        source: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Source.d.ts
/**
 * Represents the data {@link Source} of a texture.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js}
 */

consParams.source = [
    /**
     * Create a new instance of {@link Source}
     * @param data The data definition of a texture. Default `null`
     */
    'data',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Source.d.ts
/**
 * Represents the data {@link Source} of a texture.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
 */

objParams.source = [
    /**
     * The actual data of a texture.
     * @remarks The type of this property depends on the texture that uses this instance.
     */
    'data',
    /**
     * This property is only relevant when {@link .needsUpdate} is set to `true` and provides more control on how
     * texture data should be processed.
     * When `dataReady` is set to `false`, the engine performs the memory allocation (if necessary) but does not
     * transfer the data into the Gpu memory.
     * @default true
     */
    'dataReady',
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    'version',
].distinct()

export type SourceProps = Node<Source, typeof Source, { data: any; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        source: Partial<{ data: any; }>
    }
}

defaults.source = {}

