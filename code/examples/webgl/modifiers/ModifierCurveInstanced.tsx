/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_modifier_curve_instanced

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ModifierCurveInstanced = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-5, 0, 0),
            new THREE.Vector3(0, 2, 2),
            new THREE.Vector3(5, 0, 0),
        ])

        // Instanced spheres along curve
        const count = 50
        const geometry = new THREE.SphereGeometry(0.1, 8, 8)

        for (let i = 0; i < count; i++) {
            const t = i / (count - 1)
            const point = curve.getPoint(t)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(t, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.copy(point)
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}