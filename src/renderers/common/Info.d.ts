import { Node } from '../../../three-types';
import Info from 'three/src/renderers/common/Info.js';
export { Info };
declare module '../../../lib/3/three' {
    interface Three {
        Info: typeof Info;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            info: InfoProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        info: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        info: string[];
    }
}
export type InfoProps = Node<Info, typeof Info, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        info: {};
    }
}
//# sourceMappingURL=Info.d.ts.map