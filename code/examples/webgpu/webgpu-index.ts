/**
 * WebGPU Examples Index (webgpu-index.ts)
 *
 * Note: Named webgpu-index.ts to avoid project gitignore rule for index.*
 *
 * This module exports all WebGPU examples for easy importing.
 *
 * WebGPU is a modern graphics API that provides better performance
 * compared to WebGL. Available in Chrome 113+ and Edge 113+.
 *
 * Examples:
 * - Basic: Basic WebGPU scene demonstration
 * - Geometries: Various geometry types with WebGPU
 * - Materials: Material variations with WebGPU
 * - Lights: Lighting demonstration with shadows
 * - Animation: Keyframe animation with WebGPU
 * - TSL: Three.js Shading Language examples
 * - Particles: GPU-optimized particle systems
 * - Postprocessing: Postprocessing effects
 * - LoaderGLTF: GLTF model loading with WebGPU
 * - Shadowmap: Real-time shadow mapping
 * - Cubemap: Environment cubemap reflections
 *
 * Browser Requirements:
 * - Chrome 113+ or Edge 113+
 * - Updated GPU drivers
 * - WebGPU not available in Firefox or Safari yet
 */

export * from './Basic'
export * from './Geometries'
export * from './Materials'
export * from './Lights'
export * from './Animation'
export * from './TSL'
export * from './Particles'
export * from './Postprocessing'
export * from './LoaderGLTF'
export * from './Shadowmap'
export * from './Cubemap'
