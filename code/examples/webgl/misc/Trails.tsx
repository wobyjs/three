/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_trails

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Trails = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Motion trails
        const trailLength = 50
        const trails: THREE.Mesh[] = []

        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
                transparent: true,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(i * 2 - 4, 0, 0)
            scene.add(mesh)
            trails.push(mesh)
        }

        // Trail history
        const history: THREE.Vector3[][] = trails.map(() => [])

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            trails.forEach((trail, i) => {
                // Move
                trail.position.y = Math.sin(t * 2 + i) * 3
                trail.position.x = i * 2 - 4 + Math.cos(t + i) * 2

                // Add to history
                history[i].push(trail.position.clone())

                // Fade old positions
                if (history[i].length > trailLength) {
                    history[i].shift()
                }

                // Create trail effect
                trail.material.opacity = 0.8
            })
        }
        animate()

        return () => {
            trails.forEach(trail => {
                scene.remove(trail)
                trail.geometry.dispose()
                trail.material.dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}