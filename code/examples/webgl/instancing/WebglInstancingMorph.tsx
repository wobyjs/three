/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglInstancingMorph = () => {
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
                    {Array.from({ length: 10 }).map((_, i) => (
                        <mesh key={i} position={[Math.cos(i * Math.PI / 5) * 3, 0, Math.sin(i * Math.PI / 5) * 3]}>
                            <boxGeometry args={[0.8, 0.8, 0.8]} />
                            <meshStandardMaterial color={0xe74c3c} />
                        </mesh>
                    ))}
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
        </canvas3D>
    )
}

export default WebglInstancingMorph