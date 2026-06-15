const fs = require('fs');
const path = require('path');

// Extract JavaScript from HTML files
function extractJS(htmlFile) {
    const html = fs.readFileSync(htmlFile, 'utf-8');
    const scriptMatch = html.match(/<script type="module">[\s\S]*?<\/script>/);
    if (!scriptMatch) return null;

    let js = scriptMatch[0]
        .replace('<script type="module">', '')
        .replace('</script>', '')
        .trim();

    return js;
}

// Convert Three.js JS to JSX format
function convertToJSX(jsCode, exampleName) {
    // Parse imports
    const importMatch = jsCode.match(/import \* as THREE from 'three';[\s\S]*?import.*?;/);
    const imports = importMatch ? importMatch[0] : '';

    // Convert to JSX structure
    let jsx = `/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
${imports.replace("three/addons/", "three/examples/jsm/").replace("'three'", "'three'")}

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_${exampleName} from Three.js examples.
 * Source: https://threejs.org/examples/webgl_${exampleName}.html
 */

export const ${toPascalCase(exampleName)} = () => {
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

${convertInitFunction(jsCode)}

${convertAnimateFunction(jsCode)}

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new THREE.Color(0x000000)}>
                {/* Scene content */}
            </scene>
            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ${toPascalCase(exampleName)}
`;

    return jsx;
}

function toPascalCase(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function convertInitFunction(jsCode) {
    // Extract init() function content
    const initMatch = jsCode.match(/function init\(\)[\s\S]*?\n\s*\}/);
    if (!initMatch) return '    // Initialization code\n    useEffect(() => {\n        // TODO: Convert init code\n    })';

    let initCode = initMatch[0];
    // Convert to useEffect format
    initCode = initCode
        .replace('function init() {', 'useEffect(() => {')
        .replace(/\n\s*\}/, '\n    })');

    return initCode;
}

function convertAnimateFunction(jsCode) {
    const animateMatch = jsCode.match(/function animate\(\)[\s\S]*?\n\s*\}/);
    if (!animateMatch) return '';

    let animateCode = animateMatch[0];
    animateCode = animateCode
        .replace('function animate() {', 'useFrame(() => {')
        .replace(/\n\s*\}/, '\n    })');

    return animateCode;
}

// Process all examples
const examples = [
    'loader_3dm',
    'loader_3ds',
    'loader_3mf',
    'loader_3mf_materials',
    'loader_amf',
    'loader_bvh',
    'loader_collada',
    'loader_collada_kinematics',
    'loader_collada_skinning',
    'loader_draco',
    'loader_fbx',
    'loader_fbx_nurbs',
    'loader_gcode',
    'loader_gltf',
    'loader_gltf_animation_pointer',
    'loader_gltf_anisotropy',
    'loader_gltf_avif',
    'loader_gltf_compressed',
    'loader_gltf_dispersion',
    'loader_gltf_instancing',
    'loader_gltf_iridescence'
];

const outputDir = 'D:/Developments/tslib/@woby/three/code/examples/webgl/loaders';

examples.forEach(example => {
    const htmlFile = `/tmp/${example}.html`;
    if (fs.existsSync(htmlFile)) {
        const jsCode = extractJS(htmlFile);
        if (jsCode) {
            const jsxCode = convertToJSX(jsCode, example);
            const outputFile = path.join(outputDir, `${toPascalCase(example)}.tsx`);
            fs.writeFileSync(outputFile, jsxCode);
            console.log(`Converted ${example} to ${outputFile}`);
        }
    }
});