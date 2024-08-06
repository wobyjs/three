import { Node } from '../../../three-types';
import CodeNode, { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js';
export { CodeNode };
declare module '../../../lib/3/three' {
    interface Three {
        CodeNode: typeof CodeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            codeNode: CodeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        codeNode: string[];
        codeNodeInclude: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        codeNode: string[];
        codeNodeInclude: string[];
    }
}
export type CodeNodeProps = Node<CodeNode, typeof CodeNode, {
    code?: string;
    includes?: CodeNodeInclude[];
    language?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        codeNode: {
            code?: string;
            includes?: CodeNodeInclude[];
            language?: string;
        };
    }
}
//# sourceMappingURL=CodeNode.d.ts.map