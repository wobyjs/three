/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglMultipleGeometries = () => {
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
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    <mesh position={[-3, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0xe74c3c} />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[0.6, 32, 32]} />
                        <meshStandardMaterial color={0x3498db} />
                    </mesh>
                    <mesh position={[3, 0, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
                        <meshStandardMaterial color={0x2ecc71} />
                    </mesh>
                    <mesh position={[-1.5, 2, 0]}>
                        <torusGeometry args={[0.5, 0.2, 16, 32]} />
                        <meshStandardMaterial color={0x9b59b6} />
                    </mesh>
                    <mesh position={[1.5, 2, 0]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color={0xf39c12} />
                    </mesh>
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 12]} />
        </canvas3D>
    )
}

export default WebglMultipleGeometries
