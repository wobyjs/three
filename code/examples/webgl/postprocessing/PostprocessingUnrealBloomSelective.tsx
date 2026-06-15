/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const PostprocessingUnrealBloomSelective = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.y = time * 0.2
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <mesh ref={meshRef}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} emissive={0xff6b6b} emissiveIntensity={0.8} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x3498db} />
                </mesh>

                <mesh position={[3, 0, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
                    <meshStandardMaterial color={0x2ecc71} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PostprocessingUnrealBloomSelective