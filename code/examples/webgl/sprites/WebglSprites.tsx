/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglSprites = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.2
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <sprite key={i} position={[Math.cos(i * 0.5) * 3, Math.sin(i * 0.5) * 3, (Math.random() - 0.5) * 2]}>
                            <spriteMaterial color={0xe74c3c} />
                        </sprite>
                    ))}
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
        </canvas3D>
    )
}

export default WebglSprites