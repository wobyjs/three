/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Particles, BufferGeometry, BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_particles_dynamic from Three.js examples.
 * Demonstrates dynamic particle systems.
 *
 * Source: https://threejs.org/examples/webgl_particles_dynamic.html
 */

export const ParticlesDynamic = () => {
    const particlesRef = $<THREE.Points>()
    const count = 5000

    useEffect(() => {
        const particles = $$(particlesRef)
        if (!particles) return

        // Initialize positions
        const positions = particles.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }
        particles.geometry.attributes.position.needsUpdate = true
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const particles = $$(particlesRef)
        
        if (particles) {
            const positions = particles.geometry.attributes.position.array as Float32Array
            
            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                positions[i3 + 1] = Math.sin(time + i * 0.01) * 2
            }
            
            particles.geometry.attributes.position.needsUpdate = true
            particles.rotation.y = time * 0.1
        }
    })

    // Create buffer geometry with positions
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <points ref={particlesRef} geometry={geometry}>
                    <pointsMaterial color={0x4ecdc4} size={0.05} sizeAttenuation />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ParticlesDynamic