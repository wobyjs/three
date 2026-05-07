/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, ShaderPass, OutputPass } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_procedural from Three.js examples.
 * Custom procedural effects using ShaderPass with custom shaders.
 *
 * Source: https://threejs.org/examples/webgl_shaders.html (procedural shader patterns)
 *
 * Procedural effects generate patterns algorithmically:
 * - Noise patterns (Perlin, Simplex)
 * - Voronoi/cellular patterns
 * - Fractal patterns
 * - Animated effects
 *
 * Key pattern: ShaderPass accepts custom shader objects with:
 * - uniforms: Object containing uniform values
 * - vertexShader: GLSL vertex code
 * - fragmentShader: GLSL fragment code
 */

// Custom procedural noise shader
const ProceduralShader = {
    uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        noiseScale: { value: 1.0 },
        color1: { value: new THREE.Color(0x0066ff) },
        color2: { value: new THREE.Color(0xff0066) },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform vec2 resolution;
        uniform float noiseScale;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;

        // Simplex noise functions
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                               -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                                    + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                                    dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
            vec3 g;
            g.x = a0.x * x0.x + h.x * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {
            vec2 uv = vUv;
            float t = time * 0.5;

            // Multi-octave noise
            float noise = 0.0;
            float amplitude = 1.0;
            float frequency = noiseScale;
            for(int i = 0; i < 4; i++) {
                noise += amplitude * snoise(uv * frequency + t * float(i + 1) * 0.3);
                frequency *= 2.0;
                amplitude *= 0.5;
            }
            noise = noise * 0.5 + 0.5;  // Normalize to 0-1

            // Color mixing based on noise
            vec3 color = mix(color1, color2, noise);

            // Add some variation
            float vignette = 1.0 - length(uv - 0.5) * 0.8;
            color *= vignette;

            // Mix with original scene
            vec4 original = texture2D(tDiffuse, uv);
            color = mix(original.rgb, color, 0.6);

            gl_FragColor = vec4(color, 1.0);
        }
    `
}

export const Procedural = () => {
    const composerRef = $<EffectComposer>()
    const proceduralPassRef = $<ShaderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    // Reactive shader parameters
    const noiseScale = $(1.0)
    const color1 = $(new THREE.Color(0x0066ff))
    const color2 = $(new THREE.Color(0xff0066))

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with procedural shader
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // Procedural shader pass
        const proceduralPass = new ShaderPass(ProceduralShader)
        proceduralPass.uniforms['resolution'].value.set(window.innerWidth, window.innerHeight)
        composer.addPass(proceduralPass)
        proceduralPassRef(proceduralPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            const pass = $$(proceduralPassRef)
            if (pass) {
                pass.uniforms['resolution'].value.set(window.innerWidth, window.innerHeight)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update shader parameters reactively
    useEffect(() => {
        const pass = $$(proceduralPassRef)
        if (pass) {
            pass.uniforms['noiseScale'].value = $$(noiseScale)
            pass.uniforms['color1'].value = $$(color1)
            pass.uniforms['color2'].value = $$(color2)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const pass = $$(proceduralPassRef)
        if (pass) {
            pass.uniforms['time'].value = time
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x111122)}>
                {/* Simple scene - procedural effect is the main focus */}
                <mesh position={[0, 0, -5]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshBasicMaterial color={0x333344} wireframe />
                </mesh>

                <mesh position={[0, 0, -3]} rotation={[0.5, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={0x555566} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 5]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Procedural
