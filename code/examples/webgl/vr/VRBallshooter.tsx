/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const VRBallshooter = () => {
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

                <group ref={groupRef}>
                    <mesh>
                        <boxGeometry args={[10, 0.2, 10]} />
                        <meshStandardMaterial color={0x222222} />
                    </mesh>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <mesh key={i} position={[(Math.random() - 0.5) * 8, 0.5 + Math.random() * 2, (Math.random() - 0.5) * 8]}>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshStandardMaterial color={i % 2 === 0 ? 0xe74c3c : 0x3498db} />
                        </mesh>
                    ))}
                </group>
            </scene>

            <perspectiveCamera fov={80} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default VRBallshooter