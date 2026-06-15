/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_points

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_interactive_points from Three.js examples.
 * Demonstrates raycasting for point cloud interaction.
 * Hovering over points enlarges them.
 *
 * Source: https://threejs.org/examples/webgl_interactive_points.html
 */

const PARTICLE_SIZE = 20

export const InteractivePoints = () => {
    const { scenes, cameras } = useThree()
    const particlesRef = $<THREE.Points | null>(null)
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    let INTERSECTED: number | null = null

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Create box geometry
        let boxGeometry = new THREE.BoxGeometry(200, 200, 200, 16, 16, 16)

        // Remove normal and uv attributes
        boxGeometry.deleteAttribute('normal')
        boxGeometry.deleteAttribute('uv')

        // Use simplified vertex merging
        const positionAttribute = boxGeometry.getAttribute('position')

        const colors: number[] = []
        const sizes: number[] = []
        const color = new THREE.Color()

        for (let i = 0; i < positionAttribute.count; i++) {
            color.setHSL(0.01 + 0.1 * (i / positionAttribute.count), 1.0, 0.5)
            colors.push(color.r, color.g, color.b)
            sizes.push(PARTICLE_SIZE * 0.5)
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', positionAttribute)
        geometry.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3))
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

        const material = new THREE.PointsMaterial({
            size: PARTICLE_SIZE,
            vertexColors: true,
            sizeAttenuation: false
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)
        particlesRef(particles)

        return () => {
            scene.remove(particles)
            geometry.dispose()
            material.dispose()
            boxGeometry.dispose()
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

        const animate = () => {
            const particles = $$(particlesRef)
            const camera = $$(cameras)?.[0]

            if (particles && camera) {
                particles.rotation.x += 0.0005
                particles.rotation.y += 0.001

                const geometry = particles.geometry
                const attributes = geometry.attributes

                raycaster.setFromCamera(pointer, camera)
                const intersects = raycaster.intersectObject(particles)

                if (intersects.length > 0) {
                    if (INTERSECTED !== intersects[0].index) {
                        attributes.size.array[INTERSECTED] = PARTICLE_SIZE

                        INTERSECTED = intersects[0].index

                        attributes.size.array[INTERSECTED] = PARTICLE_SIZE * 1.25
                        attributes.size.needsUpdate = true
                    }
                } else if (INTERSECTED !== null) {
                    attributes.size.array[INTERSECTED] = PARTICLE_SIZE
                    attributes.size.needsUpdate = true
                    INTERSECTED = null
                }
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
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene />
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, 0, 250]} />
        </canvas3D>
    )
}

export default InteractivePoints