import { Node } from '../../three-types';
import { Cylindrical } from 'three/src/math/Cylindrical.js';
export { Cylindrical } from 'three/src/math/Cylindrical.js';
declare module '../../lib/3/three' {
    interface Three {
        Cylindrical: typeof Cylindrical;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cylindrical: CylindricalProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cylindrical: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cylindrical: string[];
    }
}
export type CylindricalProps = Node<Cylindrical, typeof Cylindrical, {
    radius?: number;
    theta?: number;
    y?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        cylindrical: {
            radius?: number;
            theta?: number;
            y?: number;
        };
    }
}
//# sourceMappingURL=Cylindrical.d.ts.map