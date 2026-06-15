/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglMaterialsCar = () => {
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xffffff} />
                <group ref={groupRef}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[3, 1, 1.5]} />
                        <meshPhysicalMaterial color={0xe74c3c} metalness={0.9} roughness={0.1} clearcoat={1} />
                    </mesh>
                    <mesh position={[0, 0.8, 0]}>
                        <boxGeometry args={[1.5, 0.8, 1.3]} />
                        <meshPhysicalMaterial color={0x333333} metalness={0.5} roughness={0.3} />
                    </mesh>
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 10]} />
        </canvas3D>
    )
}

export default WebglMaterialsCar