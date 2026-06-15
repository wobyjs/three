/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const PhysicsAmmoVolume = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <group ref={groupRef}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[3, 3, 3]} />
                        <meshStandardMaterial color={0x3498db} transparent opacity={0.7} />
                    </mesh>
                    <mesh position={[0, 4, 0]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color={0xe74c3c} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PhysicsAmmoVolume