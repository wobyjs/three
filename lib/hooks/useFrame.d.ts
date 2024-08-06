import { Observable } from "woby";
export declare const useFrames: <T extends (() => void)[] = (() => void)[]>(v?: T) => Observable<T>;
export declare const useFrame: (fn: () => void) => () => Observable<(() => void)[]>;
//# sourceMappingURL=useFrame.d.ts.map