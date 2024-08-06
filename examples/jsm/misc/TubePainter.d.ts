import { Node } from '../../../three-types';
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js';
export * from 'three/examples/jsm/misc/TubePainter.js';
declare module '../../../lib/3/three' {
    interface Three {
        TubePainter: typeof TubePainter;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tubePainter: TubePainterProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tubePainter: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tubePainter: string[];
    }
}
export type TubePainterProps = Node<TubePainter, typeof TubePainter, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tubePainter: {};
    }
}
//# sourceMappingURL=TubePainter.d.ts.map