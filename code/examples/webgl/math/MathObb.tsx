/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_math_obb

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MathObb = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // OBB visualization
        const geometry = new THREE.BoxGeometry(2, 1, 3)
        const material = new THREE.MeshStandardMaterial({ color: 0x66aaff })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // OBB wireframe
        const wireframe = new THREE.WireframeGeometry(geometry)
        const wireMat = new THREE.LineBasicMaterial({ color: 0xff0000 })
        const wire = new THREE.LineSegments(wireframe, wireMat)
        group.add(wire)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.3
            group.rotation.x = Math.sin(t) * 0.2
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
            </scene>
            <orbitControls />
        </canvas3D>
    )
}