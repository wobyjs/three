import { TextGeometryParameters, TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { WrapFont } from '../loaders/FontLoader';
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
export * from 'three/examples/jsm/geometries/TextGeometry.js';
import '../../../lib/three/extensions';
import '../../../src/geometries/ExtrudeGeometry';
import { WrapAsString } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        TextGeometry: typeof TextGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textGeometry: TextGeometryProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        textGeometry: string[];
        textGeometryParameters: WrapAsString<TextGeometryParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        textGeometry: string[];
        textGeometryParameters: string[];
    }
}
export type TextGeometryProps = BufferGeometryNode<Omit<TextGeometry, 'parameters'>, Omit<typeof TextGeometry, 'parameters'>, {
    text: string;
    parameters?: WrapFont<TextGeometryParameters>;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        textGeometry: Partial<{
            text?: string;
            parameters?: WrapFont<TextGeometryParameters>;
        }>;
    }
}
//# sourceMappingURL=TextGeometry.d.ts.map