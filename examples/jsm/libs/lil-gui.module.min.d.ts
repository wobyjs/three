import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
export * from 'three/examples/jsm/libs/lil-gui.module.min';
import { Node, WrapAsString } from '../../../three-types';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        GUI: typeof GUI;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gui: GuiProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gui: WrapAsString<{
            autoPlace?: boolean;
            container?: HTMLElement;
            width?: number;
            title?: string;
            injectStyles?: boolean;
            touchStyles?: number;
            parent?: GUI;
        }>;
        booleanController: string[];
        colorController: string[];
        controller: string[];
        functionController: string[];
        numberController: string[];
        optionController: string[];
        stringController: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gui: string[];
        booleanController: string[];
        colorController: string[];
        controller: string[];
        functionController: string[];
        numberController: string[];
        optionController: string[];
        stringController: string[];
    }
}
export type GuiProps = Node<GUI, typeof GUI, {
    autoPlace?: boolean;
    container?: HTMLElement;
    width?: number;
    title?: string;
    injectStyles?: boolean;
    touchStyles?: number;
    parent?: GUI;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gui: {
            autoPlace?: boolean;
            container?: HTMLElement;
            width?: number;
            title?: string;
            injectStyles?: boolean;
            touchStyles?: number;
            parent?: GUI;
        };
    }
}
//# sourceMappingURL=lil-gui.module.min.d.ts.map