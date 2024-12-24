import { $, $$, ObservableMaybe, isObservable, useEffect, type JSX, Observable, isObject, isPrimitive } from "woby"
import { PromiseMaybe } from "../three-types"
import { Texture } from "../src/textures/Texture"
import { Color } from "../src/math/Color"
import { CubeTexture } from "../src/textures/CubeTexture"

export const toUpper = (s: string) => {
    s = s.replace('gl', 'GL')

    if (!s.startsWith('lut'))
        s = s.replace('3d', '3D')
    s = s.replace('2d', '2D')
    s = s.replace('gui', 'GUI')
    s = s.replace('ccdik', 'CCDIK')
    s = s.replace('fxaa', 'FXAA')
    s = s.replace('mmd', 'MMD')
    s = s.replace('gpu', 'GPU')
    s = s.replace('Gpu', 'GPU')
    s = s.replace('csm', 'CSM')
    s = s.replace('nurbs', 'NURBS')

    s = s.replace('draco', 'DRACO')
    s = s.replace('exr', 'EXR')
    s = s.replace('gltf', 'GLTF')
    s = s.replace('ktx', 'KTX')
    s = s.replace('objLoader', 'OBJLoader')
    s = s.replace('objExporter', 'OBJExporter')
    s = s.replace('ply', 'PLY')
    s = s.replace('stl', 'STL')
    s = s.replace('usdz', 'USDZ')

    s = s.replace('stf', 'STF')

    s = s.replace('threeMf', 'ThreeMF')
    s = s.replace('amf', 'AMF')
    s = s.replace('bvh', 'BVH')
    s = s.replace('dds', 'DDS')
    s = s.replace('fbx', 'FBX')
    s = s.replace('hdr', 'HDR')
    s = s.replace('ies', 'IES')
    s = s.replace('kmz', 'KMZ')
    if (s !== 'lut')
        s = s.replace('lut', 'LUT')
    s = s.replace('lwo', 'LWO')
    s = s.replace('mdd', 'MDD')
    s = s.replace('md', 'MD')
    s = s.replace('mtl', 'MTL')
    s = s.replace('nrrd', 'NRRD')
    s = s.replace('pcd', 'PCD')
    s = s.replace('pdb', 'PDB')
    s = s.replace('pvr', 'PVR')
    s = s.replace('rgbe', 'RGBE')
    s = s.replace('rgbm', 'RGBM')
    s = s.replace('svg', 'SVG')
    s = s.replace('tds', 'TDS')
    s = s.replace('tga', 'TGA')
    s = s.replace('tiff', 'TIFF')
    s = s.replace('ttf', 'TTF')
    s = s.replace('vox', 'VOX')
    s = s.replace('vrml', 'VRML')
    s = s.replace('vtk', 'VTK')
    s = s.replace('xyz', 'XYZ')

    s = s.replace('obb', 'OBB')
    s = s.replace('ssr', 'SSR')
    s = s.replace('gtao', 'GTAO')
    s = s.replace('sao', 'SAO')
    s = s.replace('smaa', 'SMAA')
    s = s.replace('ssaa', 'SSAA')
    s = s.replace('ssao', 'SSAO')
    s = s.replace('taa', 'TAA')
    s = s.replace('css', 'CSS')
    s = s.replace('ast', 'AST')
    s = s.replace('glsl', 'GLSL')
    s = s.replace('tsl', 'TSL')
    s = s.replace('uv', 'UV')
    s = s.replace('xr', 'XR')

    s = s.replace('pmrem', 'PMREM')
    s = s.replace('ao', 'AO')
    s = s.replace('lod', 'LOD')
    s = s.replace('rtt', 'RTT')
    s = s.replace('wgsl', 'WGSL')
    // s = s.replace('lineThree', 'line')

    return s.charAt(0).toUpperCase() + s.substring(1)
}

export const IN_CONTEXT = Symbol('IN_CONTEXT')
export const PROMISE = Symbol('PROMISE')
export const RESOLVED_VALUE = Symbol('RESOLVED_VALUE')
export const WOBY3_OPTIONAL = Symbol('WOBY3_OPTIONAL')
export const WOBY3_CHILD = Symbol('WOBY3_CHILD')
export const WOBY3_PROP = Symbol('WOBY3_PROP')
export const WOBY3_CONSTRUCTOR = Symbol('WOBY3_CONSTRUCTOR')

export const isOptional = <T extends Function>(element: T): boolean => hasSymbol(element, WOBY3_OPTIONAL)
export const isProp = <T extends Function>(element: T): boolean => hasSymbol(element, WOBY3_PROP)
export const isChild = <T extends Function>(element: T): boolean => hasSymbol(element, WOBY3_CHILD)
export const isConstructor = <T extends Function>(element: T): boolean => hasSymbol(element, WOBY3_CONSTRUCTOR)
export const hasPromise = <T extends object>(element: T): boolean => hasSymbol(element, RESOLVED_VALUE)

export const hasValue = <T extends object>(element: T): boolean => !!element && RESOLVED_VALUE in element

export const wrapValue = <T, V>(element: T, value: V) => {
    element[RESOLVED_VALUE] = value
    return element as T & { [RESOLVED_VALUE]: V }
}

export const wrapSymbol = <T extends Function | Object>(element: T, ...syms: symbol[]): T => {
    if (isPrimitive(element)) return element

    syms.forEach(sym => element[sym] = true)
    return element
}
export const unwrapSymbol = <T extends Function | Object>(element: T, sym: symbol) => delete element[sym]

export const hasSymbol = <T,>(element: T, sym: symbol) => element?.[sym] === true

export const woby3Child = <T extends Function | Object>(element: T): T => wrapSymbol(element, WOBY3_CHILD)
export const woby3Prop = <T extends Function | Object>(element: T): T => wrapSymbol(element, WOBY3_PROP)
export const woby3Constructor = <T extends Function | Object>(element: T): T => wrapSymbol(element, WOBY3_CONSTRUCTOR)

export const isFunction = <T extends Function>(f: T | any): f is Function => typeof f === 'function'

export const isObjectLiteral = (obj: any) => obj !== null && typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype

/** Check is null recursively */
export const isNullR = <T>(oo: ObservableMaybe<T>) => {
    if (typeof oo === 'undefined' || oo === null) return true

    if (!(isConstructor(oo as any) || isProp(oo as any) || Array.isArray(oo) || isObjectLiteral(oo)))
        return false

    if (!(Array.isArray(oo) || isObjectLiteral(oo))) // skip class base again !!
        return false

    const o = $$(oo)
    if (isObject(o))
        return Object.keys(o).some(key => key !== 'ref' /* && (isChild(o[key]) || isAttr(o[key])) */ && isNullR(o[key]))

    return typeof o === 'undefined' //!o && o !== 0
}

/** @param optional true, optional props or elements not take into account
 *  skip ref
*/
export const isFunctionR = <T>(obj, optional = true) => {
    if (!obj) return false

    if (!(optional && hasSymbol(obj, WOBY3_OPTIONAL)) && isFunction(obj)) return true

    if (typeof obj === "object" && obj !== null && (isObjectLiteral(obj) || Array.isArray(obj)))
        return Object.keys(obj).some(key => key !== 'ref' && isFunctionR(obj[key], optional))

    return false
}

/** Recursive check isObservable 
 *  skip ref
*/
export const isObservableR = <T>(obj: T): obj is T & Observable => {
    if (isObservable(obj)) return true

    if (isFunction(obj)) return false
    if (!obj) return false

    if (typeof obj === 'object')
        return Object.keys(obj).some(key => key !== 'ref' && isObservableR(obj[key]))

    return false
}

/** Recursive check Promise */
export const isPromiseR = <T>(obj: T) => {
    const o = isObservable(obj) ? $$(obj) : obj
    if (!o) return false

    if (isPromise(o)) return true
    if (hasSymbol(o, PROMISE)) return true

    if (isFunction(o)) return false

    if (typeof o === "object" && o !== null && (isObjectLiteral(o) || Array.isArray(o)))
        return Object.keys(obj).some(key => !key.startsWith("on") && isPromiseR(o[key]))

    return false
}

export const isPromise = <T extends JSX.Child | any>(obj: ObservableMaybe<PromiseMaybe<T>>) => {
    const o = isObservable(obj) ? $$(obj) : obj
    if (!o) return false

    if (o instanceof Promise)
        return true

    return isFunction((o as any).then)
}

export const promise2$ = <T extends JSX.Child | any>(props: ObservableMaybe<PromiseMaybe<T>>): ObservableMaybe<PromiseMaybe<T>> => {
    const o = isObservable(props) ? $$(props) : props
    for (const key in (o as any)) {
        const value = $$(o[key])
        if (isPromise(value))
            useEffect(() => {
                o[key] = $();
                (async () => o[key](await value))()
            })
        else if (typeof value === "object" && value !== null)
            promise2$(value);
    }
    return props;
};

export const awaitAll = async <T extends JSX.Child | any>(props: ObservableMaybe<PromiseMaybe<T>>): Promise<ObservableMaybe<PromiseMaybe<T>>> => {
    const o = isObservable(props) ? $$(props) : props
    for (const key in (o as any)) {
        const v = o[key]

        if (isFunction(v) && hasSymbol(v, PROMISE))
            props[key] = await awaitAll(v())
        else if ((isFunction(v) && !key.startsWith('on')) || isObservable(v)) {
            // if (!objProps?.includes(key))  // must reinitialize
            props[key] = v()
            //else
            //done in fixReactiveProps
        } else if (isPromise(v))
            props[key] = await v;
        else if (typeof v === "object" && v !== null && isPromiseR(v))  //array
            props[key] = await awaitAll(v)
        else
            props[key] = v
    }
    return props
};

/** is undefine, this opposite from core */
const isu = (v: any) => v === void 0
const isNAN = (v: any) => typeof v === 'number' && isNaN(v)
export const isNull = v => isu(v) || isNAN(v)


export const toColor = (color: ObservableMaybe<string | number | Color | Texture | CubeTexture>) => {
    const c = $$(color)
    if (c instanceof Color)
        return c
    else if (c instanceof Texture)
        return c

    return new Color(c)
}


