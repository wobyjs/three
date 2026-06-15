/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_raycast_texture

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RaycastTexture = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        // Raycasting on textured object
        const geometry = new THREE.PlaneGeometry(8, 8, 64, 64)

        // Create texture with grid
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')!

        ctx.fillStyle = '#222222'
        ctx.fillRect(0, 0, 512, 512)

        ctx.strokeStyle = '#444444'
        ctx.lineWidth = 1
        for (let i = 0; i <= 16; i++) {
            ctx.beginPath()
            ctx.moveTo(i * 32, 0)
            ctx.lineTo(i * 32, 512)
            ctx.moveTo(0, i * 32)
            ctx.lineTo(512, i * 32)
            ctx.stroke()
        }

        const texture = new THREE.CanvasTexture(canvas)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const plane = new THREE.Mesh(geometry, material)
        scene.add(plane)

        // Cursor marker
        const markerGeom = new THREE.SphereGeometry(0.2, 16, 16)
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const marker = new THREE.Mesh(markerGeom, markerMat)
        marker.visible = false
        scene.add(marker)

        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            const intersects = raycaster.intersectObject(plane)
            if (intersects.length > 0) {
                const point = intersects[0].point
                marker.position.copy(point)
                marker.visible = true

                // Highlight grid cell
                const uv = intersects[0].uv!
                const cellX = Math.floor(uv.x * 16)
                const cellY = Math.floor(uv.y * 16)

                ctx.fillStyle = '#666666'
                ctx.fillRect(cellX * 32, cellY * 32, 32, 32)
                texture.needsUpdate = true
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
            scene.remove(plane)
            scene.remove(marker)
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
