/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_box

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LinesBox = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        for (let i = 0; i < 5; i++) {
            const size = 0.5 + i * 0.5
            const geometry = new THREE.BoxGeometry(size, size, size)
            const wireframe = new THREE.WireframeGeometry(geometry)

            const material = new THREE.LineBasicMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
            })

            const line = new THREE.LineSegments(wireframe, material)
            line.position.x = (i - 2) * 2
            group.add(line)
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
