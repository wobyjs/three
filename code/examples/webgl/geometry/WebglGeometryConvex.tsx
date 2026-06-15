/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_convex

import { $, $$, useEffect, useThree } from '@woby/three'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import * as THREE from 'three'

export const WebglGeometryConvex = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        let dodecahedronGeometry = new THREE.DodecahedronGeometry(10)
        dodecahedronGeometry.deleteAttribute('normal')
        dodecahedronGeometry.deleteAttribute('uv')
        dodecahedronGeometry = BufferGeometryUtils.mergeVertices(dodecahedronGeometry)

        const vertices: THREE.Vector3[] = []
        const positionAttribute = dodecahedronGeometry.getAttribute('position')

        for (let i = 0; i < positionAttribute.count; i++) {
            const vertex = new THREE.Vector3()
            vertex.fromBufferAttribute(positionAttribute, i)
            vertices.push(vertex)
        }

        const pointsMaterial = new THREE.PointsMaterial({
            color: 0x0080ff,
            size: 1,
            alphaTest: 0.5
        })

        const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices)
        const points = new THREE.Points(pointsGeometry, pointsMaterial)
        group.add(points)

        const meshMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            opacity: 0.5,
            side: THREE.DoubleSide,
            transparent: true
        })

        const meshGeometry = new ConvexGeometry(vertices)
        const mesh = new THREE.Mesh(meshGeometry, meshMaterial)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y += 0.005
        }
        animate()

        return () => {
            scene.remove(group)
            dodecahedronGeometry.dispose()
            pointsGeometry.dispose()
            meshGeometry.dispose()
            pointsMaterial.dispose()
            meshMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x222222)}>
                <ambientLight intensity={0.666666} />
                <pointLight intensity={3} position={[0, 0, 0]} />
                <axesHelper args={[20]} />
            </scene>
            <perspectiveCamera fov={40} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[15, 20, 30]} />
            <orbitControls minDistance={20} maxDistance={50} maxPolarAngle={Math.PI / 2} />
        </canvas3D>
    )
}

export default WebglGeometryConvex