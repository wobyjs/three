/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_xyz

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader'
import * as THREE from 'three'

export const LoaderXYZ = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.x += 0.2 * (1 / 60)
            points.rotation.y += 0.5 * (1 / 60)
        }
    })

    const loader = new XYZLoader()
    const geometry = loader.load('models/xyz/helix_201.xyz')

    geometry.center()

    const vertexColors = geometry.hasAttribute('color') === true
    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <points ref={pointsRef}>
                    {geometry}
                    <pointsMaterial size={0.1} vertexColors={vertexColors} />
                </points>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[10, 7, 10]} />
        </canvas3D>
    )
}
