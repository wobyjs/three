/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_raycaster_bvh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RaycasterBvh = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        const group = new THREE.Group()

        // Create BVH-accelerated scene
        for (let i = 0; i < 100; i++) {
            const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 100, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            )
            group.add(mesh)
        }

        scene.add(group)

        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            const intersects = raycaster.intersectObjects(group.children)
            if (intersects.length > 0) {
                console.log('Hit:', intersects[0].object.position)
            }
        }

        window.addEventListener('click', handleClick)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            window.removeEventListener('click', handleClick)
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 30]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}