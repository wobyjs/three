/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_modifier_subdivision

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ModifierSubdivision = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Subdivision surface modifier
        const group = new THREE.Group()

        // Original low-poly cube
        const cubeGeom = new THREE.BoxGeometry(2, 2, 2)
        const cubeMat = new THREE.MeshStandardMaterial({
            color: 0xff6600,
            wireframe: true,
        })
        const cube = new THREE.Mesh(cubeGeom, cubeMat)
        cube.position.x = -3
        group.add(cube)

        // Subdivided version (simulated with higher detail)
        const subdivGeom = new THREE.BoxGeometry(2, 2, 2, 4, 4, 4)
        const subdivMat = new THREE.MeshStandardMaterial({
            color: 0x0066ff,
            wireframe: true,
        })
        const subdiv = new THREE.Mesh(subdivGeom, subdivMat)
        subdiv.position.x = 0
        group.add(subdiv)

        // Higher subdivision
        const highGeom = new THREE.BoxGeometry(2, 2, 2, 8, 8, 8)
        const highMat = new THREE.MeshStandardMaterial({
            color: 0x00ff66,
            wireframe: true,
        })
        const high = new THREE.Mesh(highGeom, highMat)
        high.position.x = 3
        group.add(high)

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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual subdivision modifier:
import { SubdivisionModifier } from 'three/examples/jsm/modifiers/SubdivisionModifier.js'

const modifier = new SubdivisionModifier(2)
const subdivided = modifier.modify(geometry)
*/