import { Vector2 } from 'three/src/math/Vector2.js'
import { Object3DNode } from '../../three-types'
import { Vector3 } from 'three/src/math/Vector3.js'
import { PMREMGenerator } from 'three/src/extras/PMREMGenerator.js'
export { PMREMGenerator } from 'three/src/extras/PMREMGenerator.js'
// import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { WebGLRenderer } from '../renderers/WebGLRenderer'
// import { defaults } from '../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pmremGenerator: PMREMGeneratorProps<Vector2 | Vector3>,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pmremGenerator: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        pmremGenerator: string[]
    }
}

/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
 * @remarks
 * This allows different levels of blur to be quickly accessed based on material roughness
 * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
 * associated with higher roughness levels
 * In this.way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
 * @remarks
 * Note minimum {@link THREE.MeshStandardMaterial}'s roughness depends on the size of the provided texture
 * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
 *
 * size roughness  |
 * |--------------|--------------------|
 *          .21               |
 *          .15               |
 *          .11               |
 *         .076              |
 *         .054              |
 *         .038              |
 *        .027              |
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js}
 */

consParams.pmremGenerator = [
    /**
     * This constructor creates a new PMREMGenerator.
     * @param renderer
     */
    'renderer',
].distinct()

/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
 * @remarks
 * This allows different levels of blur to be quickly accessed based on material roughness
 * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
 * associated with higher roughness levels
 * In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
 * @remarks
 * Note: The minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture
 * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
 *
 * | texture size | minimum roughness  |
 * |--------------|--------------------|
 * | 16           | 0.21               |
 * | 32           | 0.15               |
 * | 64           | 0.11               |
 * | 128          | 0.076              |
 * | 256          | 0.054              |
 * | 512          | 0.038              |
 * | 1024         | 0.027              |
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js | Source}
 */

objParams.pmremGenerator = []

export type PMREMGeneratorProps<T extends Vector2 | Vector3> = Object3DNode<PMREMGenerator, typeof PMREMGenerator, { renderer: WebGLRenderer }>
