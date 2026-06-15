/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglParticlesWaves = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        if (points) points.rotation.y = time * 0.15
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[new Float32Array(Array.from({ length: 500 }, (_, i) => {
                            const x = (i % 50 - 25) * 0.3
                            const z = (Math.floor(i / 50) - 25) * 0.3
                            const y = Math.sin(x * 2 + z * 2) * 0.5
                            return [x, y, z]
                        }).flat()), 3]} />
                    </bufferGeometry>
                    <pointsMaterial color={0x2ecc71} size={0.1} />
                </points>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
        </canvas3D>
    )
}

export default WebglParticlesWaves