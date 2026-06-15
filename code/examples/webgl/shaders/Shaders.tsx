/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector2 } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders from Three.js examples.
 * Demonstrates custom shader materials.
 *
 * Source: https://threejs.org/examples/webgl_shaders.html
 */

export const Shaders = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh && (mesh.material as any).uniforms) {
            (mesh.material as any).uniforms.time.value = time
        }
    })

    // Simple vertex shader
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `

    // Simple fragment shader with animated colors
    const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
            vec3 color = vec3(
                0.5 + 0.5 * sin(time + vUv.x * 3.14159),
                0.5 + 0.5 * sin(time + vUv.y * 3.14159),
                0.5 + 0.5 * sin(time + (vUv.x + vUv.y) * 3.14159)
            );
            gl_FragColor = vec4(color, 1.0);
        }
    `

    const uniforms = {
        time: { value: 0 }
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <planeGeometry args={[8, 8]} />
                    <shaderMaterial 
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={uniforms}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 3]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shaders