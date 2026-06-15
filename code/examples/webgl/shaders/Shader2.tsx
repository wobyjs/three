/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shader2 from Three.js examples.
 * Demonstrates custom shader materials with uniforms.
 *
 * Source: https://threejs.org/examples/webgl_shader2.html
 */

export const Shader2 = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh && mesh.material instanceof ShaderMaterial) {
            mesh.material.uniforms.uTime.value = time
        }
    })

    const material = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv;
                float r = 0.5 + 0.5 * sin(uTime + uv.x * 3.14159);
                float g = 0.5 + 0.5 * sin(uTime + uv.y * 3.14159 + 2.094);
                float b = 0.5 + 0.5 * sin(uTime + (uv.x + uv.y) * 2.094);
                gl_FragColor = vec4(r, g, b, 1.0);
            }
        `
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <planeGeometry args={[8, 4]} />
                    <shaderMaterial uniforms={material.uniforms} vertexShader={material.vertexShader} fragmentShader={material.fragmentShader} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 3]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shader2