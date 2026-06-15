/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Shadowmap = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Shadow mapping demo
        // Plane
        const planeGeom = new THREE.PlaneGeometry(20, 20)
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x888888 })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane)

        // Objects casting shadows
        const objects: THREE.Mesh[] = []

        // Sphere
        const sphereGeom = new THREE.SphereGeometry(1, 32, 32)
        const sphereMat = new THREE.MeshStandardMaterial({ color: 0xff0000 })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.set(-3, 1, 0)
        sphere.castShadow = true
        scene.add(sphere)
        objects.push(sphere)

        // Box
        const boxGeom = new THREE.BoxGeometry(1.5, 1.5, 1.5)
        const boxMat = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const box = new THREE.Mesh(boxGeom, boxMat)
        box.position.set(0, 0.75, 0)
        box.castShadow = true
        scene.add(box)
        objects.push(box)

        // Torus
        const torusGeom = new THREE.TorusGeometry(1, 0.3, 16, 32)
        const torusMat = new THREE.MeshStandardMaterial({ color: 0x0000ff })
        const torus = new THREE.Mesh(torusGeom, torusMat)
        torus.position.set(3, 1, 0)
        torus.castShadow = true
        scene.add(torus)
        objects.push(torus)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.position.y = 1 + Math.sin(t) * 0.5
            box.rotation.y = t * 0.5
            torus.rotation.x = t
            torus.rotation.y = t * 0.5
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
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}