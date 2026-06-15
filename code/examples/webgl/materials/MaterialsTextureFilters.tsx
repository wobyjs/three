/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_texture_filters

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTextureFilters = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create texture with different filter modes
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')!

        // Draw checkerboard
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                ctx.fillStyle = (x + y) % 2 === 0 ? '#ffffff' : '#000000'
                ctx.fillRect(x * 8, y * 8, 8, 8)
            }
        }

        const filters = [
            { filter: THREE.NearestFilter, name: 'Nearest' },
            { filter: THREE.LinearFilter, name: 'Linear' },
        ]

        const geometries: THREE.Mesh[] = []

        filters.forEach(({ filter, name }, i) => {
            const texture = new THREE.CanvasTexture(canvas)
            texture.magFilter = filter
            texture.minFilter = filter
            texture.needsUpdate = true

            const geometry = new THREE.PlaneGeometry(3, 3)
            const material = new THREE.MeshBasicMaterial({ map: texture })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 0.5) * 4
            scene.add(mesh)
            geometries.push(mesh)
        })

        return () => {
            geometries.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                ;(mesh.material as THREE.MeshBasicMaterial).map?.dispose()
                mesh.material.dispose()
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