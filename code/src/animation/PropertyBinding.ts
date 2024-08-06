import { Object3DNode } from '../../three-types'
import { PropertyBinding } from 'three/src/animation/PropertyBinding.js'
export { PropertyBinding } from 'three/src/animation/PropertyBinding.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        propertyBinding: string[]
        parseTrackNameResults: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        propertyBinding: string[]
        parseTrackNameResults: string[]
    }
}
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts

consParams.parseTrackNameResults = [
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
].distinct()


consParams.propertyBinding = [
    'rootNode',
    'path',
    'parsedPath',
].distinct()


objParams.propertyBinding = [
    'path',
    'parsedPath',
    'node',
    'rootNode',
    'BindingType',
    'Versioning',
    'GetterByBindingType',
    'SetterByBindingTypeAndVersioning',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts

objParams.parseTrackNameResults = [
    'nodeName',
    'objectName',
    'objectIndex',
    'propertyName',
    'propertyIndex',
].distinct()

export type PropertyBindingProps = Object3DNode<PropertyBinding, typeof PropertyBinding, { targetGroup: any; path: any; parsedPath?: any; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        parseTrackNameResults: Partial<{ targetGroup: any; path: any; parsedPath?: any; }>
    }
}

defaults.parseTrackNameResults = {}