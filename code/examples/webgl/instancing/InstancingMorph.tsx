/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_instancing_morph

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_instancing_morph from Three.js examples.
 * Demonstrates morph target animations with instanced meshes.
 * Uses 1024 horse models in a 32x32 grid with random animation offsets.
 *
 * Source: https://threejs.org/examples/webgl_instancing_morph.html
 * Note: Requires external model file (Horse.glb) - this is a simplified version
 */

export const InstancingMorph = () => {
    const { scenes } = useThree()
    const meshRef = $<THREE.InstancedMesh | null>(null)
    const timeOffsets = new Float32Array(1024)
    const offset = 50

    useEffect(() => {
        // Initialize time offsets
        for (let i = 0; i < 1024; i++) {
            timeOffsets[i] = Math.random() * 3
        }
    })

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Create instanced spheres as placeholder for horse model
        const geometry = new THREE.SphereGeometry(0.3, 16, 8)
        const material = new THREE.MeshStandardMaterial({ color: 0x8B4513 })

        const mesh = new THREE.InstancedMesh(geometry, material, 1024)
        mesh.castShadow = true

        const dummy = new THREE.Object3D()
        const color = new THREE.Color()

        // Create 32x32 grid
        let i = 0
        for (let x = 0; x < 32; x++) {
            for (let y = 0; y < 32; y++) {
                dummy.position.set(
                    offset - 3 * x,
                    0,
                    offset - 3 * y
                )
                dummy.updateMatrix()
                mesh.setMatrixAt(i, dummy.matrix)

                // Random color variation
                color.setHSL(Math.random() * 0.3 + 0.05, 0.5, 0.4 + Math.random() * 0.2)
                mesh.setColorAt(i, color)
                i++
            }
        }

        scene.add(mesh)
        meshRef(mesh)

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    useEffect(() => {
        let animationId: number
        const clock = new THREE.Clock()

        const animate = () => {
            const scene = $$(scenes)?.[0]
            const mesh = $$(meshRef)
            if (!scene || !mesh) {
                animationId = requestAnimationFrame(animate)
                return
            }

            const time = clock.getElapsedTime()
            const dummy = new THREE.Object3D()

            // Update positions with wave effect
            for (let i = 0; i < 1024; i++) {
                mesh.getMatrixAt(i, dummy.matrix)
                dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale)

                // Wave animation
                const row = Math.floor(i / 32)
                const col = i % 32
                dummy.position.y = Math.sin((time + timeOffsets[i]) * 2) * 0.5

                dummy.updateMatrix()
                mesh.setMatrixAt(i, dummy.matrix)
            }

            mesh.instanceMatrix.needsUpdate = true
            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x99DDFF)} fog={new THREE.Fog(0x99DDFF, 5000, 10000)}>
                <directionalLight args={[0xffffff, 1]} position={[200, 1000, 50]} />
                <hemisphereLight args={[0x99DDFF, 0x669933, 0.33]} />
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color={0x669933} />
                </mesh>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={100} far={10000} position={[50, 30, 50]} />
        </canvas3D>
    )
}

export default InstancingMorph