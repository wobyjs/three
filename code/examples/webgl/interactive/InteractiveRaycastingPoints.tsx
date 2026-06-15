/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_raycasting_points

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_interactive_raycasting_points from Three.js examples.
 * Demonstrates raycasting against multiple point clouds with different configurations.
 *
 * Source: https://threejs.org/examples/webgl_interactive_raycasting_points.html
 */

const threshold = 0.1
const pointSize = 0.05
const width = 80
const length = 160

export const InteractiveRaycastingPoints = () => {
    const { scenes, cameras } = useThree()
    const pointcloudsRef = $<THREE.Points[] | null>(null)
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const spheres: THREE.Mesh[] = []
    let spheresIndex = 0
    let toggle = 0
    let intersection: THREE.Intersection | null = null

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Generate point cloud
        const generatePointCloudGeometry = (color: THREE.Color, width: number, length: number) => {
            const geometry = new THREE.BufferGeometry()
            const numPoints = width * length

            const positions = new Float32Array(numPoints * 3)
            const colors = new Float32Array(numPoints * 3)

            let k = 0

            for (let i = 0; i < width; i++) {
                for (let j = 0; j < length; j++) {
                    const u = i / width
                    const v = j / length
                    const x = u - 0.5
                    const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20
                    const z = v - 0.5

                    positions[3 * k] = x
                    positions[3 * k + 1] = y
                    positions[3 * k + 2] = z

                    const intensity = (y + 0.1) * 5
                    colors[3 * k] = color.r * intensity
                    colors[3 * k + 1] = color.g * intensity
                    colors[3 * k + 2] = color.b * intensity

                    k++
                }
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
            geometry.computeBoundingBox()

            return geometry
        }

        const generatePointcloud = (color: THREE.Color, width: number, length: number) => {
            const geometry = generatePointCloudGeometry(color, width, length)
            const material = new THREE.PointsMaterial({ size: pointSize, vertexColors: true })

            return new THREE.Points(geometry, material)
        }

        const pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), width, length)
        pcBuffer.scale.set(5, 10, 10)
        pcBuffer.position.set(-5, 0, 0)
        scene.add(pcBuffer)

        const pcIndexed = generatePointcloud(new THREE.Color(0, 1, 0), width, length)
        pcIndexed.scale.set(5, 10, 10)
        pcIndexed.position.set(0, 0, 0)
        scene.add(pcIndexed)

        const pcIndexedOffset = generatePointcloud(new THREE.Color(0, 1, 1), width, length)
        pcIndexedOffset.scale.set(5, 10, 10)
        pcIndexedOffset.position.set(5, 0, 0)
        scene.add(pcIndexedOffset)

        const pointclouds = [pcBuffer, pcIndexed, pcIndexedOffset]
        pointcloudsRef(pointclouds)

        // Spheres for intersection markers
        const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32)
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

        for (let i = 0; i < 40; i++) {
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
            scene.add(sphere)
            spheres.push(sphere)
        }

        raycaster.params.Points = { threshold: threshold }

        return () => {
            pointclouds.forEach(p => {
                scene.remove(p)
                p.geometry.dispose()
                ;(p.material as THREE.PointsMaterial).dispose()
            })
            spheres.forEach(s => {
                scene.remove(s)
                s.geometry.dispose()
                ;(s.material as THREE.MeshBasicMaterial).dispose()
            })
        }
    })

    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('pointermove', handlePointerMove)
        return () => window.removeEventListener('pointermove', handlePointerMove)
    })

    useEffect(() => {
        let animationId: number
        const rotateY = new THREE.Matrix4().makeRotationY(0.005)

        const animate = () => {
            const camera = $$(cameras)?.[0]
            const pointclouds = $$(pointcloudsRef)

            if (camera && pointclouds) {
                camera.applyMatrix4(rotateY)
                camera.updateMatrixWorld()

                raycaster.setFromCamera(pointer, camera)

                const intersections = raycaster.intersectObjects(pointclouds, false)
                intersection = intersections.length > 0 ? intersections[0] : null

                if (toggle > 0.02 && intersection !== null) {
                    spheres[spheresIndex].position.copy(intersection.point)
                    spheres[spheresIndex].scale.set(1, 1, 1)
                    spheresIndex = (spheresIndex + 1) % spheres.length

                    toggle = 0
                }

                for (let i = 0; i < spheres.length; i++) {
                    const sphere = spheres[i]
                    sphere.scale.multiplyScalar(0.98)
                    sphere.scale.clampScalar(0.01, 1)
                }

                toggle += 0.016
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
            <scene />
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[10, 10, 10]} />
        </canvas3D>
    )
}

export default InteractiveRaycastingPoints