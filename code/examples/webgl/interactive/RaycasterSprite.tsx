/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_raycaster_sprite

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RaycasterSprite = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        const group = new THREE.Group()

        // Create sprites
        for (let i = 0; i < 50; i++) {
            const material = new THREE.SpriteMaterial({
                color: new THREE.Color().setHSL(i / 50, 1, 0.5),
            })
            const sprite = new THREE.Sprite(material)
            sprite.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            )
            sprite.scale.set(1, 1, 1)
            group.add(sprite)
        }

        scene.add(group)

        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            const intersects = raycaster.intersectObjects(group.children)
            if (intersects.length > 0) {
                console.log('Hit sprite:', intersects[0].object.position)
            }
        }

        window.addEventListener('click', handleClick)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            window.removeEventListener('click', handleClick)
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 25]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}