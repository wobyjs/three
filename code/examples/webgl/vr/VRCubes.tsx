/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const VRCubes = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.15
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <group ref={groupRef}>
                    {Array.from({ length: 27 }).map((_, i) => {
                        const x = (i % 3 - 1) * 2.2
                        const y = (Math.floor(i / 9) - 1) * 2.2
                        const z = (Math.floor(i / 3) % 3 - 1) * 2.2
                        return (
                            <mesh key={i} position={[x, y, z]}>
                                <boxGeometry args={[1.8, 1.8, 1.8]} />
                                <meshStandardMaterial color={i % 3 === 0 ? 0xe74c3c : i % 3 === 1 ? 0x2ecc71 : 0x3498db} />
                            </mesh>
                        )
                    })}
                </group>
            </scene>

            <perspectiveCamera fov={80} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default VRCubes