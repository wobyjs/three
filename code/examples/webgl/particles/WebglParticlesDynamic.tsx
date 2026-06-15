/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglParticlesDynamic = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = time * 0.2
            points.rotation.x = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[new Float32Array(Array.from({ length: 2000 }, (_, i) => {
                            const radius = 5 + Math.random() * 5
                            const theta = Math.random() * Math.PI * 2
                            const phi = Math.random() * Math.PI
                            return [radius * Math.sin(phi) * Math.cos(theta), radius * Math.sin(phi) * Math.sin(theta), radius * Math.cos(phi)]
                        }).flat()), 3]} />
                    </bufferGeometry>
                    <pointsMaterial color={0xe74c3c} size={0.08} />
                </points>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 15]} />
        </canvas3D>
    )
}

export default WebglParticlesDynamic