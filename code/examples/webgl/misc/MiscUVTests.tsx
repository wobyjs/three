/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_misc_uv_tests

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MiscUVTests = () => {
    const { scene } = useThree()

    useEffect(() => {
        // UV mapping tests
        const geometries = [
            new THREE.BoxGeometry(1.5, 1.5, 1.5),
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.CylinderGeometry(0.8, 0.8, 2, 32),
            new THREE.TorusGeometry(0.8, 0.3, 16, 32),
        ]

        // Create checkerboard texture
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')!

        const size = 32
        for (let y = 0; y < canvas.height; y += size) {
            for (let x = 0; x < canvas.width; x += size) {
                const isWhite = ((x / size) + (y / size)) % 2 === 0
                ctx.fillStyle = isWhite ? '#ffffff' : '#000000'
                ctx.fillRect(x, y, size, size)
            }
        }

        const texture = new THREE.CanvasTexture(canvas)

        const meshes: THREE.Mesh[] = []
        geometries.forEach((geom, i) => {
            const material = new THREE.MeshBasicMaterial({ map: texture })
            const mesh = new THREE.Mesh(geom, material)
            mesh.position.x = (i - 1.5) * 3
            scene.add(mesh)
            meshes.push(mesh)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            meshes.forEach((mesh, i) => {
                mesh.rotation.x = t * 0.2 + i
                mesh.rotation.y = t * 0.3 + i
            })
        }
        animate()

        return () => {
            meshes.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                ;(mesh.material as THREE.Material).dispose()
            })
            texture.dispose()
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
