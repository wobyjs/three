/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_modifier_simplifier

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ModifierSimplifier = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Geometry simplification
        const group = new THREE.Group()

        // High detail sphere
        const highGeom = new THREE.SphereGeometry(1.5, 64, 64)
        const highMat = new THREE.MeshStandardMaterial({
            color: 0x00ff00,
            wireframe: true,
        })
        const high = new THREE.Mesh(highGeom, highMat)
        high.position.x = -3
        group.add(high)

        // Medium detail
        const medGeom = new THREE.SphereGeometry(1.5, 16, 16)
        const medMat = new THREE.MeshStandardMaterial({
            color: 0xffff00,
            wireframe: true,
        })
        const med = new THREE.Mesh(medGeom, medMat)
        med.position.x = 0
        group.add(med)

        // Low detail
        const lowGeom = new THREE.SphereGeometry(1.5, 8, 8)
        const lowMat = new THREE.MeshStandardMaterial({
            color: 0xff6600,
            wireframe: true,
        })
        const low = new THREE.Mesh(lowGeom, lowMat)
        low.position.x = 3
        group.add(low)

        // Very low detail
        const veryLowGeom = new THREE.SphereGeometry(1.5, 4, 4)
        const veryLowMat = new THREE.MeshStandardMaterial({
            color: 0xff0000,
            wireframe: true,
        })
        const veryLow = new THREE.Mesh(veryLowGeom, veryLowMat)
        veryLow.position.x = 6
        group.add(veryLow)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual simplification modifier:
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier.js'

const modifier = new SimplifyModifier()
const simplified = modifier.modify(geometry, count)
*/