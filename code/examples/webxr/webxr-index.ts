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
 * - HapticsController: Controller-based haptic intensity control
 * - Paint: VR 3D painting application
 * - HandInput: VR hand tracking (requires hand tracking support)
 * - HandInputPointerClick: Hand tracking with pointer and click gestures
 * - HandInputPress: Hand tracking with press gesture for buttons
 * - HandInputProfiles: Hand tracking with profile visualization
 * - Panorama: VR 360 panorama viewer
 * - PanoramaDepth: VR panorama with depth map for 3D effect
 * - Ballshooter: VR ball shooting game
 * - Rollercoaster: VR rollercoaster experience
 * - LorenzAttractor: VR Lorenz attractor visualization
 * - Layers: VR composition layers demo
 * - Sandbox: VR sandbox for object spawning
 * - Sculpt: VR sculpting tool
 * - Video: VR 360-degree video player
 *
 * AR Examples (require AR-capable device):
 * - Cones: Basic AR scene with placed cones
 * - HitTest: AR surface detection and object placement
 * - Lighting: AR lighting estimation
 * - PlaneDetection: AR plane detection and visualization
 *
 * Cross-Platform Examples:
 * - WebXRSandbox: Dual VR/AR sandbox
 * - WebXRVideo: Video player for VR and AR
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
export * from './vr/HapticsController'
export * from './vr/Paint'
export * from './vr/HandInput'
export * from './vr/HandInputPointerClick'
export * from './vr/HandInputPress'
export * from './vr/HandInputProfiles'
export * from './vr/Panorama'
export * from './vr/PanoramaDepth'
export * from './vr/Ballshooter'
export * from './vr/Rollercoaster'
export * from './vr/LorenzAttractor'
export * from './vr/Layers'
export * from './vr/Sandbox'
export * from './vr/Sculpt'
export * from './vr/Video'

// AR Examples
export * from './ar/Cones'
export * from './ar/HitTest'
export * from './ar/Lighting'
export * from './ar/PlaneDetection'

// Cross-Platform Examples
export * from './WebXRSandbox'
export * from './WebXRVideo'

// Template
export * from './_template'
