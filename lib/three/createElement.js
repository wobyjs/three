/* IMPORT */
import { $$, getMeta, isObservable, useEffect, SYMBOL_UNTRACKED_UNWRAPPED, untrack } from "woby";
// import { paramTypes } from './params'
import { getConstructorParams } from "./getConstructorParams";
import { isFunction, isPromiseR, toUpper, awaitAll } from "../utils";
import { camelcase } from "../camelcase";
import { Three } from "../3/three";
// import "../components/orbitControls"
// import '../components/BufferGeometry'
// import "../components/gltf"
// import "../components/Text"
import { setRef } from "woby";
import { consParams } from "../3/consParams";
import { objParams } from "../3/objParams";
export const fixReactiveProps = (props, component) => {
    for (const key in props) {
        if (key.startsWith("on")) {
            //event listeners
            component[key] = props[key];
            continue;
        }
        if (key == "ref") {
            if (isObservable(component))
                useEffect(() => { setRef($$(component), props.ref); });
            else
                // used to assign ref
                setRef(component, props.ref);
            continue;
        }
        const setVal = () => {
            if (Array.isArray($$(props[key]) || typeof $$(props[key]) === "object")) {
                if (typeof $$(component)?.[key]?.set === 'function')
                    $$(component)[key].set(...$$(props[key]));
                else if (typeof $$(component)?.[key] === 'function')
                    $$(component)[key](...$$(props[key]));
            }
            else if (typeof $$(component)?.[key]?.set === 'function')
                $$(component)[key]?.set($$(props[key]));
            else if (typeof $$(component)?.[key] === 'function')
                $$(component)[key](...$$(props[key]));
            else if ($$(component))
                $$(component)[key] = ($$(props[key]));
        };
        // if (isObservable(props[key]))
        useEffect(() => {
            if (!$$(component))
                return;
            setVal();
        });
        setVal();
    }
};
export function setValue(obj, keysString, value) {
    const keys = keysString.split('-');
    keys.forEach((key, index) => {
        if (!obj)
            return;
        if (index === keys.length - 1) {
            obj[key] = value;
        }
        else {
            // if (!obj[key]) {
            //   obj[key] = {}
            // }
            obj = obj[key];
        }
    });
}
export const createElement = (component, props, key) => {
    const wrapElement = (element) => {
        element[SYMBOL_UNTRACKED_UNWRAPPED] = true;
        return element;
    };
    if (isFunction(component))
        return wrapElement(() => untrack(() => component.call(component, props)));
    //get children from props
    const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c));
    const getInstance = () => {
        const p = getConstructorParams(consParams[camelcase(component)], objParams[camelcase(component)], meta, props, component);
        if (!Three[toUpper(component)])
            console.error(`Three.${toUpper(component)} not register`);
        const r = Array.isArray(p) ? new Three[toUpper(component)](...p) : new Three[toUpper(component)](p);
        // console.log(p, r)
        //set readonly variables to component
        fixReactiveProps(props, r);
        const { children, args, ...remainingProps } = props;
        if (Array.isArray(consParams[camelcase(component)]))
            consParams[camelcase(component)].map(paramName => delete remainingProps[paramName]);
        else
            Object.keys(consParams[camelcase(component)]).map(paramName => delete remainingProps[paramName]);
        Object.keys(remainingProps).forEach((k) => {
            if (k.startsWith("on") || k == "dispose")
                r[k] = remainingProps[k];
            if (k.includes("-"))
                setValue(r, k, remainingProps[k]);
        });
        return r;
    };
    if (Object.values(props).some(k => isPromiseR(k))) {
        console.log("promise", component);
        return new Promise((resolve, reject) => {
            (async () => {
                if (!Three[toUpper(component)]) {
                    console.error(`Three['${toUpper(component)}'] not found, please register it`);
                    return;
                }
                await awaitAll(props);
                const r = getInstance();
                resolve(r);
            })();
        });
    }
    else {
        return wrapElement(() => {
            const r = getInstance();
            untrack(r);
            return r;
        });
    }
};
