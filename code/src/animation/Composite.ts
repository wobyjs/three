import { PropertyBinding, PropertyBindingProps } from './PropertyBinding'

import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
// import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Composite: typeof PropertyBinding
    }
}

Three.Composite = PropertyBinding

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            composite: PropertyBindingProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        composite: string[]
        propertyBinding_Composite: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        composite: string[]
        propertyBinding_Composite: string[]
    }
}


consParams.propertyBinding_Composite = [
    'targetGroup',
    'path',
    'parsedPath',
].distinct()


objParams.propertyBinding_Composite = [].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyMixer.d.ts

export type CompositeProps = PropertyBindingProps;
