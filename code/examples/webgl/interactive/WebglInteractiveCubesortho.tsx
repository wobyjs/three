/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglInteractiveCubesortho = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    <mesh position={[-2, 0, 0]}>
                        <boxGeometry args={[1.5, 1.5, 1.5]} />
                        <meshStandardMaterial color={0xe74c3c} />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <boxGeometry args={[1.5, 1.5, 1.5]} />
                        <meshStandardMaterial color={0x3498db} />
                    </mesh>
                </group>
            </scene>
            <orthographicCamera near={0.1} far={100} position={[0, 3, 8]} />
        </canvas3D>
    )
}

export default WebglInteractiveCubesortho