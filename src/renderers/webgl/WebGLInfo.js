import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebGLInfo = WebGLInfo;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */
consParams.webglInfo = [
    'gl',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */
objParams.webglInfo = [
    /**
     * @default true
     */
    'autoReset',
    /**
     * @default { geometries: 0, textures: 0 }
     */
    'memory',
    /**
     * @default null
     */
    'programs',
    /**
     * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
     */
    'render',
].distinct();
defaults.webGLInfo = {};
