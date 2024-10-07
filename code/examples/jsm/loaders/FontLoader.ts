import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { Node, PromiseMaybe } from '../../../three-types'
import { ObservableMaybe } from 'woby'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        fontLoader: typeof fontLoader
        font: typeof font
        fontData: typeof fontData
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fontLoader: typeof _fontLoader
        font: typeof _font
        fontData: typeof _fontData
    }
}



const fontData = ([
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
] as const).distinct()
consParams.fontData = fontData

const fontLoader = ([
    'manager',
] as const).distinct()
consParams.fontLoader = fontLoader

const font = ([
    'data',
] as const).distinct()
consParams.font = font



const _fontData = ([
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
] as const).distinct()
objProps.fontData = _fontData

const _fontLoader = ([...objProps.loader,
] as const).distinct()
objProps.fontLoader = _fontLoader

const _font = ([
    /**
     * @default 'Font'
     */
    'type',
    'data',
] as const).distinct()
objProps.font = _font

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
