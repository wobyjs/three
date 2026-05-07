/**
 * WebXR Examples Index (webxr-index.ts)
 *
 * Note: Named webxr-index.ts to avoid project gitignore rule for index.*
 *
 * This module exports all WebXR examples for easy importing.
 *
 * VR Examples (require VR headset):
 * - Cubes: Basic VR scene with interactive cubes
 * - Dragging: VR object dragging with controllers
 * - Haptics: VR haptic feedback demonstration
 * - Paint: VR 3D painting application
 * - HandInput: VR hand tracking (requires hand tracking support)
 * - Panorama: VR 360 panorama viewer
 * - Ballshooter: VR ball shooting game
 * - Rollercoaster: VR rollercoaster experience
 *
 * AR Examples (require AR-capable device):
 * - Cones: Basic AR scene with placed cones
 * - HitTest: AR surface detection and object placement
 * - Lighting: AR lighting estimation
 *
 * Device Requirements:
 * - VR: Quest, Vive, Windows Mixed Reality, etc.
 * - AR: ARCore (Android) or ARKit (iOS) capable device
 * - Hand tracking: Quest/Quest 2 or similar
 * - Haptics: Controllers with vibration support
 */

// VR Examples
export * from './vr/Cubes'
export * from './vr/Dragging'
export * from './vr/Haptics'
export * from './vr/Paint'
export * from './vr/HandInput'
export * from './vr/Panorama'
export * from './vr/Ballshooter'
export * from './vr/Rollercoaster'

// AR Examples
export * from './ar/Cones'
export * from './ar/HitTest'
export * from './ar/Lighting'

// Template
export * from './_template'
