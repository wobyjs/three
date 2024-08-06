import { jsx as _jsx } from "../jsx/jsx-runtime";
///// <reference path="../jsx/runtime" />
/** @jsxImportSource ../jsx */
import { $$, wrapCloneElement } from "woby";
import { consParams } from "../3/consParams";
import { objParams } from "../3/objParams";
import { createElement } from "./createElement";
import { Canvas3D, } from "../components/Canvas3D";
import { defaults } from '../3/defaults';
export const jsx = (component, props, key) => {
    //@ts-ignore
    if (component === "canvas3D")
        //@ts-ignore 
        return _jsx(Canvas3D, { ...props });
    else
        //@ts-ignore
        return wrapCloneElement(createElement(component, props, key), component, props);
};
export const getConstructorParams = (pn = undefined, pt = undefined, meta, props, component) => {
    //case1 = object in constructor parameter (at children, at props)
    //case2 = primitive in constructor parameters, use args[]
    //case3 = set remaining props using Object.assign 
    const consParam = pn ?? consParams[component];
    const objParam = pt ?? objParams[component];
    const def = defaults[component];
    if (!consParam)
        console.error(`consParams.${component} not register`);
    if (!objParam)
        console.error(`objParams.${component} not register`);
    // if (!def) console.error(`def.${component} not register`)
    if (props.args)
        return props.args;
    // const r = []
    // if (Array.isArray(consParam))
    //     consParam.map((key, i) => r[i] = props[key])
    // else
    //     Object.keys(consParam).map(key => r[key] = props[key])
    const isArray = Array.isArray(consParam);
    const r = isArray ?
        consParam.reduce((acc, key, i) => (acc[i] = props[key], acc), [])
        : Object.keys(consParam).reduce((acc, key) => (props[key] && (acc[key] = props[key]), acc), {});
    if (isArray)
        objParam.map((paramKey, i) => {
            const index = consParam.indexOf(paramKey);
            if (index < 0)
                return;
            // if (props[paramName])
            //     r[paramName] = props[paramName]
            // else {
            const m = meta.filter(m => m && (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0];
            if (!r[index] && m?.Component)
                r[index] = $$(jsx(m.Component, m.props));
            // }
        });
    else
        objParam.map((paramKey, i) => {
            const paramName = consParam[paramKey];
            if (!paramName)
                return;
            // if (props[paramName])
            //     r[paramName] = props[paramName]
            // else {
            const m = meta.filter(m => (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0];
            if (!r[paramName] && m?.Component)
                // useEffect(() => {
                r[paramName] = jsx(m.Component, m.props);
            // })
            // }
        });
    //use defaults if there is undefined components
    if (isArray)
        consParam.map((key, i) => {
            // if (typeof $$(def?.[key]) === 'undefined' && !r[i]) {
            //     console.error(`defaults.${component}.${key} not set`)
            //     //throw Error("Update consP.ts default constructors according to node_modules/@types/three/src/*.d.ts")
            // }
            if (typeof r[i] === 'undefined' && typeof def[key] !== 'undefined')
                r[i] = def[key];
        });
    else
        Object.keys(consParam).map(key => {
            // if (typeof $$(def?.[key]) === 'undefined' && !r[key]) {
            //     console.error(`defaults.${component}.${key} not set`)
            //     //throw Error("Update consP.ts default constructors according to node_modules/@types/three/src/*.d.ts")
            // }
            if (typeof r[key] === 'undefined' && typeof def?.[key] !== 'undefined')
                r[key] = def[key];
        });
    return r;
};
