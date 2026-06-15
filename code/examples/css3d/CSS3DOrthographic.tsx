/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

export const CSS3DOrthographic = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.x = time * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial color={0x2ecc71} />
                    </mesh>
                </group>
            </scene>
            <orthographicCamera near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CSS3DOrthographic
