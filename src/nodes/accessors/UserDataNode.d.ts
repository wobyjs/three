import { Object3DNode } from '../../../three-types';
import UserDataNode, { NodeUserData } from 'three/src/nodes/accessors/UserDataNode.js';
export { UserDataNode };
declare module '../../../lib/3/three' {
    interface Three {
        UserDataNode: typeof UserDataNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            userDataNode: UserDataNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        userDataNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        userDataNode: string[];
    }
}
export type UserDataNodeProps = Object3DNode<UserDataNode, typeof UserDataNode, {
    property: string;
    inputType: string;
    userData?: NodeUserData | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        userDataNode: Partial<{
            property: string;
            inputType: string;
            userData?: NodeUserData | null;
        }>;
    }
}
//# sourceMappingURL=UserDataNode.d.ts.map