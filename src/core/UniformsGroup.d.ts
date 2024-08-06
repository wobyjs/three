import { Node } from '../../three-types';
import { UniformsGroup } from 'three/src/core/UniformsGroup.js';
export { UniformsGroup } from 'three/src/core/UniformsGroup.js';
declare module '../../lib/3/three' {
    interface Three {
        UniformsGroup: typeof UniformsGroup;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformsGroup: UniformsGroupProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        uniformsGroup: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        uniformsGroup: string[];
    }
}
export type UniformsGroupProps = Node<UniformsGroup, typeof UniformsGroup, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        uniformsGroup: Partial<{}>;
    }
}
//# sourceMappingURL=UniformsGroup.d.ts.map