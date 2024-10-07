import { Node } from '../../three-types'
import { PropertyBinding } from 'three/src/animation/PropertyBinding.js'
export { PropertyBinding } from 'three/src/animation/PropertyBinding.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PropertyBinding: typeof PropertyBinding
    }
}

Three.PropertyBinding = PropertyBinding

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyBinding: PropertyBindingProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        propertyBinding: typeof propertyBinding
        parseTrackNameResults: typeof parseTrackNameResults
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        propertyBinding: typeof _propertyBinding
        parseTrackNameResults: typeof _parseTrackNameResults
    }
}


const parseTrackNameResults = ([
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
] as const).distinct()
consParams.parseTrackNameResults = parseTrackNameResults


const propertyBinding = ([
    'rootNode',
    'path',
    'parsedPath',
] as const).distinct()
consParams.propertyBinding = propertyBinding


const _propertyBinding = ([
    'path',
    'parsedPath',
    'node',
    'rootNode',
    'BindingType',
    'Versioning',
    'GetterByBindingType',
    'SetterByBindingTypeAndVersioning',
] as const).distinct()
objProps.propertyBinding = _propertyBinding



const _parseTrackNameResults = ([
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
] as const).distinct()
objProps.parseTrackNameResults = _parseTrackNameResults

export type PropertyBindingProps = Node<PropertyBinding, typeof PropertyBinding, { targetGroup: any; path: any; parsedPath?: any; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        parseTrackNameResults: Partial<{ targetGroup: any; path: any; parsedPath?: any; }>
    }
}

defaults.parseTrackNameResults = {}