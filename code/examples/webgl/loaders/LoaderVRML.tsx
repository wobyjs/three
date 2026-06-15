/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_vrml

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader'
import * as THREE from 'three'

export const LoaderVRML = () => {
    const vrmlSceneRef = $<THREE.Group>()
    const params = { asset: 'house' }

    const loader = new VRMLLoader()

    loader.load(`models/vrml/${params.asset}.wrl`, (object) => {
        vrmlSceneRef(object)
    })

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <ambientLight intensity={1.2} />
                <directionalLight position={[200, 200, 200]} intensity={2.0} />

                {$$(vrmlSceneRef)}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={10000000000} position={[-10, 5, 10]} />
            <orbitControls minDistance={1} maxDistance={200} enableDamping />
        </canvas3D>
    )
}