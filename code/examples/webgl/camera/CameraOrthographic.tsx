/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_orthographic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CameraOrthographic = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        for (let i = 0; i < 10; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 10, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 4.5) * 1.5
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <orthographicCamera zoom={50} position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
