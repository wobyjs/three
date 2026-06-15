/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lensflares

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Lensflares = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Lens flare effect (simulated)
        const group = new THREE.Group()

        // Main light source
        const lightGeom = new THREE.SphereGeometry(0.5, 16, 16)
        const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffaa })
        const lightSource = new THREE.Mesh(lightGeom, lightMat)
        lightSource.position.set(0, 5, -10)
        group.add(lightSource)

        // Flare elements
        const flareColors = [0xffffaa, 0xffaa00, 0xff6600, 0xff0000]

        flareColors.forEach((color, i) => {
            const flareGeom = new THREE.PlaneGeometry(1 + i * 0.5, 1 + i * 0.5)
            const flareMat = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.3 - i * 0.05,
                side: THREE.DoubleSide,
            })
            const flare = new THREE.Mesh(flareGeom, flareMat)
            flare.position.set(
                i * 2 - 3,
                5 - i * 0.5,
                -10 + i
            )
            flare.lookAt(0, 0, 0)
            group.add(flare)
        })

        // Add some objects
        const boxGeom = new THREE.BoxGeometry(2, 2, 2)
        const boxMat = new THREE.MeshStandardMaterial({ color: 0x4488ff })
        const box = new THREE.Mesh(boxGeom, boxMat)
        box.position.set(0, 0, 0)
        group.add(box)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            lightSource.position.x = Math.sin(t * 0.5) * 5
            box.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 10]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[0, 5, -10]} intensity={2} color={0xffffaa} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual lens flare with Lensflare.js:
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js'

const textureLoader = new THREE.TextureLoader()
const textureFlare = textureLoader.load('lensflare.png')

const lensflare = new Lensflare()
lensflare.addElement(new LensflareElement(textureFlare, 700, 0, light.color))
lensflare.addElement(new LensflareElement(textureFlare, 60, 0.6))
lensflare.addElement(new LensflareElement(textureFlare, 70, 0.7))
lensflare.addElement(new LensflareElement(textureFlare, 120, 0.9))
lensflare.addElement(new LensflareElement(textureFlare, 70, 1.0))

light.add(lensflare)
*/