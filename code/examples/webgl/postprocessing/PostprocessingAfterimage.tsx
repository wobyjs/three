/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_afterimage

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingAfterimage = () => {
    const meshesRef = $<THREE.Mesh[]>()
    const { scene } = useThree()

    useEffect(() => {
        // Scene with afterimage (motion blur) effect
        const meshes: THREE.Mesh[] = []
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff]

        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8)
            const material = new THREE.MeshBasicMaterial({ color: colors[i] })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 2) * 2
            scene.add(mesh)
            meshes.push(mesh)
        }

        // Simple fade trail effect
        const trails: THREE.Mesh[] = []

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            meshes.forEach((mesh, i) => {
                mesh.position.y = Math.sin(t + i) * 2
                mesh.rotation.x = t * 2
                mesh.rotation.y = t * 3
            })
        }
        animate()

        return () => {
            meshes.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                ;(mesh.material as THREE.Material).dispose()
            })
            trails.forEach(mesh => {
                scene.remove(mesh)
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}