import { Node } from '../../../three-types'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
export * from 'three/examples/jsm/exporters/GLTFExporter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GLTFExporter: typeof GLTFExporter
    }
}

Three.GLTFExporter = GLTFExporter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gltfExporter: GLTFExporterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gltfExporter: typeof gltfExporter
        gltfExporterOptions: typeof gltfExporterOptions
        gltfWriter: typeof gltfWriter
        gltfExporterPlugin: typeof gltfExporterPlugin
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gltfExporter: typeof _gltfExporter
        gltfExporterOptions: typeof _gltfExporterOptions
        gltfWriter: typeof _gltfWriter
        gltfExporterPlugin: typeof _gltfExporterPlugin
    }
}



const gltfExporterOptions = ([
    /**
     * Export position, rotation and scale instead of matrix per node. Default is false
     */
    'trs',
    /**
     * Export only visible objects. Default is true.
     */
    'onlyVisible',
    /**
     * Export just the attributes within the drawRange, if defined, instead of exporting the whole array. Default is true.
     */
    'truncateDrawRange',
    /**
     * Export in binary (.glb) format, returning an ArrayBuffer. Default is false.
     */
    'binary',
    /**
     * Export with images embedded into the gltf asset. Default is true.
     */
    'embedImages',
    /**
     * Restricts the image maximum size (both width and height) to the given value. This option works only if embedImages is true. Default is Infinity.
     */
    'maxTextureSize',
    /**
     * List of animations to be included in the export.
     */
    'animations',
    /**
     * Generate indices for non-index geometry and export with them. Default is false.
     */
    'forceIndices',
    /**
     * Export custom gltf extensions defined on an object's userData.gltfExtensions property. Default is false.
     */
    'includeCustomExtensions',
] as const).distinct()
consParams.gltfExporterOptions = gltfExporterOptions

const gltfExporter = ([
] as const).distinct()
consParams.gltfExporter = gltfExporter

const gltfWriter = ([
] as const).distinct()
consParams.gltfWriter = gltfWriter

const gltfExporterPlugin = ([
    'writeTexture',
    'writeMaterial',
    'writeMesh',
    'writeNode',
    'beforeParse',
    'afterParse',
] as const).distinct()
consParams.gltfExporterPlugin = gltfExporterPlugin



const _gltfExporterOptions = ([
    /**
     * Export position, rotation and scale instead of matrix per node. Default is false
     */
    'trs',
    /**
     * Export only visible objects. Default is true.
     */
    'onlyVisible',
    /**
     * Export just the attributes within the drawRange, if defined, instead of exporting the whole array. Default is true.
     */
    'truncateDrawRange',
    /**
     * Export in binary (.glb) format, returning an ArrayBuffer. Default is false.
     */
    'binary',
    /**
     * Export with images embedded into the glTF asset. Default is true.
     */
    'embedImages',
    /**
     * Restricts the image maximum size (both width and height) to the given value. This option works only if embedImages is true. Default is Infinity.
     */
    'maxTextureSize',
    /**
     * List of animations to be included in the export.
     */
    'animations',
    /**
     * Generate indices for non-index geometry and export with them. Default is false.
     */
    'forceIndices',
    /**
     * Export custom glTF extensions defined on an object's userData.gltfExtensions property. Default is false.
     */
    'includeCustomExtensions',
] as const).distinct()
objProps.gltfExporterOptions = _gltfExporterOptions

const _gltfExporter = ([
] as const).distinct()
objProps.gltfExporter = _gltfExporter

const _gltfWriter = ([
] as const).distinct()
objProps.gltfWriter = _gltfWriter

const _gltfExporterPlugin = ([
    'writeTexture',
    'writeMaterial',
    'writeMesh',
    'writeNode',
    'beforeParse',
    'afterParse',
] as const).distinct()
objProps.gltfExporterPlugin = _gltfExporterPlugin

export type GLTFExporterProps = Node<GLTFExporter, typeof GLTFExporter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gltfExporter: {}
    }
}

defaults.gltfExporter = {
    options: {
        trs: false,
        onlyVisible: true,
        binary: false,
        maxTextureSize: Infinity,
        includeCustomExtensions: false,
    }
}