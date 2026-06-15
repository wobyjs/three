/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_bvh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader'
import * as THREE from 'three'

export const LoaderBvh = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Bounding Volume Hierarchy loader example
        const loader = new BVHLoader()
        // loader.setPath('/models/')

        const group = new THREE.Group()

        // Create a hierarchical structure to visualize BVH concept
        const createBVH = (depth: number, size: number, position: THREE.Vector3) => {
            if (depth === 0) return

            const geometry = new THREE.BoxGeometry(size, size, size)
            const wireframe = new THREE.WireframeGeometry(geometry)
            const material = new THREE.LineBasicMaterial({
                color: new THREE.Color().setHSL(depth / 5, 1, 0.5),
            })
            const box = new THREE.LineSegments(wireframe, material)
            box.position.copy(position)
            group.add(box)

            const halfSize = size / 2
            const offset = halfSize / 2

            createBVH(depth - 1, halfSize, new THREE.Vector3(
                position.x - offset, position.y - offset, position.z - offset
            ))
            createBVH(depth - 1, halfSize, new THREE.Vector3(
                position.x + offset, position.y - offset, position.z - offset
            ))
            createBVH(depth - 1, halfSize, new THREE.Vector3(
                position.x - offset, position.y + offset, position.z - offset
            ))
            createBVH(depth - 1, halfSize, new THREE.Vector3(
                position.x + offset, position.y + offset, position.z - offset
            ))
        }

        createBVH(4, 4, new THREE.Vector3(0, 0, 0))
        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        // Example loading actual BVH file:
        // loader.load('motion.bvh', (result) => {
        //     const skeleton = new THREE.Skeleton()
        //     // Process skeleton data
        //     scene.add(result)
        // })

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 12]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}