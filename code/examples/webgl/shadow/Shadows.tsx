/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglShadows = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMap-enabled />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
                <group ref={groupRef}>
                    <mesh position={[-2, 1, 0]} castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0xe74c3c} />
                    </mesh>
                    <mesh position={[0, 1, 0]} castShadow>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color={0x3498db} />
                    </mesh>
                    <mesh position={[2, 1, 0]} castShadow>
                        <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
                        <meshStandardMaterial color={0x2ecc71} />
                    </mesh>
                </group>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                    <planeGeometry args={[15, 15]} />
                    <meshStandardMaterial color={0x7f8c8d} />
                </mesh>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 12]} />
        </canvas3D>
    )
}

export default WebglShadows