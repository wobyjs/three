/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const MiscBoxSelection = () => {
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
                    <mesh position={[-1, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0xe74c3c} />
                    </mesh>
                    <mesh position={[1, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x3498db} />
                    </mesh>
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
        </canvas3D>
    )
}

export default MiscBoxSelection