import { Object3DNode, Vector2 } from '../../../three-types';
import { Path } from 'three/src/extras/core/Path.js';
export { Path } from 'three/src/extras/core/Path.js';
import './CurvePath';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            path: PathProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        path: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        path: string[];
    }
}
export type PathProps = Object3DNode<Path, typeof Path, {
    points?: Vector2[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        path: {
            points?: Vector2[];
        };
    }
}
//# sourceMappingURL=Path.d.ts.map