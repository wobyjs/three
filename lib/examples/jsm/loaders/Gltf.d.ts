import { ObservableReadonly, Ref } from "woby";
import { Object3DEventMap } from "three/src/core/Object3D";
import { Group } from "three/src/objects/Group";
export interface gltfprops {
    path: string;
    ref?: ObservableReadonly<Group>;
}
export declare function Gltf({ path, ref }: {
    path: string;
    ref?: Ref<Group<Object3DEventMap>>;
}): ObservableReadonly<Group>;
declare module '../../../3/three' {
    interface Three {
        Gltf: typeof Gltf;
    }
}
//# sourceMappingURL=Gltf.d.ts.map