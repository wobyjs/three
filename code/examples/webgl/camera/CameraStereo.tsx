/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_stereo

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CameraStereo = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Stereo camera effect (simulated)
        const group = new THREE.Group()

        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

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
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
