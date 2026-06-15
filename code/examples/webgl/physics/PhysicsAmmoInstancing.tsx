/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const PhysicsAmmoInstancing = () => {
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
                    {Array.from({ length: 50 }).map((_, i) => (
                        <mesh key={i} position={[(Math.random() - 0.5) * 10, Math.random() * 5 + 1, (Math.random() - 0.5) * 10]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshStandardMaterial color={0x3498db} />
                        </mesh>
                    ))}
                </group>

                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PhysicsAmmoInstancing