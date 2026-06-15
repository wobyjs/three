/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_textures_cube

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TexturesCube = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create cube map texture
        const loader = new THREE.CubeTextureLoader()
        
        // Create simple colored faces for cube map
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        const images: HTMLCanvasElement[] = colors.map(color => {
            const canvas = document.createElement('canvas')
            canvas.width = 256
            canvas.height = 256
            const ctx = canvas.getContext('2d')!
            ctx.fillStyle = color
            ctx.fillRect(0, 0, 256, 256)
            ctx.fillStyle = '#ffffff'
            ctx.font = '48px Arial'
            ctx.textAlign = 'center'
            ctx.fillText('FACE', 128, 140)
            return canvas
        })

        const cubeTexture = new THREE.CubeTexture(images)
        cubeTexture.needsUpdate = true

        // Skybox
        const skyGeom = new THREE.BoxGeometry(100, 100, 100)
        const skyMat = new THREE.MeshBasicMaterial({ 
            envMap: cubeTexture, 
            side: THREE.BackSide 
        })
        const sky = new THREE.Mesh(skyGeom, skyMat)
        scene.add(sky)

        // Reflective object
        const sphereGeom = new THREE.SphereGeometry(2, 64, 64)
        const sphereMat = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
            envMap: cubeTexture,
        })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        scene.add(sphere)

        return () => {
            scene.remove(sky)
            scene.remove(sphere)
            skyGeom.dispose()
            skyMat.dispose()
            sphereGeom.dispose()
            sphereMat.dispose()
            cubeTexture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
