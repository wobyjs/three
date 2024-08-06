import { Node } from '../../three-types';
import { Source } from 'three/src/textures/Source.js';
export { Source } from 'three/src/textures/Source.js';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            source: SourceProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        source: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        source: string[];
    }
}
export type SourceProps = Node<Source, typeof Source, {
    data: any;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        source: Partial<{
            data: any;
        }>;
    }
}
//# sourceMappingURL=Source.d.ts.map