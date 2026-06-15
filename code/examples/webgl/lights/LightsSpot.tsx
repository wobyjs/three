/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_spot

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightsSpot = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Floor
        const floorGeom = new THREE.PlaneGeometry(20, 20)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        floor.receiveShadow = true
        group.add(floor)

        // Objects
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(i * 2 - 4, 0.5, 0)
            mesh.castShadow = true
            mesh.receiveShadow = true
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && i > 0) {
                    child.rotation.y = t * 0.3 + i
                }
            })
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 10]} />
            <scene>
                <ambientLight intensity={0.2} />
                <spotLight 
                    position={[0, 10, 0]}
                    angle={Math.PI / 6}
                    penumbra={0.5}
                    intensity={2}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
