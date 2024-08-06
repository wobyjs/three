import { jsx as _jsx } from "../jsx/jsx-runtime";
// / <reference path="../jsx" />
/** @jsxImportSource ../jsx */
import { useEffect, $$, $, getMeta, resolveChild, useContext, isObservable } from "woby";
import { isFunction, isPromiseR, } from "../utils";
import { threeContext, defaultContext, throttle, useThree, } from "../hooks";
import { setValue } from "../three/createElement";
import { Texture } from "three/src/textures/Texture";
import { Color } from "three/src/math/Color";
import { Raycaster } from "three/src/core/Raycaster";
import { Vector2 } from "three/src/math/Vector2";
const toColor = (color) => {
    const c = $$(color);
    if (c instanceof Color)
        return c;
    else if (c instanceof Texture)
        return c;
    return new Color(c);
};
const param = ['scene', 'camera', 'renderer', 'width', 'height', 'children', 'noRender', 'background'];
export const Canvas3D = ({ noRender, background, ...props }) => {
    const sceneDict = new Map();
    const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c));
    const consParam = param.toObject();
    const objParam = param;
    const r = {};
    const { children, ...remainingProps } = props;
    Object.keys(consParam).map(paramName => delete remainingProps[paramName]);
    Object.keys(remainingProps).forEach((k) => {
        if (k.includes("-"))
            setValue(r, k, remainingProps[k]);
    });
    objParam.map((paramKey, i) => {
        const paramName = consParam[paramKey];
        if (!paramName)
            return;
        const m = meta.filter(m => m && (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0];
        if (!r[paramName] && m?.Component) {
            const { props } = m;
            if (!props.ref)
                props.ref = $();
            else
                props.ref = [...[props.ref].flat(), $()];
            r[paramName] = Array.isArray(props.ref) ? props.ref[props.ref.length - 1] : props.ref; // jsx(m.Component as any, m.props as any)
        }
    });
    const InContext = () => {
        const { renderer, scene, camera, domElement, width, height } = useThree();
        const raycaster = new Raycaster();
        const pointer = new Vector2();
        const meshObj = {};
        // dispose all object 
        useEffect(() => () => {
            //@ts-ignore
            props.children.forEach(c => {
                $$(scene).remove(c);
            });
        });
        const onPointerMove = (event) => {
            event.stopPropagation();
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children);
            if (intersects.length > 0) {
                meshObj.obj = intersects[0].object;
                //@ts-ignore
                throttle(intersects[0].object.onPointerOver?.(event), 1000);
            }
            else
                throttle(meshObj.obj?.onPointerOut?.(event), 1000);
        };
        const onClick = (event) => {
            event.preventDefault();
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children);
            if (intersects.length > 0) {
                for (let i = 0; i < intersects.length; i++) {
                    //@ts-ignore
                    intersects[i].object.onClick?.(event);
                }
            }
        };
        const animate = (context) => {
            const fs = $$(context.frame);
            fs.forEach((f) => f());
            requestAnimationFrame(() => animate(context));
            if (!$$(noRender))
                // useEffect(() => {
                $$(renderer).render($$(scene), $$(camera));
            // })
        };
        //@ts-ignore
        const meta = [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c));
        useEffect(() => { $$(renderer)?.setSize($$(width), $$(height)); });
        useEffect(() => { $$(camera)?.position && ($$(camera).position.z = 5); });
        useEffect(() => { if ($$(background))
            $$(scene).background = toColor($$(background)); });
        const r = $();
        const flatChildren = [props.children].flat();
        flatChildren.forEach(obj => {
            if (isFunction(obj) || isPromiseR(obj))
                if (isPromiseR(obj))
                    useEffect(() => {
                        (async () => {
                            r(await obj);
                            $$(scene).add($$(r));
                        })();
                    });
                else
                    resolveChild(obj, val => {
                        //used to remove existing objects
                        if (sceneDict.has(obj)) {
                            if (sceneDict.get(obj) !== val && !!sceneDict.get(obj)) {
                                $$(scene).remove(sceneDict.get(obj));
                                sceneDict.set(obj, val);
                            }
                        }
                        if (val)
                            if (val.constructor?.name === 'OrbitControls') { }
                            else if (val.constructor?.name.toLowerCase().endsWith('renderer'))
                                useThree('renderer', val);
                            else {
                                // if (val.constructor?.name.toLowerCase().endsWith('camera'))
                                //     useThree('camera', val as any)
                                // console.log('DEBUG: ',  val instanceof Object3D)
                                $$(scene).add(val);
                                sceneDict.set(obj, val);
                            }
                    });
            else if (!!obj)
                $$(scene).add(obj);
        });
        useEffect(() => {
            $$(domElement).addEventListener('pointermove', onPointerMove);
            $$(domElement).addEventListener('pointerdown', onClick);
            return () => {
                $$(domElement).removeEventListener('pointermove', onPointerMove);
                $$(domElement).removeEventListener('pointerdown', onClick);
            };
        });
        animate(useContext(threeContext));
        return domElement;
    };
    //@ts-ignore
    return _jsx(threeContext.Provider, { value: defaultContext(r), children: _jsx(InContext, {}) });
};
