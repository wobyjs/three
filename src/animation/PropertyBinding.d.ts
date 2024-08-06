import { Object3DNode } from '../../three-types';
import { PropertyBinding } from 'three/src/animation/PropertyBinding.js';
export { PropertyBinding } from 'three/src/animation/PropertyBinding.js';
declare module '../../lib/3/three' {
    interface Three {
        PropertyBinding: typeof PropertyBinding;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyBinding: PropertyBindingProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        propertyBinding: string[];
        parseTrackNameResults: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        propertyBinding: string[];
        parseTrackNameResults: string[];
    }
}
export type PropertyBindingProps = Object3DNode<PropertyBinding, typeof PropertyBinding, {
    targetGroup: any;
    path: any;
    parsedPath?: any;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        parseTrackNameResults: Partial<{
            targetGroup: any;
            path: any;
            parsedPath?: any;
        }>;
    }
}
//# sourceMappingURL=PropertyBinding.d.ts.map