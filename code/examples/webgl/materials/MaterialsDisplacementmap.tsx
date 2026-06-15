/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_displacementmap

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsDisplacementmap = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Displacement map demo
        const geometry = new THREE.PlaneGeometry(5, 5, 128, 128)
        const positionAttr = geometry.attributes.position

        for (let i = 0; i < positionAttr.count; i++) {
            const x = positionAttr.getX(i)
            const y = positionAttr.getY(i)
            const z = Math.sin(x * 3) * Math.cos(y * 3) * 0.3
            positionAttr.setZ(i, z)
        }

        geometry.computeVertexNormals()

        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            wireframe: false,
            side: THREE.DoubleSide,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 2
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            material.wireframe = Math.sin(t) > 0
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
