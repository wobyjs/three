import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
export * from 'three/examples/jsm/libs/lil-gui.module.min'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        GUI: typeof GUI
    }
}

Three.GUI = GUI

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gui: GuiProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gui: WrapAsString<{
            autoPlace?: boolean
            container?: E
            width?: number
            title?: string
            injectStyles?: boolean
            touchStyles?: number
            parent?: GUI
        }>
        booleanController: typeof booleanController
        colorController: typeof colorController
        controller: typeof controller
        functionController: typeof functionController
        numberController: typeof numberController
        optionController: typeof optionController
        stringController: typeof stringController
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gui: typeof _gui
        booleanController: typeof _booleanController
        colorController: typeof _colorController
        controller: typeof _controller
        functionController: typeof _functionController
        numberController: typeof _numberController
        optionController: typeof _optionController
        stringController: typeof _stringController
    }
}



consParams.gui = ([
    'autoPlace',
    'container',
    'width',
    'title',
    'injectStyles',
    'touchStyles',
    'parent',
] as const).toObject()

const booleanController = ([
    'parent',
    'object',
    'property',
] as const).distinct()

consParams.booleanController = booleanController

const colorController = ([
    'parent',
    'object',
    'property',
    'rgbScale',
] as const).distinct()
consParams.colorController = colorController

/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
/**
 * Base class for all controllers.
 */

const controller = ([
    'parent',
    'object',
    'property',
    'className',
    'widgetTag',
] as const).distinct()
consParams.controller = controller

const functionController = ([
    'parent',
    'object',
    'property',
]).distinct()
consParams.functionController = functionController

const numberController = ([
    'parent',
    'object',
    'property',
    'min',
    'max',
    'step',
] as const).distinct()
consParams.numberController = numberController

const optionController = ([
    'parent',
    'object',
    'property',
    'options',
]).distinct()
consParams.optionController = optionController

const stringController = ([
    'parent',
    'object',
    'property',
] as const).distinct()
consParams.stringController = stringController

const _gui = ([
    /**
     * The GUI containing this folder, or `undefined` if this is the root GUI.
     */
    'parent',
    /**
     * The top level GUI containing this folder, or `this` if this is the root GUI.
     */
    'root',
    /**
     * The list of controllers and folders contained by this GUI.
     */
    'children',
    /**
     * The list of controllers contained by this GUI.
     */
    'controllers',
    /**
     * The list of folders contained by this GUI.
     */
    'folders',
    /**
     * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
     */
    '_closed',
    /**
     * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
     */
    '_hidden',
    /**
     * The outermost container element.
     */
    'domElement',
    /**
     * The DOM element that contains the title.
     */
    '$title',
    /**
     * The DOM element that contains children.
     */
    '$children',
] as const).distinct()
objProps.gui = _gui

const _colorController = ([
    '$input',
    '$text',
    '$display',
    '_format',
    '_rgbScale',
    '_initialValueHexString',
    '_textFocused',
] as const).distinct()
objProps.colorController = _colorController

/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
/**
 * Base class for all controllers.
 */

const _controller = ([
    /**
     * The GUI that contains this controller.
     */
    'parent',
    /**
     * The object this controller will modify.
     */
    'object',
    /**
     * The name of the property to control.
     */
    'property',
    /**
     * Used to determine if the controller is disabled.
     * Use `controller.disable( true|false )` to modify this value
     */
    '_disabled',
    /**
     * Used to determine if the Controller is hidden.
     * Use `controller.show()` or `controller.hide()` to change this.
     */
    '_hidden',
    /**
     * The value of `object[ property ]` when the controller was created.
     */
    'initialValue',
    /**
     * The outermost container DOM element for this controller.
     */
    'domElement',
    /**
     * The DOM element that contains the controller's name.
     */
    '$name',
    /**
     * The DOM element that contains the controller's "widget" (which differs by controller type).
     */
    '$widget',
    /**
     * The DOM element that receives the disabled attribute when using disable()
     */
    '$disable',
    /**
     * The controller's name. Use `controller.name( 'Name' )` to modify this value.
     */
    '_name',
    '_changed',
    /**
     * Used to determine if the controller is currently listening. Don't modify this value
     * directly. Use the `controller.listen( true|false )` method instead.
     */
    '_listening',
    '_listenCallbackID',
    '_listenPrevValue',
] as const).distinct()
objProps.controller = _controller

const _functionController = ([...objProps.controller,
    '$button',
] as const).distinct()
objProps.functionController = _functionController

const _numberController = ([...objProps.controller,
    '_decimals',
    '_min',
    '_max',
    '_step',
    '_stepExplicit',
    '$input',
    '_inputFocused',
    '_hasSlider',
    '$slider',
    '$fill',
] as const).distinct()
objProps.numberController = _numberController

const _booleanController = ([...objProps.controller,
    '$input',
] as const).distinct()
objProps.booleanController = _booleanController

const _optionController = ([
    '$select',
    '$display',
    '_values',
    '_names',
] as const).distinct()
objProps.optionController = _optionController

const _stringController = ([...objProps.controller,
    '$input',
] as const).distinct()
objProps.stringController = _stringController

export type GuiProps = Node<GUI, typeof GUI, { autoPlace?: boolean; container?: E; width?: number; title?: string; injectStyles?: boolean; touchStyles?: number; parent?: GUI }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gui: { autoPlace?: boolean; container?: E; width?: number; title?: string; injectStyles?: boolean; touchStyles?: number; parent?: GUI }
    }
}

defaults.gui = {}



// import { } from 'three/examples/jsm/libs/fflate.module'
// import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
// import { } from 'three/examples/jsm/libs/stats.module'
// import { } from 'three/examples/jsm/libs/tween.module'