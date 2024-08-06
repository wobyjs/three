import { PropertyBinding, PropertyBindingProps } from './PropertyBinding';
declare module '../../lib/3/three' {
    interface Three {
        Composite: typeof PropertyBinding;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            composite: PropertyBindingProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        composite: string[];
        propertyBinding_Composite: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        composite: string[];
        propertyBinding_Composite: string[];
    }
}
export type CompositeProps = PropertyBindingProps;
//# sourceMappingURL=Composite.d.ts.map