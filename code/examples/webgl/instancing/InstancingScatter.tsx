/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_instancing_scatter

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_instancing_scatter from Three.js examples.
 * Demonstrates MeshSurfaceSampler to distribute instances across a surface.
 * Uses flower-like geometries scattered on a torus knot surface with animated scaling.
 *
 * Source: https://threejs.org/examples/webgl_instancing_scatter.html
 * Note: Requires external model file (Flower.glb) - this is a simplified version
 */

export const InstancingScatter = () => {
    const { scenes } = useThree()
    const stemMeshRef = $<THREE.InstancedMesh | null>(null)
    const blossomMeshRef = $<THREE.InstancedMesh | null>(null)

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        const count = 2000

        // Create surface (torus knot as flower bed)
        const surfaceGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16).toNonIndexed()
        const surfaceMaterial = new THREE.MeshLambertMaterial({ color: 0xFFF784 })
        const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial)

        // Create stem geometry (cylinder)
        const stemGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 8)
        const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 })

        // Create blossom geometry (sphere)
        const blossomGeometry = new THREE.SphereGeometry(0.4, 16, 8)
        const blossomColors = [0xF20587, 0xF2D479, 0xF2C879, 0xF2B077, 0xF24405]
        const blossomMaterial = new THREE.MeshLambertMaterial({ color: 0xF20587 })

        const stemMesh = new THREE.InstancedMesh(stemGeometry, stemMaterial, count)
        const blossomMesh = new THREE.InstancedMesh(blossomGeometry, blossomMaterial, count)

        stemMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
        blossomMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)

        // Random colors for blossoms
        const color = new THREE.Color()
        for (let i = 0; i < count; i++) {
            color.setHex(blossomColors[Math.floor(Math.random() * blossomColors.length)])
            blossomMesh.setColorAt(i, color)
        }

        // Sample positions from surface
        const sampler = new THREE.MeshSurfaceSampler(surface).build()
        const dummy = new THREE.Object3D()
        const position = new THREE.Vector3()
        const normal = new THREE.Vector3()
        const ages = new Float32Array(count)
        const scales = new Float32Array(count)

        // Ease out cubic
        const easeOutCubic = (t: number) => (1 - t) * t * t + 1
        const scaleCurve = (t: number) => Math.abs(easeOutCubic((t > 0.5 ? 1 - t : t) * 2))

        for (let i = 0; i < count; i++) {
            ages[i] = Math.random()
            scales[i] = scaleCurve(ages[i])
            sampler.sample(position, normal)
            normal.add(position)

            dummy.position.copy(position)
            dummy.scale.set(scales[i], scales[i], scales[i])
            dummy.lookAt(normal)
            dummy.updateMatrix()

            stemMesh.setMatrixAt(i, dummy.matrix)
            blossomMesh.setMatrixAt(i, dummy.matrix)
        }

        scene.add(surface)
        scene.add(stemMesh)
        scene.add(blossomMesh)
        stemMeshRef(stemMesh)
        blossomMeshRef(blossomMesh)

        return () => {
            scene.remove(surface)
            scene.remove(stemMesh)
            scene.remove(blossomMesh)
            surfaceGeometry.dispose()
            surfaceMaterial.dispose()
            stemGeometry.dispose()
            stemMaterial.dispose()
            blossomGeometry.dispose()
            blossomMaterial.dispose()
        }
    })

    useEffect(() => {
        let animationId: number

        const animate = () => {
            const scene = $$(scenes)?.[0]
            const stemMesh = $$(stemMeshRef)
            const blossomMesh = $$(blossomMeshRef)

            if (scene && stemMesh && blossomMesh) {
                const time = Date.now() * 0.001

                scene.rotation.x = Math.sin(time / 4)
                scene.rotation.y = Math.sin(time / 2)

                // Update particles
                const dummy = new THREE.Object3D()
                const _scale = new THREE.Vector3()
                const position = new THREE.Vector3()
                const normal = new THREE.Vector3()

                // Simple surface for resampling
                const surface = new THREE.Mesh(new THREE.TorusKnotGeometry(10, 3, 100, 16), new THREE.MeshBasicMaterial())
                const sampler = new THREE.MeshSurfaceSampler(surface).build()

                const easeOutCubic = (t: number) => (1 - t) * t * t + 1
                const scaleCurve = (t: number) => Math.abs(easeOutCubic((t > 0.5 ? 1 - t : t) * 2))

                for (let i = 0; i < 2000; i++) {
                    const age = (Date.now() * 0.005 + i * 0.001) % 1
                    if (age < 0.005) {
                        sampler.sample(position, normal)
                        normal.add(position)
                        dummy.position.copy(position)
                        dummy.scale.setScalar(scaleCurve(age))
                        dummy.lookAt(normal)
                        dummy.updateMatrix()
                    } else {
                        stemMesh.getMatrixAt(i, dummy.matrix)
                        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale)
                        dummy.scale.multiplyScalar(0.99)
                    }

                    stemMesh.setMatrixAt(i, dummy.matrix)
                    blossomMesh.setMatrixAt(i, dummy.matrix)
                }

                stemMesh.instanceMatrix.needsUpdate = true
                blossomMesh.instanceMatrix.needsUpdate = true
                stemMesh.computeBoundingSphere()
                blossomMesh.computeBoundingSphere()
            }

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
            <scene background={new THREE.Color(0xE39469)}>
                <pointLight args={[0xAA8899, 2.5]} position={[50, -25, 75]} />
                <ambientLight args={[0xffffff, 3]} />
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[25, 25, 25]} />
        </canvas3D>
    )
}

export default InstancingScatter