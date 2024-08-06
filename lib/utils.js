import { $, $$, isObservable, useEffect } from "woby";
export const toUpper = (s) => {
    s = s.replace('gl', 'GL');
    if (!s.startsWith('lut'))
        s = s.replace('3d', '3D');
    s = s.replace('gui', 'GUI');
    s = s.replace('ccdik', 'CCDIK');
    s = s.replace('mmd', 'MMD');
    s = s.replace('gpu', 'GPU');
    s = s.replace('csm', 'CSM');
    s = s.replace('nurbs', 'NURBS');
    s = s.replace('draco', 'DRACO');
    s = s.replace('exr', 'EXR');
    s = s.replace('gltf', 'GLTF');
    s = s.replace('ktx', 'KTX');
    s = s.replace('obj', 'OBJ');
    s = s.replace('ply', 'PLY');
    s = s.replace('stl', 'STL');
    s = s.replace('usdz', 'USDZ');
    s = s.replace('stf', 'STF');
    s = s.replace('amf', 'AMF');
    s = s.replace('bvh', 'BVH');
    s = s.replace('dds', 'DDS');
    s = s.replace('fbx', 'FBX');
    s = s.replace('hdr', 'HDR');
    s = s.replace('ies', 'IES');
    s = s.replace('kmz', 'KMZ');
    if (s !== 'lut')
        s = s.replace('lut', 'LUT');
    s = s.replace('lwo', 'LWO');
    s = s.replace('mdd', 'MDD');
    s = s.replace('md', 'MD');
    s = s.replace('mtl', 'MTL');
    s = s.replace('nrrd', 'NRRD');
    s = s.replace('pcd', 'PCD');
    s = s.replace('pdb', 'PDB');
    s = s.replace('pvr', 'PVR');
    s = s.replace('rgbe', 'RGBE');
    s = s.replace('rgbm', 'RGBM');
    s = s.replace('svg', 'SVG');
    s = s.replace('tds', 'TDS');
    s = s.replace('tga', 'TGA');
    s = s.replace('tiff', 'TIFF');
    s = s.replace('ttf', 'TTF');
    s = s.replace('vox', 'VOX');
    s = s.replace('vrml', 'VRML');
    s = s.replace('vtk', 'VTK');
    s = s.replace('xyz', 'XYZ');
    s = s.replace('obb', 'OBB');
    s = s.replace('ssr', 'SSR');
    s = s.replace('gtao', 'GTAO');
    s = s.replace('sao', 'SAO');
    s = s.replace('smaa', 'SMAA');
    s = s.replace('ssaa', 'SSAA');
    s = s.replace('ssao', 'SSAO');
    s = s.replace('taa', 'TAA');
    s = s.replace('css', 'CSS');
    s = s.replace('ast', 'AST');
    s = s.replace('glsl', 'GLSL');
    s = s.replace('tsl', 'TSL');
    s = s.replace('uv', 'UV');
    s = s.replace('xr', 'XR');
    s = s.replace('pmrem', 'PMREM');
    s = s.replace('ao', 'AO');
    s = s.replace('lod', 'LOD');
    s = s.replace('wgsl', 'WGSL');
    return s.charAt(0).toUpperCase() + s.substring(1);
};
export const isFunction = (f) => typeof f === 'function';
export const isPromiseR = (obj) => {
    const o = isObservable(obj) ? $$(obj) : obj;
    if (!o)
        return false;
    if (isPromise(o))
        return true;
    //iterate over all property, 1st level
    if (typeof o === "object" && o !== null)
        for (const key in o)
            if (!key.startsWith("on") && isPromiseR(o[key]))
                return true;
    return false;
};
export const isPromise = (obj) => {
    const o = isObservable(obj) ? $$(obj) : obj;
    if (!o)
        return false;
    if (o instanceof Promise)
        return true;
    return typeof o.then === 'function';
};
export const promise2$ = (props) => {
    const o = isObservable(props) ? $$(props) : props;
    for (const key in o) {
        const value = $$(o[key]);
        if (isPromise(value))
            useEffect(() => {
                o[key] = $();
                (async () => o[key](await value))();
            });
        else if (typeof value === "object" && value !== null)
            promise2$(value);
    }
    return props;
};
export const awaitAll = async (props) => {
    const o = isObservable(props) ? $$(props) : props;
    for (const key in o) {
        const value = $$(o[key]);
        if (isPromise(value)) {
            props[key] = await value;
        }
        else if (typeof value === "object" && value !== null) {
            props[key] = await awaitAll(value);
        }
        else
            props[key] = value;
    }
    return props;
};
