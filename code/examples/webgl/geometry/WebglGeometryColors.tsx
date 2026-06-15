/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_colors

import { $, $$, useEffect, useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const WebglGeometryColors = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const radius = 200

        const geometry1 = new THREE.IcosahedronGeometry(radius, 1)
        const count = geometry1.attributes.position.count
        const arrayType = typeof Float16Array !== 'undefined' ? Float16Array : Float32Array
        geometry1.setAttribute('color', new THREE.BufferAttribute(new arrayType(count * 3), 3))

        const geometry2 = geometry1.clone()
        const geometry3 = geometry1.clone()

        const color = new THREE.Color()
        const positions1 = geometry1.attributes.position
        const positions2 = geometry2.attributes.position
        const positions3 = geometry3.attributes.position
        const colors1 = geometry1.attributes.color
        const colors2 = geometry2.attributes.color
        const colors3 = geometry3.attributes.color

        for (let i = 0; i < count; i++) {
            color.setHSL((positions1.getY(i) / radius + 1) / 2, 1.0, 0.5, THREE.SRGBColorSpace)
            colors1.setXYZ(i, color.r, color.g, color.b)

            color.setHSL(0, (positions2.getY(i) / radius + 1) / 2, 0.5, THREE.SRGBColorSpace)
            colors2.setXYZ(i, color.r, color.g, color.b)

            color.setRGB(1, 0.8 - (positions3.getY(i) / radius + 1) / 2, 0, THREE.SRGBColorSpace)
            colors3.setXYZ(i, color.r, color.g, color.b)
        }

        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
            vertexColors: true,
            shininess: 0
        })

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
            transparent: true
        })

        const mesh1 = new THREE.Mesh(geometry1, material)
        const wireframe1 = new THREE.Mesh(geometry1, wireframeMaterial)
        mesh1.add(wireframe1)
        mesh1.position.x = -400
        mesh1.rotation.x = -1.87
        scene.add(mesh1)

        const mesh2 = new THREE.Mesh(geometry2, material)
        const wireframe2 = new THREE.Mesh(geometry2, wireframeMaterial)
        mesh2.add(wireframe2)
        mesh2.position.x = 400
        scene.add(mesh2)

        const mesh3 = new THREE.Mesh(geometry3, material)
        const wireframe3 = new THREE.Mesh(geometry3, wireframeMaterial)
        mesh3.add(wireframe3)
        scene.add(mesh3)

        // Shadow planes
        const createShadowPlane = (x: number) => {
            const canvas = document.createElement('canvas')
            canvas.width = 128
            canvas.height = 128
            const context = canvas.getContext('2d')!
            const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64)
            gradient.addColorStop(0.1, 'rgba(210,210,210,1)')
            gradient.addColorStop(1, 'rgba(255,255,255,1)')
            context.fillStyle = gradient
            context.fillRect(0, 0, 128, 128)

            const texture = new THREE.CanvasTexture(canvas)
            const material = new THREE.MeshBasicMaterial({ map: texture })
            const plane = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), material)
            plane.position.set(x, -250, 0)
            plane.rotation.x = -Math.PI / 2
            scene.add(plane)
            return plane
        }

        const shadow1 = createShadowPlane(0)
        const shadow2 = createShadowPlane(-400)
        const shadow3 = createShadowPlane(400)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            mesh1.rotation.y = t * 0.5
            mesh2.rotation.y = t * 0.5
            mesh3.rotation.y = t * 0.5
        }
        animate()

        return () => {
            scene.remove(mesh1, mesh2, mesh3, shadow1, shadow2, shadow3)
            geometry1.dispose()
            geometry2.dispose()
            geometry3.dispose()
            material.dispose()
            wireframeMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xffffff)}>
                <directionalLight intensity={3} position={[0, 0, 1]} />
            </scene>
            <perspectiveCamera fov={20} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, 0, 1800]} />
        </canvas3D>
    )
}

export default WebglGeometryColors