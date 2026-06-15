/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_voxelpainter

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/helpers/GridHelper'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_interactive_voxelpainter from Three.js examples.
 * Demonstrates voxel painting - click to add cubes, Shift+click to remove.
 *
 * Source: https://threejs.org/examples/webgl_interactive_voxelpainter.html
 */

export const InteractiveVoxelpainter = () => {
    const { scenes, cameras } = useThree()
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    let isShiftDown = false
    const objects: THREE.Object3D[] = []

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        // Roll-over helper
        const rollOverGeo = new THREE.BoxGeometry(50, 50, 50)
        const rollOverMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            opacity: 0.5,
            transparent: true
        })
        const rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial)
        scene.add(rollOverMesh)

        // Cubes
        const cubeGeo = new THREE.BoxGeometry(50, 50, 50)
        const cubeMaterial = new THREE.MeshLambertMaterial({
            color: 0xfeb74c,
            map: new THREE.TextureLoader().load('textures/square-outline-textured.png')
        })

        // Grid
        const gridHelper = new THREE.GridHelper(1000, 20)
        scene.add(gridHelper)

        // Plane (invisible, for raycasting)
        const geometry = new THREE.PlaneGeometry(1000, 1000)
        geometry.rotateX(-Math.PI / 2)

        const plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ visible: false }))
        scene.add(plane)

        objects.push(plane)

        const handlePointerMove = (event: MouseEvent) => {
            pointer.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            )

            const camera = $$(cameras)?.[0]
            if (!camera) return

            raycaster.setFromCamera(pointer, camera)

            const intersects = raycaster.intersectObjects(objects, false)

            if (intersects.length > 0) {
                const intersect = intersects[0]
                rollOverMesh.position.copy(intersect.point).add(intersect.face.normal)
                rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)
            }
        }

        const handlePointerDown = (event: MouseEvent) => {
            pointer.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            )

            const camera = $$(cameras)?.[0]
            if (!camera) return

            raycaster.setFromCamera(pointer, camera)

            const intersects = raycaster.intersectObjects(objects, false)

            if (intersects.length > 0) {
                const intersect = intersects[0]

                if (isShiftDown) {
                    if (intersect.object !== plane) {
                        scene.remove(intersect.object)
                        objects.splice(objects.indexOf(intersect.object), 1)
                    }
                } else {
                    const voxel = new THREE.Mesh(cubeGeo, cubeMaterial.clone())
                    voxel.position.copy(intersect.point).add(intersect.face.normal)
                    voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)
                    scene.add(voxel)
                    objects.push(voxel)
                }
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.keyCode) {
                case 16:
                    isShiftDown = true
                    break
            }
        }

        const handleKeyUp = (event: KeyboardEvent) => {
            switch (event.keyCode) {
                case 16:
                    isShiftDown = false
                    break
            }
        }

        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerdown', handlePointerDown)
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerdown', handlePointerDown)
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)

            scene.remove(rollOverMesh)
            scene.remove(gridHelper)
            scene.remove(plane)
            rollOverGeo.dispose()
            rollOverMaterial.dispose()
            cubeGeo.dispose()
            cubeMaterial.dispose()
            geometry.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)}>
                <ambientLight args={[0x606060, 3]} />
                <directionalLight args={[0xffffff, 3]} position={[1, 0.75, 0.5]} />
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[500, 800, 1300]} />
        </canvas3D>
    )
}

export default InteractiveVoxelpainter