/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_compressed

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGLTFCompressed = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Compressed textures (basis/ktx2)
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)

        // Create a texture with compression simulation
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')!

        // Draw detailed pattern
        ctx.fillStyle = '#1a1a2e'
        ctx.fillRect(0, 0, 512, 512)

        for (let i = 0; i < 500; i++) {
            ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`
            ctx.beginPath()
            ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 20, 0, Math.PI * 2)
            ctx.fill()
        }

        const texture = new THREE.CanvasTexture(canvas)
        texture.minFilter = THREE.LinearMipmapLinearFilter
        texture.generateMipmaps = true

        const material = new THREE.MeshStandardMaterial({ 
            map: texture,
            metalness: 0.5,
            roughness: 0.5,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Example usage with compressed GLTF:
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'

const ktx2Loader = new KTX2Loader()
ktx2Loader.setTranscoderPath('lib/')
ktx2Loader.detectSupport(renderer)

const loader = new GLTFLoader()
loader.setKTX2Loader(ktx2Loader)
loader.load('model.glb', (gltf) => {
    scene.add(gltf.scene)
})
*/