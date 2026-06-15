/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_buffergeometry

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BufferGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/Line'
import '@woby/three/src/objects/LineSegments'

/**
 * Port of webgl_interactive_buffergeometry from Three.js examples.
 * Demonstrates raycasting against Lines and LineSegments.
 *
 * Source: https://threejs.org/examples/webgl_interactive_buffergeometry.html
 */

export const InteractiveBufferGeometry = () => {
    const { scenes, cameras } = useThree()
    const sphereInterRef = $<THREE.Mesh | null>(null)
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const radius = 100
    let theta = 0

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Create sphere for intersection indicator
        const interGeometry = new THREE.SphereGeometry(5)
        const interMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const sphereInter = new THREE.Mesh(interGeometry, interMaterial)
        sphereInter.visible = false
        scene.add(sphereInter)
        sphereInterRef(sphereInter)

        // Create line geometry with random walk
        const lineGeometry = new THREE.BufferGeometry()
        const points: number[] = []
        const point = new THREE.Vector3()
        const direction = new THREE.Vector3()

        for (let i = 0; i < 50; i++) {
            direction.x += Math.random() - 0.5
            direction.y += Math.random() - 0.5
            direction.z += Math.random() - 0.5
            direction.normalize().multiplyScalar(10)
            point.add(direction)
            points.push(point.x, point.y, point.z)
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))

        // Create multiple line objects
        const parentTransform = new THREE.Object3D()
        parentTransform.position.set(
            Math.random() * 40 - 20,
            Math.random() * 40 - 20,
            Math.random() * 40 - 20
        )
        parentTransform.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        )
        parentTransform.scale.set(
            Math.random() + 0.5,
            Math.random() + 0.5,
            Math.random() + 0.5
        )

        for (let i = 0; i < 50; i++) {
            const lineMaterial = new THREE.LineBasicMaterial({ color: Math.random() * 0xffffff })
            const object = Math.random() > 0.5
                ? new THREE.Line(lineGeometry.clone(), lineMaterial)
                : new THREE.LineSegments(lineGeometry.clone(), lineMaterial)

            object.position.set(
                Math.random() * 400 - 200,
                Math.random() * 400 - 200,
                Math.random() * 400 - 200
            )
            object.rotation.set(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            )
            object.scale.set(
                Math.random() + 0.5,
                Math.random() + 0.5,
                Math.random() + 0.5
            )

            parentTransform.add(object)
        }

        scene.add(parentTransform)

        raycaster.params.Line = { threshold: 3 }

        return () => {
            scene.remove(sphereInter)
            scene.remove(parentTransform)
            interGeometry.dispose()
            interMaterial.dispose()
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
            const scene = $$(scenes)?.[0]
            const camera = $$(cameras)?.[0]
            const sphereInter = $$(sphereInterRef)

            if (scene && camera && sphereInter) {
                theta += 0.1

                camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
                camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta))
                camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
                camera.lookAt(scene.position)
                camera.updateMatrixWorld()

                raycaster.setFromCamera(pointer, camera)

                // Find intersections with all children of the scene
                const intersects = raycaster.intersectObjects(scene.children, true)

                if (intersects.length > 0) {
                    sphereInter.visible = true
                    sphereInter.position.copy(intersects[0].point)
                } else {
                    sphereInter.visible = false
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
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)} />
            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, 0, 100]} />
        </canvas3D>
    )
}

export default InteractiveBufferGeometry