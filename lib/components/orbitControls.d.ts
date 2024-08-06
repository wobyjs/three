import { ObservableMaybe } from "woby";
import { Camera } from "three/src/cameras/Camera";
export declare function orbitControls(camera?: Camera, domElement?: HTMLElement, enableDamping?: ObservableMaybe<boolean>): void;
declare module '../3/three' {
    interface Three {
        OrbitControls: typeof orbitControls;
    }
}
//# sourceMappingURL=orbitControls.d.ts.map