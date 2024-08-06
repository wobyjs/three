import { Node } from '../../../three-types';
import { HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh.js';
export * from 'three/examples/jsm/interactive/HTMLMesh.js';
declare module '../../../lib/3/three' {
    interface Three {
        HTMLMesh: typeof HTMLMesh;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            htmlMesh: HTMLMeshProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        htmlMesh: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        htmlMesh: string[];
    }
}
export type HTMLMeshProps = Node<HTMLMesh, typeof HTMLMesh, {
    dom: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        hTMLMesh: Partial<{
            dom: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=HTMLMesh.d.ts.map