import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
export * from 'three/examples/jsm/environments/RoomEnvironment.js';
declare module '../../../lib/3/three' {
    interface Three {
        RoomEnvironment: typeof RoomEnvironment;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            roomEnvironment: RoomEnvironmentProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        roomEnvironment: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        roomEnvironment: string[];
    }
}
export type RoomEnvironmentProps = Node<RoomEnvironment, typeof RoomEnvironment, {
    renderer?: WebGLRenderer;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        roomEnvironment: {
            renderer?: WebGLRenderer;
        };
    }
}
//# sourceMappingURL=RoomEnvironment.d.ts.map