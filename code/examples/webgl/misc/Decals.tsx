/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_decals

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Decals = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        // Decal projection
        const geometry = new THREE.SphereGeometry(2, 32, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x4488ff })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        const decals: THREE.Mesh[] = []

        // Create decal texture
        const canvas = document.createElement('canvas')
        canvas.width = 128
        canvas.height = 128
        const ctx = canvas.getContext('2d')!

        ctx.fillStyle = '#ff0000'
        ctx.beginPath()
        ctx.arc(64, 64, 50, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 60px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('+', 64, 64)

        const decalTexture = new THREE.CanvasTexture(canvas)

        // Click to add decal
        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            const intersects = raycaster.intersectObject(sphere)
            if (intersects.length > 0) {
                const intersection = intersects[0]
                const decalGeom = new THREE.CircleGeometry(0.5, 16)
                const decalMat = new THREE.MeshBasicMaterial({
                    map: decalTexture,
                    transparent: true,
                    depthTest: true,
                })
                const decal = new THREE.Mesh(decalGeom, decalMat)
                decal.position.copy(intersection.point)
                decal.lookAt(camera.position)
                scene.add(decal)
                decals.push(decal)
            }
        }

        window.addEventListener('click', handleClick)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            window.removeEventListener('click', handleClick)
            scene.remove(sphere)
            decals.forEach(d => {
                scene.remove(d)
                d.geometry.dispose()
                ;(d.material as THREE.Material).dispose()
            })
            decalTexture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
