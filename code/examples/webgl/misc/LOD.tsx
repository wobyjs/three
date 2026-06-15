/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lod

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LOD = () => {
    const lodRef = $<THREE.LOD>()
    const { scene } = useThree()

    useEffect(() => {
        const lod = new THREE.LOD()

        // High detail - many segments
        const highGeom = new THREE.SphereGeometry(1, 64, 64)
        const highMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const highMesh = new THREE.Mesh(highGeom, highMat)
        lod.addLevel(highMesh, 0)

        // Medium detail
        const medGeom = new THREE.SphereGeometry(1, 32, 32)
        const medMat = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        const medMesh = new THREE.Mesh(medGeom, medMat)
        lod.addLevel(medMesh, 20)

        // Low detail
        const lowGeom = new THREE.SphereGeometry(1, 16, 16)
        const lowMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const lowMesh = new THREE.Mesh(lowGeom, lowMat)
        lod.addLevel(lowMesh, 50)

        scene.add(lod)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            lod.position.x = Math.sin(t) * 5
        }
        animate()

        return () => {
            scene.remove(lod)
            highGeom.dispose()
            highMat.dispose()
            medGeom.dispose()
            medMat.dispose()
            lowGeom.dispose()
            lowMat.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 80]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
