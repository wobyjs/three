/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap_viewer

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowmapViewer = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Shadow map visualization
        const planeGeom = new THREE.PlaneGeometry(20, 20)
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x888888 })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane)

        // Objects
        const objects: THREE.Mesh[] = []

        const sphereGeom = new THREE.SphereGeometry(1, 32, 32)
        const sphereMat = new THREE.MeshStandardMaterial({ color: 0xff0000 })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.set(-2, 1, 0)
        sphere.castShadow = true
        scene.add(sphere)
        objects.push(sphere)

        const boxGeom = new THREE.BoxGeometry(1.5, 1.5, 1.5)
        const boxMat = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const box = new THREE.Mesh(boxGeom, boxMat)
        box.position.set(2, 0.75, 0)
        box.castShadow = true
        scene.add(box)
        objects.push(box)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.position.y = 1 + Math.sin(t) * 0.5
            box.rotation.y = t * 0.5
        }
        animate()

        return () => {
            scene.remove(plane)
            objects.forEach(obj => scene.remove(obj))
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[5, 5, 10]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight 
                    position={[5, 10, 5]} 
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
