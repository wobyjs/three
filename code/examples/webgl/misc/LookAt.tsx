/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Euler } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_lookat from Three.js examples.
 * Demonstrates objects looking at targets.
 *
 * Source: https://threejs.org/examples/misc_lookat.html
 *
 * Key features:
 * - Object3D.lookAt() usage
 * - Multiple objects tracking a target
 * - Smooth rotation interpolation
 */

export const LookAt = () => {
    const targetRef = $<THREE.Mesh>()
    const followers: THREE.Mesh[] = []

    useEffect(() => {
        // Create follower meshes in a circle
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2
            const radius = 8

            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(1, 0.5, 2),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(i / 12, 0.7, 0.5)
                })
            )
            mesh.position.set(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            )
            followers.push(mesh)
        }
    })

    useFrame((state) => {
        const target = $$(targetRef)
        const time = state.clock?.getElapsedTime() ?? 0

        if (target) {
            // Animate target position
            target.position.x = Math.sin(time) * 3
            target.position.z = Math.cos(time * 0.7) * 3
            target.position.y = Math.sin(time * 1.3) * 2

            // Update followers to look at target
            followers.forEach(follower => {
                follower.lookAt(target.position)
            })
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />

                {/* Target */}
                <mesh ref={targetRef} position={[0, 0, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} emissive={0xff6b6b} emissiveIntensity={0.5} />
                </mesh>

                {/* Followers */}
                {followers.map((follower, i) => (
                    <primitive key={i} object={follower} />
                ))}

                {/* Ground */}
                <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 10, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default LookAt