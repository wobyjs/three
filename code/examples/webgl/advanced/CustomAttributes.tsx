/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferAttribute, Float32BufferAttribute, ShaderMaterial, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_custom_attributes from Three.js examples.
 * Demonstrates custom shader attributes for per-vertex effects.
 *
 * Source: https://threejs.org/examples/webgl_custom_attributes.html
 *
 * Key features:
 * - Custom vertex attributes
 * - ShaderMaterial with custom uniforms
 * - Animated vertex displacement
 */

// Custom shader for wave displacement
const vertexShader = `
    attribute float displacement;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;

    void main() {
        vNormal = normal;
        vPosition = position;

        vec3 newPosition = position;
        newPosition += normal * sin(position.x * 5.0 + uTime) * 0.1;
        newPosition += normal * cos(position.y * 5.0 + uTime) * 0.1;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`

const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;

    void main() {
        vec3 light = normalize(vec3(1.0, 1.0, 1.0));
        float intensity = dot(vNormal, light) * 0.5 + 0.5;

        vec3 color = vec3(0.2, 0.5, 0.8) * intensity;
        color += vec3(0.1) * sin(vPosition.x * 10.0 + uTime);

        gl_FragColor = vec4(color, 1.0);
    }
`

export const CustomAttributes = () => {
    const materialRef = $<ShaderMaterial>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        // Add custom displacement attribute
        const geometry = mesh.geometry as THREE.BufferGeometry
        const count = geometry.attributes.position.count
        const displacement = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            displacement[i] = Math.random()
        }

        geometry.setAttribute('displacement', new BufferAttribute(displacement, 1))
    })

    useFrame((state) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = state.clock?.getElapsedTime() ?? 0
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111122)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Mesh with custom shader */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[3, 3, 3, 32, 32, 32]} />
                    <shaderMaterial
                        ref={materialRef}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                            uTime: { value: 0 }
                        }}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CustomAttributes
