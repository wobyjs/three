import { PropertyBinding, PropertyBindingProps } from './PropertyBinding'

import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        composite: typeof consParams.propertyBinding
        propertyBinding_Composite: typeof propertyBinding_Composite
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        composite: typeof objProps.propertyBinding
        propertyBinding_Composite: typeof _propertyBinding_Composite
    }
}


const propertyBinding_Composite = ([
    'targetGroup',
    'path',
    'parsedPath',
] as const).distinct()
consParams.propertyBinding_Composite = propertyBinding_Composite


const _propertyBinding_Composite = ([] as const).distinct()
objProps.propertyBinding_Composite = _propertyBinding_Composite


export type CompositeProps = PropertyBindingProps;
