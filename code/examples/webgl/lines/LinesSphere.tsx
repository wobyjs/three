/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_sphere

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LinesSphere = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Wireframe sphere
        const geometry = new THREE.SphereGeometry(3, 32, 32)
        const wireframe = new THREE.WireframeGeometry(geometry)

        const material = new THREE.LineBasicMaterial({
            color: 0x00aaff,
            transparent: true,
            opacity: 0.6,
        })

        const line = new THREE.LineSegments(wireframe, material)
        scene.add(line)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            line.rotation.x = t * 0.1
            line.rotation.y = t * 0.15
        }
        animate()

        return () => {
            scene.remove(line)
            geometry.dispose()
            wireframe.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
