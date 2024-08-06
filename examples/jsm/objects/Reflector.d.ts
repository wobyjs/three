import { ReflectorOptions, Reflector } from 'three/examples/jsm/objects/Reflector.js';
export * from 'three/examples/jsm/objects/Reflector.js';
import { Node } from '../../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
declare module '../../../lib/3/three' {
    interface Three {
        Reflector: typeof Reflector;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflector: ReflectorProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        reflector: string[];
        reflectorOptions: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        reflector: string[];
        reflectorOptions: string[];
    }
}
export type ReflectorProps = Node<Reflector, typeof Reflector, {
    geometry?: BufferGeometry;
    options?: ReflectorOptions;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        reflector: Partial<{
            geometry?: BufferGeometry;
            options?: ReflectorOptions;
        }>;
    }
}
//# sourceMappingURL=Reflector.d.ts.map