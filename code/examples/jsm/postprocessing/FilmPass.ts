import { Node } from '../../../three-types'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js'
export * from 'three/examples/jsm/postprocessing/FilmPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        FilmPass: typeof FilmPass
    }
}

Three.FilmPass = FilmPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            filmPass: FilmPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        filmPass: typeof filmPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        filmPass: typeof _filmPass
    }
}



const filmPass = ([
    'intensity',
    'grayscale',
] as const).distinct()
consParams.filmPass = filmPass



const _filmPass = ([...objProps.pass,
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.filmPass = _filmPass

export type FilmPassProps = Node<FilmPass, typeof FilmPass, { intensity?: number; grayscale?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        filmPass: Partial<{ intensity?: number; grayscale?: boolean; }>
    }
}

defaults.filmPass = {}

