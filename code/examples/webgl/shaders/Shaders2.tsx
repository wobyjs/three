/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders2 from Three.js examples.
 * Demonstrates shader variations.
 *
 * Source: https://threejs.org/examples/webgl_shaders2.html
 */

export const Shaders2 = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh && (mesh.material as any).uniforms) {
            (mesh.material as any).uniforms.time.value = time
        }
    })

    const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
            float wave = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
            wave *= sin(vUv.y * 10.0 + time * 0.7) * 0.5 + 0.5;
            vec3 color = mix(vec3(0.1, 0.1, 0.3), vec3(0.3, 0.6, 0.9), wave);
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
                <mesh ref={meshRef}>
                    <planeGeometry args={[8, 8]} />
                    <shaderMaterial 
                        vertexShader="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }"
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

export default Shaders2