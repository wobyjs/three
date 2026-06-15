/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglInstancingScatter = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.2
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    {Array.from({ length: 30 }).map((_, i) => (
                        <mesh key={i} position={[Math.cos(i * 0.5) * 4, Math.sin(i * 0.5) * 4, (Math.random() - 0.5) * 2]}>
                            <sphereGeometry args={[0.15, 8, 8]} />
                            <meshStandardMaterial color={0xe74c3c} />
                        </mesh>
                    ))}
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
        </canvas3D>
    )
}

export default WebglInstancingScatter