import { Object3DNode } from '../../three-types';
import { Group } from 'three/src/objects/Group.js';
export { Group } from 'three/src/objects/Group.js';
declare module '../../lib/3/three' {
    interface Three {
        Group: typeof Group;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            group: GroupProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        group: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        group: string[];
    }
}
export type GroupProps = Object3DNode<Group, typeof Group, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        group: {};
    }
}
//# sourceMappingURL=Group.d.ts.map