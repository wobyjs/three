/**
 * Canonical demo list for Phase 13 Visual Regression Testing.
 * Shared by reference-screenshots.test.ts and compare-all.ts.
 */

import * as https from 'https'

// ============================================================
// Types
// ============================================================

export interface DemoEntry {
  id: string
  name: string
}

export interface ReferenceEntry extends DemoEntry {
  has_reference: boolean
  reference_url: string | null
  reference_status: 'pending' | 'ok' | 'no-reference' | 'reference-load-failed' | 'http-404' | 'http-error'
  screenshot_path: string | null
}

// ============================================================
// Path constants
// ============================================================

export const THREEJS_BASE = 'https://threejs.org/examples'
export const PORTED_SCREENSHOT_DIR = 'test-results/screenshots'
export const REFERENCE_SCREENSHOT_DIR = 'test-results/reference-screenshots'
export const REFERENCE_MANIFEST_PATH = 'test-results/reference-manifest.json'

// ============================================================
// ALL_DEMOS — copied from playwright.test/tests/demo-verification.test.ts
// ============================================================

export const ALL_DEMOS: DemoEntry[] = [
  // Basics
  { id: 'webgl_plane', name: 'Plane' },
  { id: 'webgl_boxes', name: '3 Boxes + Click' },
  { id: 'webgl_boxes_click', name: 'Boxes + Click' },
  { id: 'webgl_static_text', name: 'Box + Static Text' },
  { id: 'webgl_html_text', name: 'Box + HTML Text' },
  { id: 'webgl_group', name: 'Group' },
  { id: 'webgl_object3d', name: 'Object3D Add' },
  // Lines
  { id: 'webgl_simple_line', name: 'Simple Line' },
  { id: 'webgl_fat_lines', name: 'Fat Lines' },
  { id: 'webgl_line3', name: 'Line Segments' },
  { id: 'webgl_d_lines', name: 'D Lines' },
  { id: 'webgl_fat_lines_advanced', name: 'Fat Lines Advanced' },
  { id: 'webgl_lines', name: 'Lines' },
  { id: 'webgl_lines_dashed', name: 'Dashed Lines' },
  // Effects
  { id: 'webgl_effects_anaglyph', name: 'Anaglyph' },
  { id: 'webgl_effects_stereo', name: 'Stereo' },
  { id: 'webgl_effects_stereo2', name: 'Stereo 2' },
  { id: 'webgl_effects_stereo3', name: 'Stereo 3' },
  { id: 'webgl_effects_parallaxbarrier', name: 'Parallax Barrier' },
  { id: 'webgl_effects_ascii', name: 'ASCII Effect' },
  // Animation
  { id: 'webgl_animation_keyframe', name: 'Animation Keyframe' },
  { id: 'webgl_animation_particles', name: 'Animation Particles' },
  { id: 'webgl_animation_keyframes', name: 'Animation Keyframes' },
  { id: 'webgl_animation_skinning', name: 'Animation Skinning' },
  { id: 'webgl_morph_targets', name: 'Morph Targets' },
  { id: 'webgl_animation_skinning_blending', name: 'Skinning Blending' },
  // Geometries
  { id: 'webgl_geometries', name: 'All Geometries' },
  { id: 'webgl_text_geometry', name: 'Text Geometry' },
  { id: 'webgl_geometry_cube', name: 'Geometry Cube' },
  { id: 'webgl_geometries_showcase', name: 'All Geometries Showcase' },
  { id: 'webgl_geometry_shapes', name: 'Geometry Shapes' },
  { id: 'webgl_geometry_cube2', name: 'Simple Cube' },
  { id: 'webgl_geometry_lathe', name: 'Geometry Lathe' },
  { id: 'webgl_geometry_teapot', name: 'Utah Teapot' },
  { id: 'webgl_geometry_convex', name: 'Convex Geometry' },
  { id: 'webgl_geometry_extrude_shapes', name: 'Extrude Shapes' },
  { id: 'webgl_geometry_csg', name: 'CSG Geometry' },
  { id: 'webgl_geometry_colors', name: 'Vertex Colors' },
  { id: 'webgl_geometry_colors_lut', name: 'Color Lookup Table' },
  { id: 'webgl_geometry_minecraft', name: 'Minecraft Terrain' },
  { id: 'webgl_geometry_spline_editor', name: 'Spline Editor' },
  { id: 'webgl_geometry_text_stroke', name: 'Text Stroke' },
  // Materials
  { id: 'webgl_materials', name: 'Physical Materials' },
  { id: 'webgl_materials_all', name: 'All Materials' },
  { id: 'webgl_materials_physical', name: 'Physical Materials Advanced' },
  { id: 'webgl_materials_normal', name: 'Normal Materials' },
  { id: 'webgl_materials_colors', name: 'Material Colors' },
  { id: 'webgl_materials_transparency', name: 'Transparency' },
  { id: 'webgl_normal_map', name: 'Normal Map' },
  { id: 'webgl_materials_blending', name: 'Blending' },
  { id: 'webgl_materials_matcap', name: 'Matcap' },
  { id: 'webgl_materials_cubemap', name: 'Cubemap Reflection' },
  { id: 'webgl_materials_car', name: 'Car Materials' },
  { id: 'webgl_materials_normalmap', name: 'Normal Map' },
  { id: 'webgl_materials_physical_clearcoat', name: 'Clearcoat' },
  { id: 'webgl_materials_physical_transmission', name: 'Transmission' },
  { id: 'webgl_materials_channels', name: 'Channels' },
  { id: 'webgl_materials_cubemap_dynamic', name: 'Dynamic Cubemap' },
  // Textures
  { id: 'webgl_textures_cube', name: 'Textures Cube' },
  { id: 'webgl_uvs', name: 'UVs' },
  // Alpha
  { id: 'webgl_alpha', name: 'Alpha' },
  // Clipping
  { id: 'webgl_clipping', name: 'Clipping' },
  { id: 'webgl_clipping_advanced', name: 'Clipping Advanced' },
  { id: 'webgl_clipping_intersection', name: 'Clipping Intersection' },
  // Wireframes
  { id: 'webgl_wireframes', name: 'Wireframes' },
  // Particles
  { id: 'webgl_particles', name: 'Particles' },
  { id: 'webgl_particles_buffer', name: 'Particles Buffer' },
  { id: 'webgl_points_sprites', name: 'Points Sprites' },
  { id: 'webgl_points_dynamic', name: 'Points Dynamic' },
  { id: 'webgl_points_waves', name: 'Points Waves' },
  // Fog
  { id: 'webgl_fog', name: 'Fog' },
  // Shadows
  { id: 'webgl_shadowmap', name: 'Shadow Map' },
  { id: 'webgl_shadowmap_advanced', name: 'Shadow Map Advanced' },
  { id: 'webgl_shadow_contact', name: 'Shadow Contact' },
  { id: 'webgl_shadows', name: 'Shadows' },
  { id: 'webgl_shadowmap_pointlight', name: 'PointLight Shadows' },
  { id: 'webgl_shadowmap_vsm', name: 'VSM Shadows' },
  // Lights
  { id: 'webgl_lights', name: 'Physical Lights' },
  { id: 'webgl_lights_rectarea', name: 'RectArea Lights' },
  { id: 'webgl_lights_spotlight', name: 'Spotlight' },
  { id: 'webgl_lightprobe', name: 'Light Probe' },
  // Cameras
  { id: 'webgl_camera', name: 'Camera' },
  { id: 'webgl_camera_array', name: 'Camera Array' },
  // Loaders
  { id: 'webgl_loader_gltf', name: 'GLTF' },
  { id: 'webgl_loader_gltf_anisotropy', name: 'GLTF Anisotropy' },
  { id: 'webgl_loader_gltf_demo', name: 'GLTF Demo' },
  { id: 'webgl_loader_gltf_2', name: 'GLTF 2' },
  { id: 'webgl_loader_obj', name: 'OBJ Loader' },
  { id: 'webgl_loader_draco', name: 'Draco Loader' },
  { id: 'webgl_loader_fbx', name: 'FBX Loader' },
  { id: 'webgl_loader_ply', name: 'PLY Loader' },
  { id: 'webgl_loader_collada', name: 'Collada Loader' },
  { id: 'webgl_loader_pcd', name: 'PCD Loader' },
  { id: 'webgl_loader_vrml', name: 'VRML Loader' },
  { id: 'webgl_loader_stl', name: 'STL Loader' },
  { id: 'webgl_loader_3mf', name: '3MF Loader' },
  { id: 'webgl_loader_bvh', name: 'BVH Loader' },
  { id: 'webgl_loader_gcode', name: 'GCode Loader' },
  { id: 'webgl_loader_svg', name: 'SVG Loader' },
  { id: 'webgl_loader_ttf', name: 'TTF Loader' },
  { id: 'webgl_loader_pdb', name: 'PDB Loader' },
  { id: 'webgl_loader_xyz', name: 'XYZ Loader' },
  { id: 'webgl_loader_3ds', name: '3DS Loader' },
  { id: 'webgl_loader_3dm', name: '3DM Loader' },
  { id: 'webgl_loader_amf', name: 'AMF Loader' },
  { id: 'webgl_loader_kmz', name: 'KMZ Loader' },
  { id: 'webgl_loader_lwo', name: 'LWO Loader' },
  { id: 'webgl_loader_md2', name: 'MD2 Loader' },
  { id: 'webgl_loader_nrrd', name: 'NRRD Loader' },
  { id: 'webgl_loader_vox', name: 'VOX Loader' },
  // Postprocessing
  { id: 'webgl_postprocessing', name: 'Unreal Bloom' },
  { id: 'webgl_postprocessing_demo', name: 'Postprocessing Demo' },
  { id: 'webgl_postprocessing_film', name: 'Film Effect' },
  { id: 'webgl_postprocessing_ssao', name: 'SSAO' },
  { id: 'webgl_postprocessing_fxaa', name: 'FXAA' },
  { id: 'webgl_postprocessing_bokeh', name: 'Bokeh DOF' },
  { id: 'webgl_postprocessing_smaa', name: 'SMAA' },
  { id: 'webgl_postprocessing_vignette', name: 'Vignette' },
  { id: 'webgl_color_grading', name: 'Color Grading' },
  { id: 'webgl_postprocessing_dof', name: 'Depth of Field' },
  { id: 'webgl_postprocessing_godrays', name: 'God Rays' },
  { id: 'webgl_postprocessing_outline', name: 'Outline' },
  { id: 'webgl_postprocessing_ssr', name: 'Screen Space Reflections' },
  { id: 'webgl_postprocessing_transition', name: 'Scene Transition' },
  { id: 'webgl_postprocessing_glitch', name: 'Glitch' },
  { id: 'webgl_postprocessing_pixel', name: 'Pixel' },
  { id: 'webgl_postprocessing_afterimage', name: 'Afterimage' },
  { id: 'webgl_postprocessing_taa', name: 'TAA' },
  { id: 'webgl_postprocessing_temporal', name: 'Temporal AA' },
  { id: 'webgl_postprocessing_chromatic', name: 'Chromatic Aberration' },
  { id: 'webgl_postprocessing_depth', name: 'Depth Effect' },
  { id: 'webgl_postprocessing_nodes', name: 'Node-based Effects' },
  { id: 'webgl_postprocessing_advanced', name: 'Advanced' },
  // Environment
  { id: 'webgl_sky', name: 'Sky' },
  { id: 'webgl_water', name: 'Water' },
  { id: 'webgl_shaders_sky', name: 'Sky Shader' },
  { id: 'webgl_panorama_equirectangular', name: 'Equirectangular Panorama' },
  // Objects
  { id: 'webgl_reflector', name: 'Reflector' },
  { id: 'webgl_mirror', name: 'Mirror' },
  { id: 'webgl_lensflares', name: 'Lens Flares' },
  // Instancing
  { id: 'webgl_instancing', name: 'Instancing' },
  { id: 'webgl_instancing_performance', name: 'Instancing Performance' },
  { id: 'webgl_instancing_animated', name: 'Instancing Animated' },
  { id: 'webgl_instancing_billboards', name: 'Instancing Billboards' },
  { id: 'webgl_instancing_scatter', name: 'Instancing Scatter' },
  { id: 'webgl_instancing_morph', name: 'Instancing Morph' },
  { id: 'webgl_instancing_dynamic', name: 'Instancing Dynamic' },
  { id: 'webgl_instancing_raycast', name: 'Instancing Raycast' },
  // Interactive
  { id: 'webgl_interactive_cubes', name: 'Interactive Cubes' },
  { id: 'webgl_interactive_cubes_raycaster', name: 'Interactive Cubes Raycaster' },
  { id: 'webgl_interactive_voxelpainter', name: 'Voxel Painter' },
  { id: 'webgl_interactive_buffer_geometry', name: 'Interactive BufferGeometry' },
  { id: 'webgl_interactive_cubes_gpu', name: 'Interactive Cubes GPU' },
  { id: 'webgl_interactive_cubes_ortho', name: 'Interactive Cubes Ortho' },
  { id: 'webgl_interactive_lines', name: 'Interactive Lines' },
  { id: 'webgl_interactive_raycasting_points', name: 'Interactive Raycasting Points' },
  // Sprites
  { id: 'webgl_sprites', name: 'Sprites' },
  // BufferGeometry
  { id: 'webgl_buffergeometry', name: 'BufferGeometry' },
  // CSS3D
  { id: 'css3d_periodictable', name: 'Periodic Table' },
  { id: 'webgl_css3d', name: 'WebGL + CSS3D' },
  { id: 'webgl_css3d_demo', name: 'CSS3D Demo' },
  // Reflection/Misc
  { id: 'webgl_reflection', name: 'Reflection' },
  { id: 'webgl_canvas_texture', name: 'Canvas Texture' },
  { id: 'webgl_toon', name: 'Toon Shading' },
  { id: 'webgl_svg', name: 'SVG Shapes' },
  { id: 'webgl_webgpu', name: 'WebGPU Style' },
  { id: 'webgl_point_cloud', name: 'Point Cloud' },
  { id: 'webgl_terrain', name: 'Terrain' },
  { id: 'webgl_custom_shader', name: 'Custom Shader' },
  // Physics
  { id: 'webgl_physics', name: 'Physics' },
  { id: 'physics_ammo_break', name: 'Ammo.js Breakable' },
  { id: 'physics_ammo_cloth', name: 'Ammo.js Cloth' },
  { id: 'physics_rapier_basic', name: 'Rapier Basic' },
  { id: 'physics_rapier_instancing', name: 'Rapier Instancing' },
  { id: 'physics_rapier_joints', name: 'Rapier Joints' },
  // Audio, CSS2D, VR
  { id: 'webgl_audio', name: 'Audio Visualizer' },
  { id: 'webgl_css2d', name: 'CSS2D Renderer' },
  { id: 'webgl_vr', name: 'VR Experience' },
  // WebXR
  { id: 'webgl_webxr', name: 'WebXR' },
  { id: 'webgl_webxr_ar', name: 'WebXR AR' },
  { id: 'webgl_webxr_vr', name: 'WebXR VR' },
  { id: 'webgl_webxr_hit_test', name: 'WebXR Hit Test' },
  { id: 'webgl_webxr_anchors', name: 'WebXR Anchors' },
  { id: 'webgl_webxr_layers', name: 'WebXR Layers' },
  { id: 'webxr_ar_cones', name: 'WebXR AR Cones' },
  { id: 'webxr_ar_plane_detection', name: 'WebXR AR Plane Detection' },
  { id: 'webxr_vr_ballshooter', name: 'WebXR VR Ball Shooter' },
  { id: 'webxr_vr_paint', name: 'WebXR VR Paint' },
  { id: 'webxr_sandbox', name: 'WebXR Sandbox' },
  // Advanced
  { id: 'webgl_batch_lod_bvh', name: 'Batch LOD BVH' },
  { id: 'webgl_useframe_test', name: 'UseFrame Test' },
  { id: 'webgl_lod', name: 'Level of Detail' },
  { id: 'webgl_decals', name: 'Decals' },
  { id: 'webgl_modifier_simplify', name: 'Simplify Modifier' },
  { id: 'webgl_helpers', name: 'Helpers' },
  { id: 'webgl_multiple_geometries', name: 'Multiple Geometries' },
  { id: 'webgl_tone_mapping', name: 'Tone Mapping' },
  { id: 'webgl_shader_lava', name: 'Lava Shader' },
  { id: 'webgl_shaders_ocean', name: 'Ocean Shader' },
  // Controls
  { id: 'misc_controls_transform', name: 'Transform Controls' },
]

// ============================================================
// CUSTOM_DEMO_IDS — IDs that do NOT have threejs.org equivalents.
// These are custom/replacement demos created for the port project.
// Seeded from RESEARCH.md "Category 2: Custom/replacement demos".
// ============================================================

export const CUSTOM_DEMO_IDS = new Set<string>([
  'webgl_plane', 'webgl_boxes', 'webgl_boxes_click', 'webgl_static_text',
  'webgl_html_text', 'webgl_group', 'webgl_object3d', 'webgl_fat_lines_advanced',
  'webgl_d_lines', 'webgl_effects_stereo2', 'webgl_effects_stereo3',
  'webgl_geometry_cube2', 'webgl_geometry_csg', 'webgl_geometry_colors_lut',
  'webgl_geometry_text_stroke', 'webgl_materials_all', 'webgl_materials_colors',
  'webgl_normal_map', 'webgl_postprocessing_demo', 'webgl_color_grading',
  'webgl_postprocessing_temporal', 'webgl_postprocessing_chromatic',
  'webgl_postprocessing_depth', 'webgl_postprocessing_nodes', 'webgl_postprocessing_vignette',
  'webgl_postprocessing_bokeh', 'webgl_postprocessing_godrays',
  'webgl_css3d', 'webgl_css3d_demo', 'webgl_reflection', 'webgl_toon',
  'webgl_svg', 'webgl_webgpu', 'webgl_point_cloud', 'webgl_terrain',
  'webgl_custom_shader', 'webgl_physics', 'webgl_audio', 'webgl_css2d',
  'webgl_vr', 'webgl_webxr', 'webgl_webxr_ar', 'webgl_webxr_vr',
  'webgl_webxr_hit_test', 'webgl_webxr_anchors', 'webgl_webxr_layers',
  'webgl_batch_lod_bvh', 'webgl_useframe_test', 'webgl_multiple_geometries',
  'webgl_shader_lava', 'webgl_geometries_showcase', 'webgl_geometry_cube',
  'webgl_animation_keyframe', 'webgl_morph_targets', 'webgl_text_geometry',
  'webgl_materials_normal', 'webgl_shaders_sky', 'webgl_shaders_ocean',
  'webgl_instancing_billboards', 'webgl_instancing_scatter',
  'webgl_loader_gltf_demo', 'webgl_loader_gltf_2', 'webgl_loader_gltf_anisotropy',
  'webgl_fat_lines', 'webgl_line3', 'webgl_simple_line',
])

// ============================================================
// HTTP HEAD probe utility
// Shared by reference-screenshots.test.ts and agent-batch-worker.ts
// ============================================================

export function probeUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve(res.statusCode !== undefined && res.statusCode < 400)
    })
    req.on('error', () => resolve(false))
    req.on('timeout', () => { req.destroy(); resolve(false) })
    req.end()
  })
}
