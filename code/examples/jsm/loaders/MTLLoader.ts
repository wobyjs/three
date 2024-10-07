import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
export * from 'three/examples/jsm/loaders/MTLLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MTLLoader: typeof MTLLoader
    }
}

Three.MTLLoader = MTLLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mtlLoader: MTLLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mtlLoader: typeof mtlLoader
        materialCreatorOptions: typeof materialCreatorOptions
        materialInfo: typeof materialInfo
        texParams: typeof texParams
        materialCreator: typeof materialCreator
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mtlLoader: typeof _mtlLoader
        materialCreatorOptions: typeof _materialCreatorOptions
        materialInfo: typeof _materialInfo
        texParams: typeof _texParams
        materialCreator: typeof _materialCreator
    }
}



const materialCreatorOptions = ([
    /**
     * side side to apply the material
     * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     */
    'side',
    /*
     * wrap type of wrapping to apply for textures
     * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     */
    'wrap',
    /*
     * normalizeRGB need to be normalized to 0-1 from 0-255
     * Default, assumed to be already normalized
     */
    'normalizeRGB',
    /*
     * ignoreZeroRGBs values of RGBs (Ka,Kd,Ks) that are all 0's
     * Default
     */
    'ignoreZeroRGBs',
    /*
     * invertTrProperty values 1 of Tr field for fully opaque. This option is useful for obj
     * exported from 3ds MAX, vcglib or meshlab.
     * Default
     */
    'invertTrProperty',
] as const).distinct()
consParams.materialCreatorOptions = materialCreatorOptions


const mtlLoader = ([
    'manager',
] as const).distinct()
consParams.mtlLoader = mtlLoader


const materialInfo = ([
    'ks',
    'kd',
    'ke',
    'map_kd',
    'map_ks',
    'map_ke',
    'norm',
    'map_bump',
    'bump',
    'map_d',
    'ns',
    'd',
    'tr',
] as const).distinct()
consParams.materialInfo = materialInfo


const texParams = ([
    'scale',
    'offset',
    'url',
] as const).distinct()
consParams.texParams = texParams


const materialCreator = ([
    'baseUrl',
    'options',
] as const).distinct()
consParams.materialCreator = materialCreator



const _materialCreatorOptions = ([
    /**
     * side: Which side to apply the material
     * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     */
    'side',
    /*
     * wrap: What type of wrapping to apply for textures
     * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     */
    'wrap',
    /*
     * normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
     * Default: false, assumed to be already normalized
     */
    'normalizeRGB',
    /*
     * ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
     * Default: false
     */
    'ignoreZeroRGBs',
    /*
     * invertTrProperty: Use values 1 of Tr field for fully opaque. This option is useful for obj
     * exported from 3ds MAX, vcglib or meshlab.
     * Default: false
     */
    'invertTrProperty',
] as const).distinct()
objProps.materialCreatorOptions = _materialCreatorOptions


const _mtlLoader = ([...objProps.loader,
    'materialOptions',
] as const).distinct()
objProps.mtlLoader = _mtlLoader


const _materialInfo = ([
    'ks',
    'kd',
    'ke',
    'map_kd',
    'map_ks',
    'map_ke',
    'norm',
    'map_bump',
    'bump',
    'map_d',
    'ns',
    'd',
    'tr',
] as const).distinct()
objProps.materialInfo = _materialInfo


const _texParams = ([
    'scale',
    'offset',
    'url',
] as const).distinct()
objProps.texParams = _texParams


const _materialCreator = ([
    'baseUrl',
    'options',
    'materialsInfo',
    'materials',
    'nameLookup',
    'side',
    'wrap',
    'crossOrigin',
] as const).distinct()
objProps.materialCreator = _materialCreator

export type MTLLoaderProps = Node<MTLLoader, typeof MTLLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mtlLoader: { manager?: LoadingManager; }
    }
}

defaults.mtlLoader = {}

