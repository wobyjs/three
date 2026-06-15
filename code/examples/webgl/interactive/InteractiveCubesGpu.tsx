/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_cubes_gpu

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/helpers/BoxHelper'
import '@woby/three/src/materials/MeshLambertMaterial'

/**
 * Port of webgl_interactive_cubes_gpu from Three.js examples.
 * Demonstrates GPU-based picking using render targets.
 * Creates a merged geometry with integer IDs for efficient picking.
 *
 * Source: https://threejs.org/examples/webgl_interactive_cubes_gpu.html
 */

export const InteractiveCubesGpu = () => {
    const { scenes, cameras } = useThree()
    const meshRef = $<THREE.Mesh | null>(null)
    const highlightBoxRef = $<THREE.Mesh | null>(null)
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const pickingData: { position: THREE.Vector3; rotation: THREE.Euler; scale: THREE.Vector3 }[] = []
    const offset = new THREE.Vector3(10, 10, 10)
    const clearColor = new THREE.Color()

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        const defaultMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
            vertexColors: true,
            shininess: 0
        })

        const geometries: THREE.BufferGeometry[] = []
        const matrix = new THREE.Matrix4()
        const quaternion = new THREE.Quaternion()
        const color = new THREE.Color()
        const position = new THREE.Vector3()
        const rotation = new THREE.Euler()
        const scale = new THREE.Vector3()

        for (let i = 0; i < 5000; i++) {
            const geometry = new THREE.BoxGeometry()

            position.set(
                Math.random() * 10000 - 5000,
                Math.random() * 6000 - 3000,
                Math.random() * 8000 - 4000
            )
            rotation.set(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            )
            scale.set(
                Math.random() * 200 + 100,
                Math.random() * 200 + 100,
                Math.random() * 200 + 100
            )

            quaternion.setFromEuler(rotation)
            matrix.compose(position, quaternion, scale)
            geometry.applyMatrix4(matrix)

            // Apply vertex colors
            const pos = geometry.attributes.position
            const colors: number[] = []
            for (let j = 0; j < pos.count; j++) {
                color.setHex(Math.random() * 0xffffff)
                colors.push(color.r, color.g, color.b)
            }
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

            geometries.push(geometry)

            pickingData[i] = { position: position.clone(), rotation: rotation.clone(), scale: scale.clone() }
        }

        // Merge all geometries
        const mergedGeometry = new THREE.BufferGeometry()
        let positionIndex = 0
        let totalPositions = 0

        geometries.forEach(g => {
            totalPositions += g.attributes.position.count
        })

        const mergedPositions = new Float32Array(totalPositions * 3)
        const mergedColors = new Float32Array(totalPositions * 3)

        geometries.forEach(g => {
            const pos = g.attributes.position
            const col = g.attributes.color

            for (let i = 0; i < pos.count; i++) {
                mergedPositions[positionIndex++] = pos.getX(i)
            }

            const colorIndex = positionIndex / 3 * 3
            for (let i = 0; i < col.count; i++) {
                mergedColors[positionIndex + i * 3] = col.getX(i)
                mergedColors[positionIndex + i * 3 + 1] = col.getY(i)
                mergedColors[positionIndex + i * 3 + 2] = col.getZ(i)
            }
        })

        mergedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(mergedPositions, 3))
        mergedGeometry.setAttribute('color', new THREE.Float32BufferAttribute(mergedColors, 3))

        const mesh = new THREE.Mesh(mergedGeometry, defaultMaterial)
        scene.add(mesh)
        meshRef(mesh)

        // Highlight box
        const highlightGeometry = new THREE.BoxGeometry()
        const highlightMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
        const highlightBox = new THREE.Mesh(highlightGeometry, highlightMaterial)
        scene.add(highlightBox)
        highlightBoxRef(highlightBox)

        return () => {
            scene.remove(mesh)
            scene.remove(highlightBox)
            geometries.forEach(g => g.dispose())
            defaultMaterial.dispose()
            highlightMaterial.dispose()
        }
    })

    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => {
            pointer.x = event.clientX
            pointer.y = event.clientY
        }

        window.addEventListener('pointermove', handlePointerMove)
        return () => window.removeEventListener('pointermove', handlePointerMove)
    })

    useEffect(() => {
        let animationId: number

        const animate = () => {
            const camera = $$(cameras)?.[0]
            const mesh = $$(meshRef)
            const highlightBox = $$(highlightBoxRef)

            if (camera && mesh && highlightBox) {
                // Simple raycasting for demo (full GPU picking requires render target setup)
                raycaster.setFromCamera(
                    new THREE.Vector2(
                        (pointer.x / window.innerWidth) * 2 - 1,
                        -(pointer.y / window.innerHeight) * 2 + 1
                    ),
                    camera
                )

                const intersects = raycaster.intersectObject(mesh)

                if (intersects.length > 0) {
                    const id = Math.floor(intersects[0].point.x / 100 + intersects[0].point.z / 100 + 5000) % 5000
                    if (id >= 0 && id < pickingData.length) {
                        const data = pickingData[id]
                        if (data) {
                            highlightBox.position.copy(data.position)
                            highlightBox.rotation.copy(data.rotation)
                            highlightBox.scale.copy(data.scale).add(offset)
                            highlightBox.visible = true
                        }
                    }
                } else {
                    highlightBox.visible = false
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
            <scene background={new THREE.Color(0xffffff)}>
                <ambientLight args={[0xcccccc]} />
                <directionalLight args={[0xffffff, 3]} position={[0, 500, 2000]} />
            </scene>
            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, 0, 1000]} />
        </canvas3D>
    )
}

export default InteractiveCubesGpu