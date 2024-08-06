/** @jsxImportSource ./jsx-runtime */
import { type Loader } from "three/src/loaders/Loader";
import { Observable } from "woby";
export declare const useLoader: <T extends Loader<unknown, string>, V>(loader: new () => T & {
    loadAsync: (path: string) => V;
}, options: {
    path: string;
    init?: (instance: T) => void;
}) => Observable<V>;
//# sourceMappingURL=useLoader.d.ts.map