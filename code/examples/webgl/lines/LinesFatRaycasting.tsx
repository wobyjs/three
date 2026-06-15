/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_fat_raycasting

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

export const LinesFatRaycasting = () => {
    const { scene, camera } = useThree()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    useEffect(() => {
        const positions = []
        const colors = []

        // Create multiple fat lines
        for (let i = 0; i < 10; i++) {
            const linePositions = []
            const lineColors = []

            for (let j = 0; j < 50; j++) {
                const t = j / 50
                const x = Math.cos(t * Math.PI * 4 + i) * 5
                const y = i * 0.5
                const z = Math.sin(t * Math.PI * 4 + i) * 5
                linePositions.push(x, y, z)

                const color = new THREE.Color().setHSL(i / 10, 1, 0.5)
                lineColors.push(color.r, color.g, color.b)
            }

            const geometry = new LineGeometry()
            geometry.setPositions(linePositions)
            geometry.setColors(lineColors)

            const material = new LineMaterial({
                color: 0xffffff,
                linewidth: 3,
                vertexColors: true,
                resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
            })

            const line = new Line2(geometry, material)
            line.computeLineDistances()
            scene.add(line)
        }

        // Click handler
        const handleClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, camera as THREE.Camera)

            // Raycast against lines
            const intersects = raycaster.intersectObjects(scene.children)
            if (intersects.length > 0) {
                console.log('Intersected at', intersects[0].point)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}