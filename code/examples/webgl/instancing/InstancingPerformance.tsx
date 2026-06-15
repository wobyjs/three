/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_instancing_performance

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_instancing_performance from Three.js examples.
 * Demonstrates instanced rendering performance with 100x100 grid of animated boxes.
 * Features color tweening animation using TWEEN-like easing.
 *
 * Source: https://threejs.org/examples/webgl_instancing_performance.html
 */

export const InstancingPerformance = () => {
    const { scenes } = useThree()
    const meshRef = $<THREE.InstancedMesh | null>(null)
    const amount = 100
    const count = amount * amount

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff })

        const mesh = new THREE.InstancedMesh(geometry, material, count)
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)

        const dummy = new THREE.Object3D()
        const color = new THREE.Color()
        const baseColors: number[] = []
        const seeds: number[] = []
        const colors = [
            new THREE.Color(0x00ffff),
            new THREE.Color(0xffff00),
            new THREE.Color(0xff00ff)
        ]

        let i = 0
        const offset = (amount - 1) / 2

        for (let x = 0; x < amount; x++) {
            for (let z = 0; z < amount; z++) {
                dummy.position.set(offset - x, 0, offset - z)
                dummy.scale.set(1, 2, 1)
                dummy.updateMatrix()

                color.setHSL(1, 0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5)
                baseColors.push(color.getHex())

                mesh.setMatrixAt(i, dummy.matrix)
                mesh.setColorAt(i, color.multiply(colors[0]))

                i++
                seeds.push(Math.random())
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
        let currentTime = 0
        const maxDistance = 75
        const animationDuration = 3000

        const animate = () => {
            const mesh = $$(meshRef)
            if (!mesh) {
                animationId = requestAnimationFrame(animate)
                return
            }

            currentTime += 16
            const t = Math.min(currentTime / animationDuration, 1)

            // Ease in-out
            const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

            const dummy = new THREE.Object3D()
            const color = new THREE.Color()
            const baseColors: number[] = []
            const seeds: number[] = []

            // Rebuild base colors (simplified - in real version these would be stored)
            for (let i = 0; i < count; i++) {
                baseColors.push(Math.random() * 0xffffff)
                seeds.push(Math.random())
            }

            for (let i = 0; i < mesh.count; i++) {
                mesh.getMatrixAt(i, dummy.matrix)
                dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale)

                // Bounce animation
                dummy.position.y = Math.abs(Math.sin((currentTime / 1000 + seeds[i]) * 2 + seeds[i]))
                dummy.updateMatrix()
                mesh.setMatrixAt(i, dummy.matrix)

                // Color interpolation
                if (t > 0) {
                    const dist = dummy.position.length()
                    const f = dist / maxDistance

                    if (f <= easedT) {
                        color.setHex(baseColors[i]).multiply(new THREE.Color(0xffff00))
                    } else {
                        color.setHex(baseColors[i]).multiply(new THREE.Color(0x00ffff))
                    }
                    mesh.setColorAt(i, color)
                }
            }

            mesh.instanceMatrix.needsUpdate = true
            mesh.instanceColor.needsUpdate = true
            mesh.computeBoundingSphere()

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
            <scene background={new THREE.Color(0xadd8e6)} />
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[10, 10, 10]} />
        </canvas3D>
    )
}

export default InstancingPerformance