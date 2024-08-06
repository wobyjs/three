import { Object3DNode } from '../../three-types';
import { PropertyMixer } from 'three/src/animation/PropertyMixer.js';
export { PropertyMixer } from 'three/src/animation/PropertyMixer.js';
declare module '../../lib/3/three' {
    interface Three {
        PropertyMixer: typeof PropertyMixer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyMixer: PropertyMixerProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        propertyMixer: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        propertyMixer: string[];
    }
}
export type PropertyMixerProps = Object3DNode<PropertyMixer, typeof PropertyMixer, {
    binding: any;
    typeName: string;
    valueSize: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        propertyMixer: Partial<{
            binding: any;
            typeName: string;
            valueSize: number;
        }>;
    }
}
//# sourceMappingURL=PropertyMixer.d.ts.map