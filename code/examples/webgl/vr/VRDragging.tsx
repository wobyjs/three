/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const VRDragging = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.position.y = 1 + Math.sin(time * 2) * 0.3
            mesh.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <mesh ref={meshRef} position={[0, 1, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xf1c40f} metalness={0.8} roughness={0.2} />
                </mesh>

                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={80} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default VRDragging