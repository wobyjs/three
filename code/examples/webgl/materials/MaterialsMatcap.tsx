/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_matcap

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsMatcap = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create matcap texture procedurally
        const size = 256
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')!

        // Draw matcap sphere
        const centerX = size / 2
        const centerY = size / 2
        const radius = size / 2 - 10

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const dx = x - centerX
                const dy = y - centerY
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist <= radius) {
                    const nx = dx / radius
                    const ny = dy / radius
                    const nz = Math.sqrt(1 - nx * nx - ny * ny)
                    
                    const r = Math.floor((nx * 0.5 + 0.5) * 255)
                    const g = Math.floor((ny * 0.5 + 0.5) * 255)
                    const b = Math.floor((nz * 0.5 + 0.5) * 255)
                    
                    ctx.fillStyle = `rgb(${r},${g},${b})`
                    ctx.fillRect(x, y, 1, 1)
                }
            }
        }

        const matcapTexture = new THREE.CanvasTexture(canvas)

        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
            matcapTexture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
