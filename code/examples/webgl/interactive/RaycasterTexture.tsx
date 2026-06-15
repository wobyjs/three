/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_raycaster_texture

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RaycasterTexture = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        const group = new THREE.Group()

        // Plane with texture
        const geometry = new THREE.PlaneGeometry(6, 6)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.5,
            roughness: 0.5,
        })
        const plane = new THREE.Mesh(geometry, material)
        group.add(plane)

        scene.add(group)

        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            const intersects = raycaster.intersectObject(plane)
            if (intersects.length > 0) {
                const uv = intersects[0].uv
                console.log('UV:', uv)
            }
        }

        window.addEventListener('click', handleClick)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            plane.rotation.y = Math.sin(t * 0.5) * 0.3
        }
        animate()

        return () => {
            window.removeEventListener('click', handleClick)
            scene.remove(group)
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