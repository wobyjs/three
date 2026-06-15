/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_instancing_raycast

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_instancing_raycast from Three.js examples.
 * Demonstrates raycasting to detect hover over individual instances in an InstancedMesh.
 * Clicking or hovering over instances changes their color randomly.
 *
 * Source: https://threejs.org/examples/webgl_instancing_raycast.html
 */

export const InstancingRaycast = () => {
    const { scenes, cameras } = useThree()
    const meshRef = $<THREE.InstancedMesh | null>(null)
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2(1, 1)
    const color = new THREE.Color()
    const white = new THREE.Color(0xffffff)

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Get amount from URL or default to 10
        const urlParams = new URLSearchParams(window.location.search)
        const amount = parseInt(urlParams.get('1') || '10') || 10
        const count = Math.pow(amount, 3)

        const geometry = new THREE.IcosahedronGeometry(0.5, 3)
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff })

        const mesh = new THREE.InstancedMesh(geometry, material, count)

        let i = 0
        const offset = (amount - 1) / 2
        const matrix = new THREE.Matrix4()

        for (let x = 0; x < amount; x++) {
            for (let y = 0; y < amount; y++) {
                for (let z = 0; z < amount; z++) {
                    matrix.setPosition(offset - x, offset - y, offset - z)
                    mesh.setMatrixAt(i, matrix)
                    mesh.setColorAt(i, color)
                    i++
                }
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
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    })

    useEffect(() => {
        let animationId: number

        const animate = () => {
            const scene = $$(scenes)?.[0]
            const camera = $$(cameras)?.[0]
            const mesh = $$(meshRef)

            if (scene && camera && mesh) {
                raycaster.setFromCamera(mouse, camera)

                const intersection = raycaster.intersectObject(mesh)

                if (intersection.length > 0) {
                    const instanceId = intersection[0].instanceId

                    mesh.getColorAt(instanceId, color)

                    if (color.equals(white)) {
                        mesh.setColorAt(instanceId, color.setHex(Math.random() * 0xffffff))
                        mesh.instanceColor.needsUpdate = true
                    }
                }
            }

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
        }
    })

    const urlParams = new URLSearchParams(window.location.search)
    const amount = parseInt(urlParams.get('1') || '10') || 10

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <hemisphereLight args={[0xffffff, 0x888888, 3]} position={[0, 1, 0]} />
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[amount, amount, amount]} />
        </canvas3D>
    )
}

export default InstancingRaycast