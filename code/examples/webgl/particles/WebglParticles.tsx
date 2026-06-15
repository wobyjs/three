/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglParticles = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        if (points) points.rotation.y = time * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[new Float32Array(Array.from({ length: 1000 }, () => (Math.random() - 0.5) * 20)), 3]} />
                    </bufferGeometry>
                    <pointsMaterial color={0x3498db} size={0.05} />
                </points>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
        </canvas3D>
    )
}

export default WebglParticles