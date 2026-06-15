/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_modifier_edgesplit

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ModifierEdgesplit = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Edge split modifier visualization
        const geometry = new THREE.IcosahedronGeometry(2, 1)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            flatShading: true,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Wireframe overlay
        const wireGeom = new THREE.WireframeGeometry(geometry)
        const wireMat = new THREE.LineBasicMaterial({ color: 0xff6600 })
        const wire = new THREE.LineSegments(wireGeom, wireMat)
        group.add(wire)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}