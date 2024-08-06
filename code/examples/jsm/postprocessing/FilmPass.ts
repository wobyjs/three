import { Node } from '../../../three-types'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js'
export * from 'three/examples/jsm/postprocessing/FilmPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        filmPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        filmPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts

consParams.filmPass = [
    'intensity',
    'grayscale',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts    

objParams.filmPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type FilmPassProps = Node<FilmPass, typeof FilmPass, { intensity?: number; grayscale?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        filmPass: Partial<{ intensity?: number; grayscale?: boolean; }>
    }
}

defaults.filmPass = {}

