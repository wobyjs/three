/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_array

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CameraArray = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Multiple camera views (simulated)
        const group = new THREE.Group()

        // Central object
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Camera position indicators
        const cameraPositions = [
            { x: 5, y: 0, z: 0, color: 0xff0000 },
            { x: -5, y: 0, z: 0, color: 0x00ff00 },
            { x: 0, y: 5, z: 0, color: 0x0000ff },
            { x: 0, y: 0, z: 5, color: 0xffff00 },
        ]

        cameraPositions.forEach((pos) => {
            const camGeom = new THREE.ConeGeometry(0.2, 0.5, 8)
            const camMat = new THREE.MeshBasicMaterial({ color: pos.color })
            const camMesh = new THREE.Mesh(camGeom, camMat)
            camMesh.position.set(pos.x, pos.y, pos.z)
            camMesh.lookAt(0, 0, 0)
            group.add(camMesh)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[8, 8, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
