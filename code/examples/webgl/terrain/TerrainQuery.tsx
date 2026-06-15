/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_terrain_query

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TerrainQuery = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(20, 20, 100, 100)
        const positionAttr = geometry.attributes.position

        // Generate heightmap
        const heights = new Float32Array(positionAttr.count)
        for (let i = 0; i < positionAttr.count; i++) {
            const x = positionAttr.getX(i)
            const y = positionAttr.getY(i)
            const h = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 2
            positionAttr.setZ(i, h)
            heights[i] = h
        }

        geometry.computeVertexNormals()

        const material = new THREE.MeshStandardMaterial({
            color: 0x4a8f29,
            wireframe: true,
            flatShading: true,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 2
        scene.add(mesh)

        // Query marker
        const markerGeom = new THREE.SphereGeometry(0.2, 16, 16)
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const marker = new THREE.Mesh(markerGeom, markerMat)
        scene.add(marker)

        const raycaster = new THREE.Raycaster()
        const mouse = new THREE.Vector2()

        const handleMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(mouse, scene.userData.camera as THREE.Camera)

            const intersects = raycaster.intersectObject(mesh)
            if (intersects.length > 0) {
                marker.position.copy(intersects[0].point)
                marker.position.y += 0.3
            }
        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            scene.remove(mesh)
            scene.remove(marker)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
