/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_lookat from Three.js examples.
 * Demonstrates LookAt functionality for object orientation.
 *
 * Source: https://threejs.org/examples/misc_lookat.html
 *
 * Key features:
 * - Objects look at a target
 * - Dynamic target following
 * - Visual orientation feedback
 */

export const Lookat = () => {
    const targetRef = $<THREE.Mesh>()
    const followersRef = $<THREE.Mesh[]>([])

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate target
        const target = $$(targetRef)
        if (target) {
            target.position.x = Math.sin(time) * 5
            target.position.z = Math.cos(time) * 5
            target.position.y = Math.sin(time * 2) * 2
        }

        // Make followers look at target
        const followers = $$(followersRef)
        followers.forEach((follower) => {
            if (target) {
                follower.lookAt(target.position)
            }
        })
    })

    // Create followers in a circle
    const followers = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 10
        const z = Math.sin(angle) * 10
        return { position: [x, 0, z] as [number, number, number], color: new Color().setHSL(i / 8, 0.7, 0.5) }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Target (sphere) */}
                <mesh ref={targetRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} emissive={0xff6b6b} emissiveIntensity={0.3} />
                </mesh>

                {/* Followers (cones that look at target) */}
                {followers.map((follower, i) => (
                    <mesh
                        key={i}
                        position={follower.position}
                        ref={(el) => {
                            if (el) {
                                const arr = $$(followersRef)
                                if (!arr.includes(el)) {
                                    arr.push(el)
                                    followersRef(arr)
                                }
                            }
                        }}
                    >
                        <coneGeometry args={[0.3, 1, 8]} />
                        <meshStandardMaterial color={follower.color} />
                    </mesh>
                ))}

                {/* Grid */}
                <gridHelper args={[30, 30, 0x444444, 0x222222]} />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[15, 15, 15]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Lookat