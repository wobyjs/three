import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { Node, PromiseMaybe } from '../../../three-types'
import { ObservableMaybe } from 'woby'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
export * from 'three/examples/jsm/loaders/FontLoader.js'
import '../../../src/loaders/Loader'

declare module '../../../lib/3/three'
{
    interface Three {
        FontLoader: typeof FontLoader
    }
}

Three.FontLoader = FontLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fontLoader: FontLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fontLoader: string[]
        font: string[]
        fontData: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        fontLoader: string[]
        font: string[]
        fontData: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts

consParams.fontData = [
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
].distinct()

consParams.fontLoader = [
    'manager',
].distinct()

consParams.font = [
    'data',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts

objParams.fontData = [
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
].distinct()

objParams.fontLoader = [...objParams.loader,
].distinct()

objParams.font = [
    /**
     * @default 'Font'
     */
    'type',
    'data',
].distinct()

export type FontLoaderProps = Node<FontLoader, typeof FontLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fontLoader: { manager?: LoadingManager; }
    }
}

defaults.fontLoader = {}


export type WrapFont<T> = {
    [K in keyof T]: T[K] extends Font ? ObservableMaybe<PromiseMaybe<T[K]>> : T[K]
}
