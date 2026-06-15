/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_convex

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/lib/examples/jsm/controls/OrbitControls'
import { ConvexGeometry } from '@woby/three/lib/examples/jsm/geometries/ConvexGeometry'
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js'
import * as THREE from 'three'

export const GeometryConvex = () => {
  const groupRef = $<THREE.Group>()

  useFrame(() => {
    const group = $$(groupRef)
    if (group) {
      group.rotation.y += 0.005
    }
  })

  return (
    <Canvas3D camera={{ type: 'perspective', fov: 40, near: 1, far: 1000, position: [15, 20, 30] }}>
      <ambientLight intensity={0.666666} />
      <pointLight intensity={3} position={[0, 0, 0]} />

      <axesHelper args={[20]} />

      <group ref={groupRef}>
        {/* Points and convex hull mesh will be generated */}
        <points>
          <bufferGeometry args={[() => {
            // Generate dodecahedron vertices
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

            const geometry = new THREE.BufferGeometry().setFromPoints(vertices)
            return geometry
          }]} />
          <pointsMaterial args={[{ color: 0x0080ff, size: 1, alphaTest: 0.5 }]}>
            <textureLoader args={['textures/sprites/disc.png']} />
          </pointsMaterial>
        </points>

        <mesh>
          <ConvexGeometry args={[() => {
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

            return vertices
          }]} />
          <meshLambertMaterial args={[{ color: 0xffffff, opacity: 0.5, side: THREE.DoubleSide, transparent: true }]} />
        </mesh>
      </group>

      <OrbitControls minDistance={20} maxDistance={50} maxPolarAngle={Math.PI / 2} />
    </Canvas3D>
  )
}

export default GeometryConvex
