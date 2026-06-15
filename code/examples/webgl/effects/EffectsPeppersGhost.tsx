/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_peppersghost

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const EffectsPeppersGhost = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Pepper's ghost hologram effect
        const group = new THREE.Group()

        // Central object
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 64, 16)
        const material = new THREE.MeshStandardMaterial({
            color: 0x00aaff,
            emissive: 0x00aaff,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Reflection planes (simplified)
        const planeGeom = new THREE.PlaneGeometry(3, 3)
        const planeMat = new THREE.MeshBasicMaterial({
            color: 0x00aaff,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide,
        })

        const angles = [0, Math.PI / 2, Math.PI, Math.PI * 1.5]
        angles.forEach(angle => {
            const plane = new THREE.Mesh(planeGeom, planeMat)
            plane.rotation.y = angle
            plane.position.x = Math.sin(angle) * 2
            plane.position.z = Math.cos(angle) * 2
            group.add(plane)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 6]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
