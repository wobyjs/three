/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const FPSGame = () => {
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
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[2, 1, 3]} />
                        <meshStandardMaterial color={0x3498db} />
                    </mesh>
                </group>
                <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color={0x2ecc71} />
                </mesh>
            </scene>
            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[0, 1.5, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FPSGame