/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_rectarealight

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightsRectarealight = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Floor
        const floorGeom = new THREE.PlaneGeometry(10, 10)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        group.add(floor)

        // Objects
        const sphereGeom = new THREE.SphereGeometry(1.5, 32, 32)
        const sphereMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.3,
            metalness: 0.7,
        })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.y = 1.5
        group.add(sphere)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 8]} />
            <scene>
                <ambientLight intensity={0.1} />
                <rectAreaLight 
                    position={[-3, 5, -3]}
                    width={3}
                    height={3}
                    color={0xff8800}
                    intensity={5}
                />
                <rectAreaLight 
                    position={[3, 5, 3]}
                    width={3}
                    height={3}
                    color={0x0088ff}
                    intensity={5}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
