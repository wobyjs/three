/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const PostprocessingDof2 = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <group ref={groupRef}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <mesh key={i} position={[(i - 2) * 4, 0, (i - 2) * 2]}>
                            <cylinderGeometry args={[0.8, 0.8, 3, 16]} />
                            <meshStandardMaterial color={i % 2 === 0 ? 0xe74c3c : 0x3498db} />
                        </mesh>
                    ))}
                </group>
            </scene>

            <perspectiveCamera fov={35} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PostprocessingDof2