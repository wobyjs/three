/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_modified from Three.js examples.
 * Demonstrates modified materials with custom shaders.
 *
 * Source: https://threejs.org/examples/webgl_materials_modified.html
 *
 * Features:
 * - Custom shader materials
 * - Material modification
 * - Vertex/fragment shader injection
 */

export const MaterialsModified = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = time * 0.2
        }
    })

    // Custom shader material
    const vertexShader = `
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
            vNormal = normalize(normalMatrix * normal);
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `

    const fragmentShader = `
        uniform float time;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
            vec3 light = normalize(vec3(1.0, 1.0, 1.0));
            float diffuse = max(dot(vNormal, light), 0.0);
            vec3 baseColor = vec3(1.0, 0.4, 0.4);
            vec3 color = baseColor * (0.3 + diffuse * 0.7);
            // Add some pattern
            float pattern = sin(vUv.x * 20.0 + time) * sin(vUv.y * 20.0 + time) * 0.1;
            color += pattern;
            gl_FragColor = vec4(color, 1.0);
        }
    `

    const customMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            time: { value: 0 }
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.5} />

                {/* Sphere with custom shader */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <primitive object={customMaterial} attach="material" />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsModified