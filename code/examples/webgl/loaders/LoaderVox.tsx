/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_vox

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader'
import * as THREE from 'three'

export const LoaderVOX = () => {
    const meshRef = $<THREE.Mesh>()

    const loader = new VOXLoader()

    loader.load('models/vox/monu10.vox', (result: any) => {
        const mesh = result.scene.children[0]
        mesh.position.y = 0
        mesh.scale.setScalar(0.0015)
        meshRef(mesh)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <hemisphereLight args={[0xcccccc, 0x444444, 3]} />
                <directionalLight position={[1.5, 3, 2.5]} intensity={2.5} />
                <directionalLight position={[-1.5, -3, -2.5]} intensity={1.5} />

                {$$(meshRef)}
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.01} far={10} position={[0.175, 0.075, 0.175]} />
            <orbitControls minDistance={0.1} maxDistance={0.5} />
        </canvas3D>
    )
}
