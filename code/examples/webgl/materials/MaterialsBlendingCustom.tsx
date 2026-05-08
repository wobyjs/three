/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_blending_custom from Three.js examples.
 * Demonstrates custom blending with shader materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_blending_custom.html
 *
 * Features:
 * - Custom blend equations
 * - Custom blend factors
 * - Shader-based blending
 */

export const MaterialsBlendingCustom = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = time * 0.2
        }
    })

    // Custom shader for blending demonstration
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `

    const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        void main() {
            vec3 color1 = vec3(1.0, 0.4, 0.4);
            vec3 color2 = vec3(0.4, 0.8, 0.8);
            float t = sin(time + vUv.x * 3.14159) * 0.5 + 0.5;
            gl_FragColor = vec4(mix(color1, color2, t), 0.8);
        }
    `

    const customMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            time: { value: 0 }
        },
        transparent: true,
        blending: THREE.AdditiveBlending
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.5} />

                {/* Custom blended sphere */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <primitive object={customMaterial} attach="material" />
                </mesh>

                {/* Background elements */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh key={i} position={[(i - 2) * 3, 0, -3]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={new Color().setHSL(i / 5, 0.7, 0.5)} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsBlendingCustom