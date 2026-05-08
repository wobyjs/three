// WebAudio examples - demonstrating positional audio and audio analysis in Three.js
// Run with: tsx code/examples/webgl/audio/index.ts

export { AudioOrientation } from './AudioOrientation'
export { AudioSandbox } from './AudioSandbox'
export { AudioTiming } from './AudioTiming'
export { AudioVisualizer } from './AudioVisualizer'

// Re-export all as default object for convenience
export default {
    AudioOrientation: (await import('./AudioOrientation')).AudioOrientation,
    AudioSandbox: (await import('./AudioSandbox')).AudioSandbox,
    AudioTiming: (await import('./AudioTiming')).AudioTiming,
    AudioVisualizer: (await import('./AudioVisualizer')).AudioVisualizer,
}
