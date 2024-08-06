import { Node, Vector3 } from '../../three-types';
import { Line3 } from 'three/src/math/Line3.js';
export { Line3 } from 'three/src/math/Line3.js';
declare module '../../lib/3/three' {
    interface Three {
        Line3: typeof Line3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            line3: Line3Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        line3: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        line3: string[];
    }
}
export type Line3Props = Node<Line3, typeof Line3, {
    start?: Vector3;
    end?: Vector3;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        line3: {
            start?: Vector3;
            end?: Vector3;
        };
    }
}
//# sourceMappingURL=Line3.d.ts.map