export const categories = [
	{
		id: "basics",
		name: "Basics",
		demos: [
			{
				id: "webgl_plane",
				name: "Plane",
				category: "basics",
				component: () => import("/demo/src/Plane.tsx")
			},
			{
				id: "webgl_boxes",
				name: "3 Boxes + Click",
				category: "basics",
				component: () => import("/demo/src/Box3.tsx")
			},
			{
				id: "webgl_basics_orbits",
				name: "Basics Orbits",
				category: "basics",
				component: () => import("/demo/src/WebGLBasicsOrbits.tsx")
			},
			{
				id: "webgl_boxes_click",
				name: "Boxes + Click",
				category: "basics",
				component: () => import("/demo/src/Box2Click.tsx")
			},
			{
				id: "webgl_static_text",
				name: "Box + Static Text",
				category: "basics",
				component: () => import("/demo/src/BoxStaticText.tsx")
			},
			{
				id: "webgl_html_text",
				name: "Box + HTML Text",
				category: "basics",
				component: () => import("/demo/src/BoxHtmlText.tsx")
			},
			{
				id: "webgl_group",
				name: "Group",
				category: "basics",
				component: () => import("/demo/src/group.tsx")
			},
			{
				id: "webgl_object3d",
				name: "Object3D Add",
				category: "basics",
				component: () => import("/demo/src/Object3dAdd.tsx")
			}
		]
	},
	{
		id: "lines",
		name: "Lines",
		demos: [
			{
				id: "webgl_simple_line",
				name: "Simple Line",
				category: "lines",
				component: () => import("/demo/src/SimpleLine.tsx")
			},
			{
				id: "webgl_fat_lines",
				name: "Fat Lines",
				category: "lines",
				component: () => import("/demo/src/FatLines.tsx")
			},
			{
				id: "webgl_line3",
				name: "Line Segments",
				category: "lines",
				component: () => import("/demo/src/Line3.tsx")
			},
			{
				id: "webgl_d_lines",
				name: "D Lines",
				category: "lines",
				component: () => import("/demo/src/DLine.tsx")
			},
			{
				id: "webgl_fat_lines_advanced",
				name: "Fat Lines Advanced",
				category: "lines",
				component: () => import("/demo/src/WebGLFatLines.tsx")
			},
			{
				id: "webgl_lines",
				name: "Lines",
				category: "lines",
				component: () => import("/demo/src/WebGLLines.tsx")
			},
			{
				id: "webgl_lines_dashed",
				name: "Dashed Lines",
				category: "lines",
				component: () => import("/demo/src/WebGLLinesDashed.tsx")
			},
			{
				id: "webgl_lines_fat",
				name: "Fat Lines (Line2)",
				category: "lines",
				component: () => import("/demo/src/WebGLLinesLineMaterial.tsx")
			},
			{
				id: "webgl_lines_fat_wireframe",
				name: "Fat Wireframe",
				category: "lines",
				component: () => import("/demo/src/WebGLLinesLineMaterialWireframe.tsx")
			},
			{
				id: "webgl_lines_sphere",
				name: "Lines Sphere",
				category: "lines",
				component: () => import("/demo/src/WebGLLinesSphere.tsx")
			},
			{
				id: "webgl_buffergeometry_lines_indexed",
				name: "BufferGeometry Lines Indexed",
				category: "lines",
				component: () => import("/demo/src/WebGLBufferGeometryLinesIndexed.tsx")
			}
		]
	},
	{
		id: "effects",
		name: "Effects",
		demos: [
			{
				id: "webgl_effects_anaglyph",
				name: "Anaglyph",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsAnaglyph.tsx")
			},
			{
				id: "webgl_effects_stereo",
				name: "Stereo",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsStereo.tsx")
			},
			{
				id: "webgl_effects_stereo2",
				name: "Stereo 2",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsStereo2.tsx")
			},
			{
				id: "webgl_effects_stereo3",
				name: "Stereo 3",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsStereo3.tsx")
			},
			{
				id: "webgl_effects_parallaxbarrier",
				name: "Parallax Barrier",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsParallaxBarrier.tsx")
			},
			{
				id: "webgl_effects_ascii",
				name: "ASCII Effect",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsAscii.tsx")
			},
			{
				id: "webgl_effects_outline",
				name: "Effects Outline",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsOutline.tsx")
			},
			{
				id: "webgl_effects_peppersghost",
				name: "Peppers Ghost",
				category: "effects",
				component: () => import("/demo/src/WebGLEffectsPeppersGhost.tsx")
			}
		]
	},
	{
		id: "animation",
		name: "Animation",
		demos: [
			{
				id: "webgl_animation_keyframe",
				name: "Animation Keyframe",
				category: "animation",
				component: () => import("/demo/src/AnimationKeyframe.tsx")
			},
			{
				id: "webgl_animation_particles",
				name: "Animation Particles",
				category: "animation",
				component: () => import("/demo/src/AnimationParticles.tsx")
			},
			{
				id: "webgl_animation_keyframes",
				name: "Animation Keyframes",
				category: "animation",
				component: () => import("/demo/src/AnimationKeyframes.tsx")
			},
			{
				id: "webgl_animation_skinning",
				name: "Animation Skinning",
				category: "animation",
				component: () => import("/demo/src/AnimationSkinning.tsx")
			},
			{
				id: "webgl_morph_targets",
				name: "Morph Targets",
				category: "animation",
				component: () => import("/demo/src/WebGLMorphTargets.tsx")
			},
			{
				id: "webgl_animation_skinning_blending",
				name: "Skinning Blending",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkinningBlending.tsx")
			},
			{
				id: "webgl_animation_skinning_additive_blending",
				name: "Additive Blending",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkinningAdditiveBlending.tsx")
			},
			{
				id: "webgl_animation_skinning_morph",
				name: "Skinning Morph",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkinningMorph.tsx")
			},
			{
				id: "webgl_animation_multiple",
				name: "Multiple Animations",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationMultiple.tsx")
			},
			{
				id: "webgl_animation_walk",
				name: "Animation Walk",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationWalk.tsx")
			},
			{
				id: "webgl_animation_morph",
				name: "Animation Morph",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationMorph.tsx")
			},
			{
				id: "webgl_animation_keyframes_sky",
				name: "Animation Keyframes Sky",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationKeyframes.tsx")
			},
			{
				id: "webgl_animation_locomotion",
				name: "Animation Locomotion",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationLocomotion.tsx")
			},
			{
				id: "webgl_animation_locomotive",
				name: "Animation Locomotive",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationLocomotive.tsx")
			},
			{
				id: "webgl_animation_ik",
				name: "Animation IK",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationIK.tsx")
			},
			{
				id: "webgl_animation_skinning_ik",
				name: "Skinning IK",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkinningIK.tsx")
			},
			{
				id: "misc_animation_groups",
				name: "Animation Groups",
				category: "animation",
				component: () => import("/demo/src/MiscAnimationGroups.tsx")
			},
			{
				id: "webgl_morphtargets_sphere",
				name: "Morph Targets Sphere",
				category: "animation",
				component: () => import("/demo/src/WebGLMorphTargetsSphere.tsx")
			},
			{
				id: "webgl_morphtargets_flamingo",
				name: "Morph Targets Flamingo",
				category: "animation",
				component: () => import("/demo/src/WebGLMorphTargetsFlamingo.tsx")
			},
			{
				id: "webgl_morphtargets_horse",
				name: "Morph Targets Horse",
				category: "animation",
				component: () => import("/demo/src/WebGLMorphTargetsHorse.tsx")
			},
			{
				id: "webgl_animation_walk_blend",
				name: "Walk Cycle Blend",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationWalkBlend.tsx")
			},
			{
				id: "webgl_animation_cloth",
				name: "Cloth Simulation",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationCloth.tsx")
			},
			{
				id: "webgl_animation_cloth2",
				name: "Cloth Flag",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationCloth2.tsx")
			},
			{
				id: "webgl_animation_cloth3",
				name: "Cloth Flag Wind",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationCloth3.tsx")
			},
			{
				id: "webgl_animation_robot",
				name: "Robot Arm",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationRobot.tsx")
			},
			{
				id: "webgl_animation_skeleton",
				name: "Animation Skeleton",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkeleton.tsx")
			},
			{
				id: "webgl_animation_skinning_basic",
				name: "Skinning Basic",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSkinningBasic.tsx")
			},
			{
				id: "webgl_animation_crowd",
				name: "Crowd Simulation",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationCrowd.tsx")
			},
			{
				id: "webgl_animation_pendulum",
				name: "Double Pendulum",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationPendulum.tsx")
			},
			{
				id: "webgl_animation_flocking",
				name: "Flocking (CPU Boids)",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationFlocking.tsx")
			},
			{
				id: "webgl_animation_birds",
				name: "Birds Flocking (Boids)",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationBirds.tsx")
			},
			{
				id: "webgl_gpgpu_birds",
				name: "GPGPU Birds (GPU Boids)",
				category: "animation",
				component: () => import("/demo/src/WebGLGPGPUBirds.tsx")
			},
			{
				id: "webgl_animation_spring",
				name: "Spring Physics Chain",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationSpring.tsx")
			},
			{
				id: "webgl_animation_blend",
				name: "Animation Blending",
				category: "animation",
				component: () => import("/demo/src/WebGLAnimationBlend.tsx")
			}
		]
	},
	{
		id: "geometries",
		name: "Geometries",
		demos: [
			{
				id: "webgl_geometries",
				name: "All Geometries",
				category: "geometries",
				component: () => import("/demo/src/Geometries.tsx")
			},
			{
				id: "webgl_text_geometry",
				name: "Text Geometry",
				category: "geometries",
				component: () => import("/demo/src/TextGeometry.tsx")
			},
			{
				id: "webgl_geometry_cube",
				name: "Geometry Cube",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCube.tsx")
			},
			{
				id: "webgl_geometries_showcase",
				name: "All Geometries Showcase",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometries.tsx")
			},
			{
				id: "webgl_geometries_tube",
				name: "Tube Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometriesTube.tsx")
			},
			{
				id: "webgl_geometry_shapes",
				name: "Geometry Shapes",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryShapes.tsx")
			},
			{
				id: "webgl_geometry_cube2",
				name: "Simple Cube",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCube2.tsx")
			},
			{
				id: "webgl_geometry_lathe",
				name: "Geometry Lathe",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLathe.tsx")
			},
			{
				id: "webgl_geometries_lathe",
				name: "Lathe Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometriesLathe.tsx")
			},
			{
				id: "webgl_geometry_teapot",
				name: "Utah Teapot",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTeapot.tsx")
			},
			{
				id: "webgl_geometry_convex",
				name: "Convex Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryConvex.tsx")
			},
			{
				id: "webgl_geometry_extrude_shapes",
				name: "Extrude Shapes",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryExtrudeShapes.tsx")
			},
			{
				id: "webgl_geometry_extrusion",
				name: "Shape Extrusion",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryExtrusion.tsx")
			},
			{
				id: "webgl_geometry_csg",
				name: "CSG Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCSG.tsx")
			},
			{
				id: "webgl_geometry_colors",
				name: "Vertex Colors",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryColors.tsx")
			},
			{
				id: "webgl_geometry_colors_lut",
				name: "Color Lookup Table",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryColorsLookuptable.tsx")
			},
			{
				id: "webgl_geometry_minecraft",
				name: "Minecraft Terrain",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMinecraft.tsx")
			},
			{
				id: "webgl_geometry_spline_editor",
				name: "Spline Editor",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySplineEditor.tsx")
			},
			{
				id: "webgl_geometry_spline_tube",
				name: "Spline Tube Path",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySpline.tsx")
			},
			{
				id: "webgl_geometry_text_stroke",
				name: "Text Stroke",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTextStroke.tsx")
			},
			{
				id: "webgl_geometry_nurbs",
				name: "NURBS",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryNurbs.tsx")
			},
			{
				id: "webgl_geometry_dynamic",
				name: "Dynamic Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryDynamic.tsx")
			},
			{
				id: "webgl_geometry_parametric",
				name: "Parametric Surfaces",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryParametric.tsx")
			},
			{
				id: "webgl_geometries_parametric",
				name: "Parametric Geometries",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometriesParametric.tsx")
			},
			{
				id: "webgl_geometry_extrude_splines",
				name: "Extrude Splines",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryExtrudeSplines.tsx")
			},
			{
				id: "webgl_geometry_hierarchy",
				name: "Geometry Hierarchy",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryHierarchy.tsx")
			},
			{
				id: "webgl_geometry_normals",
				name: "Vertex Normals",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryNormals.tsx")
			},
			{
				id: "webgl_geometry_terrain",
				name: "Procedural Terrain",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTerrain.tsx")
			},
			{
				id: "webgl_geometry_procedural",
				name: "Procedural Spiral",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryProcedural.tsx")
			},
			{
				id: "webgl_morphtargets",
				name: "Morph Targets",
				category: "geometries",
				component: () => import("/demo/src/WebGLMorphTargets.tsx")
			},
			{
				id: "webgl_geometry_morph",
				name: "Morph Targets",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMorph.tsx")
			},
			{
				id: "webgl_geometry_polyhedra",
				name: "Platonic & Archimedean Solids",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryPolyhedra.tsx")
			},
			{
				id: "webgl_geometry_stellated",
				name: "Stellated Icosahedron",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryStellated.tsx")
			},
			{
				id: "webgl_geometry_fractal",
				name: "Fractal Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryFractal.tsx")
			},
			{
				id: "webgl_geometry_rolling",
				name: "Rolling Shapes",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryRolling.tsx")
			},
			{
				id: "webgl_geometry_spiral",
				name: "Spiral Galaxy",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySpiral.tsx")
			},
			{
				id: "webgl_geometry_tube_fly",
				name: "Tube Fly-Through",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTubeFly.tsx")
			},
			{
				id: "webgl_geometry_warp",
				name: "Mesh Warp Deformation",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryWarp.tsx")
			},
			{
				id: "webgl_geometry_convex_hull",
				name: "Convex Hull Animated",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryConvexHull.tsx")
			},
			{
				id: "webgl_geometry_torusknot_shader",
				name: "TorusKnot Shader",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTorusKnotShader.tsx")
			},
			{
				id: "webgl_geometry_boolean",
				name: "Boolean Operations",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBoolean.tsx")
			},
			{
				id: "webgl_geometry_boolean_ops",
				name: "Boolean Operations",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBooleanOps.tsx")
			},
			{
				id: "webgl_geometry_lathe_profiles",
				name: "Lathe Profiles",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLatheProfiles.tsx")
			},
			{
				id: "webgl_geometry_subdivision",
				name: "Mesh Subdivision",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySubdivision.tsx")
			},
			{
				id: "webgl_geometry_noise_3d",
				name: "3D Noise Terrain",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryNoise3D.tsx")
			},
			{
				id: "webgl_geometry_extrude_text",
				name: "Extruded Text",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryExtrudeText.tsx")
			},
			{
				id: "webgl_geometry_ocean_waves",
				name: "Ocean Waves (Gerstner)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryOceanWaves.tsx")
			},
			{
				id: "webgl_geometry_crystal",
				name: "Crystal Cluster",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCrystal.tsx")
			},
			{
				id: "webgl_geometry_instancing_perf",
				name: "Instancing Performance (50k)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryInstancingPerf.tsx")
			},
			{
				id: "webgl_geometry_metaballs",
				name: "Metaballs (MarchingCubes)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMetaballs.tsx")
			},
			{
				id: "webgl_geometry_metaball",
				name: "Metaballs",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMetaball.tsx")
			},
			{
				id: "webgl_geometry_bubbles",
				name: "Soap Bubbles",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBubbles.tsx")
			},
			{
				id: "webgl_geometry_voronoi",
				name: "Voronoi Pattern",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryVoronoi.tsx")
			},
			{
				id: "webgl_geometry_fractal_terrain",
				name: "Fractal Terrain (Diamond-Square)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryFractalTerrain.tsx")
			},
			{
				id: "webgl_geometry_fractal_landscape",
				name: "Fractal Landscape",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryFractalLandscape.tsx")
			},
			{
				id: "webgl_geometry_mobius",
				name: "Möbius Strip",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMobius.tsx")
			},
			{
				id: "webgl_geometry_klein",
				name: "Klein Bottle",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryKlein.tsx")
			},
			{
				id: "webgl_geometry_julia",
				name: "Julia Set Fractal",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryJulia.tsx")
			},
			{
				id: "webgl_geometry_terrain_lod",
				name: "Terrain LOD Chunks",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTerrainLOD.tsx")
			},
			{
				id: "webgl_geometry_snowflake",
				name: "Koch Snowflake",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySnowflake.tsx")
			},
			{
				id: "webgl_geometry_reaction_diffusion",
				name: "Reaction-Diffusion (Gray-Scott)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryReactionDiffusion.tsx")
			},
			{
				id: "webgl_geometry_lissajous",
				name: "Lissajous 3D Curves",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLissajous.tsx")
			},
			{
				id: "webgl_geometry_wormhole",
				name: "Wormhole Tunnel",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryWormhole.tsx")
			},
			{
				id: "webgl_geometry_mandelbrot",
				name: "Mandelbrot Set",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMandelbrot.tsx")
			},
			{
				id: "webgl_geometry_sphere_shader",
				name: "Sphere Vertex Shader",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySphereShader.tsx")
			},
			{
				id: "webgl_geometry_minecraft_ao",
				name: "Minecraft AO",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMinecraftAO.tsx")
			},
			{
				id: "webgl_geometry_planet",
				name: "Planet (Earth + Atmosphere)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryPlanet.tsx")
			},
			{
				id: "webgl_geometry_hyperboloid",
				name: "Hyperboloid String Art",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryHyperboloid.tsx")
			},
			{
				id: "webgl_geometry_seashell",
				name: "Seashell (Conchospiral)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySeashell.tsx")
			},
			{
				id: "webgl_geometry_lorenz",
				name: "Lorenz Attractor",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLorenz.tsx")
			},
			{
				id: "webgl_geometry_dna",
				name: "DNA Double Helix",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryDNA.tsx")
			},
			{
				id: "webgl_geometry_torus_link",
				name: "Linked Tori (Chain)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTorusLink.tsx")
			},
			{
				id: "webgl_geometry_fractal_tree",
				name: "Fractal Tree (3D Branching)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryFractalTree.tsx")
			},
			{
				id: "webgl_geometry_hypercube",
				name: "Tesseract (4D Hypercube)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryHypercube.tsx")
			},
			{
				id: "webgl_geometry_celtic_knot",
				name: "Celtic Knot (Torus)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCelticKnot.tsx")
			},
			{
				id: "webgl_geometry_sphere_deform",
				name: "Sphere Deformation",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySphereDeform.tsx")
			},
			{
				id: "webgl_geometry_geodesic",
				name: "Geodesic Dome",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryGeodesic.tsx")
			},
			{
				id: "webgl_geometry_crystal_lattice",
				name: "Crystal Lattice (FCC)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCrystalLattice.tsx")
			},
			{
				id: "webgl_geometry_torusknot_unravel",
				name: "Torus Knot Unravel",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTorusKnotUnravel.tsx")
			},
			{
				id: "webgl_geometry_superquadric",
				name: "Superquadric Shapes",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySuperquadric.tsx")
			},
			{
				id: "webgl_geometry_boy_surface",
				name: "Boy's Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBoySurface.tsx")
			},
			{
				id: "webgl_geometry_bishop_curve",
				name: "Bishop Curve",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBishopCurve.tsx")
			},
			{
				id: "webgl_geometry_roman_surface",
				name: "Roman Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryRomanSurface.tsx")
			},
			{
				id: "webgl_geometry_enneper",
				name: "Enneper Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryEnneper.tsx")
			},
			{
				id: "webgl_geometry_dini",
				name: "Dini's Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryDini.tsx")
			},
			{
				id: "webgl_geometry_crosscap",
				name: "Cross-Cap Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCrossCap.tsx")
			},
			{
				id: "webgl_geometry_pseudosphere",
				name: "Pseudosphere (Tractrix)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryPseudosphere.tsx")
			},
			{
				id: "webgl_geometry_catalan",
				name: "Catalan Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCatalan.tsx")
			},
			{
				id: "webgl_geometry_saddle",
				name: "Saddle Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySaddle.tsx")
			},
			{
				id: "webgl_geometry_corkscrew",
				name: "Corkscrew Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCorkscrew.tsx")
			},
			{
				id: "webgl_geometry_helicoid",
				name: "Helicoid (Minimal Surface)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryHelicoid.tsx")
			},
			{
				id: "webgl_geometry_catenoid",
				name: "Catenoid (Minimal Surface)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCatenoid.tsx")
			},
			{
				id: "webgl_geometry_henneberg",
				name: "Henneberg Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryHenneberg.tsx")
			},
			{
				id: "webgl_geometry_scherk",
				name: "Scherk Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryScherk.tsx")
			},
			{
				id: "webgl_geometry_moebius_strip",
				name: "Möbius Strip (Parametric)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMoebiusStrip.tsx")
			},
			{
				id: "webgl_geometry_cylinder",
				name: "Generalized Cylinder",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCylinder.tsx")
			},
			{
				id: "webgl_geometry_kuen",
				name: "Kuen's Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryKuen.tsx")
			},
			{
				id: "webgl_geometry_klein_bottle",
				name: "Klein Bottle (Figure-8)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryKleinBottle.tsx")
			},
			{
				id: "webgl_geometry_whitney_umbrella",
				name: "Whitney Umbrella",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryWhitneyUmbrella.tsx")
			},
			{
				id: "webgl_geometry_surface_of_revolution",
				name: "Surface of Revolution",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySurfaceOfRevolution.tsx")
			},
			{
				id: "webgl_geometry_cone",
				name: "Generalized Cone",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryCone.tsx")
			},
			{
				id: "webgl_geometry_steiner",
				name: "Steiner Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySteiner.tsx")
			},
			{
				id: "webgl_geometry_ruled_surface",
				name: "Ruled Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryRuledSurface.tsx")
			},
			{
				id: "webgl_geometry_offset_surface",
				name: "Offset Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryOffsetSurface.tsx")
			},
			{
				id: "webgl_geometry_twisted_box",
				name: "Twisted Box",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTwistedBox.tsx")
			},
			{
				id: "webgl_geometry_prism",
				name: "Generalized Prism",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryPrism.tsx")
			},
			{
				id: "webgl_geometry_blend_surface",
				name: "Blend Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryBlendSurface.tsx")
			},
			{
				id: "webgl_geometry_developable_surface",
				name: "Developable Surface",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryDevelopableSurface.tsx")
			},
			{
				id: "webgl_geometry_marching_cubes",
				name: "Marching Cubes",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMarchingCubes.tsx")
			},
			{
				id: "webgl_geometry_voxel",
				name: "Voxel Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryVoxel.tsx")
			},
			{
				id: "webgl_geometry_lsystem",
				name: "L-System Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLSystem.tsx")
			},
			{
				id: "webgl_geometry_menger_sponge",
				name: "Menger Sponge",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMengerSponge.tsx")
			},
			{
				id: "webgl_geometry_knots",
				name: "Mathematical Knots",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryKnots.tsx")
			},
			{
				id: "webgl_geometry_sierpinski",
				name: "Sierpinski Fractals",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySierpinski.tsx")
			},
			{
				id: "webgl_geometry_tessellation",
				name: "Tessellation Patterns",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryTessellation.tsx")
			},
			{
				id: "webgl_geometry_gears",
				name: "Gear Mechanism",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryGears.tsx")
			},
			{
				id: "webgl_geometry_julia_set",
				name: "Julia Set 3D",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryJuliaSet.tsx")
			},
			{
				id: "webgl_geometry_spring",
				name: "Spring/Helix Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySpring.tsx")
			},
			{
				id: "webgl_geometry_space_filling",
				name: "Space-Filling Curves",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySpaceFilling.tsx")
			},
			{
				id: "webgl_geometry_aperiodic",
				name: "Aperiodic Tiling (Penrose)",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryAperiodic.tsx")
			},
			{
				id: "webgl_geometry_mandelbulb",
				name: "Mandelbulb Fractal",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryMandelbulb.tsx")
			},
			{
				id: "webgl_geometry_points",
				name: "Point Cloud Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryPoints.tsx")
			},
			{
				id: "webgl_geometry_chain",
				name: "Chain Links",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryChain.tsx")
			},
			{
				id: "webgl_geometry_wireframe",
				name: "Wireframe Effects",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryWireframe.tsx")
			},
			{
				id: "webgl_geometry_modifiers",
				name: "Geometry Modifiers",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryModifiers.tsx")
			},
			{
				id: "webgl_geometry_decal",
				name: "Decal Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryDecal.tsx")
			},
			{
				id: "webgl_geometry_loft",
				name: "Loft Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometryLoft.tsx")
			},
			{
				id: "webgl_geometry_sweep",
				name: "Sweep Geometry",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySweep.tsx")
			},
			{
				id: "webgl_geometry_skinning",
				name: "Geometry Skinning",
				category: "geometries",
				component: () => import("/demo/src/WebGLGeometrySkinning.tsx")
			}
		]
	},
	{
		id: "materials",
		name: "Materials",
		demos: [
			{
				id: "webgl_materials",
				name: "Physical Materials",
				category: "materials",
				component: () => import("/demo/src/Materials.tsx")
			},
			{
				id: "webgl_materials_all",
				name: "All Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterials.tsx")
			},
			{
				id: "webgl_materials_physical",
				name: "Physical Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsPhysical.tsx")
			},
			{
				id: "webgl_materials_normal",
				name: "Normal Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsNormal.tsx")
			},
			{
				id: "webgl_materials_colors",
				name: "Material Colors",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsColors.tsx")
			},
			{
				id: "webgl_materials_transparency",
				name: "Transparency & Alpha",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsTransparency.tsx")
			},
			{
				id: "webgl_normal_map",
				name: "Normal Map",
				category: "materials",
				component: () => import("/demo/src/WebGLNormalMap.tsx")
			},
			{
				id: "webgl_materials_blending",
				name: "Blending",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsBlending.tsx")
			},
			{
				id: "webgl_materials_matcap",
				name: "Matcap Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsMatcap.tsx")
			},
			{
				id: "webgl_materials_cubemap",
				name: "Cubemap Reflection",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsCubemap.tsx")
			},
			{
				id: "webgl_materials_car",
				name: "Car Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsCar.tsx")
			},
			{
				id: "webgl_materials_normalmap",
				name: "Normal Map",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsNormalmap.tsx")
			},
			{
				id: "webgl_materials_physical_clearcoat",
				name: "Clearcoat",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsPhysicalClearcoat.tsx")
			},
			{
				id: "webgl_materials_physical_transmission",
				name: "Transmission",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsPhysicalTransmission.tsx")
			},
			{
				id: "webgl_materials_channels",
				name: "Channels",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsChannels.tsx")
			},
			{
				id: "webgl_materials_cubemap_dynamic",
				name: "Dynamic Cubemap",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsCubemapDynamic.tsx")
			},
			{
				id: "webgl_materials_toon",
				name: "Toon Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsToon.tsx")
			},
			{
				id: "webgl_materials_bumpmap",
				name: "Bump Map",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsBumpMap.tsx")
			},
			{
				id: "webgl_materials_alphahash",
				name: "Alpha Hash",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsAlphahash.tsx")
			},
			{
				id: "webgl_materials_blending_custom",
				name: "Custom Blending",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsBlendingCustom.tsx")
			},
			{
				id: "webgl_materials_cubemap_refraction",
				name: "Cubemap Refraction",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsCubemapRefraction.tsx")
			},
			{
				id: "webgl_materials_displacementmap",
				name: "Displacement Map",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsDisplacementMap.tsx")
			},
			{
				id: "webgl_materials_envmaps",
				name: "Environment Maps",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsEnvmaps.tsx")
			},
			{
				id: "webgl_materials_subsurface_scattering",
				name: "Subsurface Scattering",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsSubsurfaceScattering.tsx")
			},
			{
				id: "webgl_materials_texture_grid",
				name: "Texture Grid",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsTextureGuid.tsx")
			},
			{
				id: "webgl_materials_video",
				name: "Video Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsVideo.tsx")
			},
			{
				id: "webgl_materials_lightmap",
				name: "Light Map",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsLightMap.tsx")
			},
			{
				id: "webgl_materials_wireframe",
				name: "Wireframe Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsWireframe.tsx")
			},
			{
				id: "webgl_materials_grid",
				name: "Materials Grid (metalness/roughness)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsGrid.tsx")
			},
			{
				id: "webgl_materials_variants",
				name: "Material Variants",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsVariants.tsx")
			},
			{
				id: "webgl_materials_reflection",
				name: "Real-time Reflection",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsReflection.tsx")
			},
			{
				id: "webgl_materials_refraction",
				name: "Refraction",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsRefraction.tsx")
			},
			{
				id: "webgl_materials_emissive",
				name: "Emissive Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsEmissive.tsx")
			},
			{
				id: "webgl_materials_subsurface",
				name: "Subsurface Scattering",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsSubsurface.tsx")
			},
			{
				id: "webgl_materials_depth",
				name: "Depth Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsDepth.tsx")
			},
			{
				id: "webgl_materials_envmaps_groundprojection",
				name: "Env Map Ground Projection",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsEnvmapsGroundProjection.tsx")
			},
			{
				id: "webgl_materials_iridescence",
				name: "Iridescence (Thin Film)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsIridescence.tsx")
			},
			{
				id: "webgl_materials_glass",
				name: "Glass Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsGlass.tsx")
			},
			{
				id: "webgl_materials_fur",
				name: "Fur (Shell Technique)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsFur.tsx")
			},
			{
				id: "webgl_materials_sheen",
				name: "Sheen (Cloth)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsSheen.tsx")
			},
			{
				id: "webgl_materials_anisotropy",
				name: "Anisotropy (Brushed Metal)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsAnisotropy.tsx")
			},
			{
				id: "webgl_materials_dispersion",
				name: "Dispersion (Chromatic)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsDispersion.tsx")
			},
			{
				id: "webgl_materials_velvet",
				name: "Velvet (Sheen Material)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsVelvet.tsx")
			},
			{
				id: "webgl_materials_hologram",
				name: "Hologram Effect",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsHologram.tsx")
			},
			{
				id: "webgl_materials_xray",
				name: "X-Ray Material",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsXRay.tsx")
			},
			{
				id: "webgl_materials_wax",
				name: "Wax Candles (Transmission)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsWax.tsx")
			},
			{
				id: "webgl_materials_oil_slick",
				name: "Oil Slick (Thin Film)",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsOilSlick.tsx")
			},
			{
				id: "webgl_materials_procedural",
				name: "Procedural Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsProcedural.tsx")
			},
			{
				id: "webgl_materials_skin",
				name: "Skin SSS Approximation",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsSkin.tsx")
			},
			{
				id: "webgl_materials_texture",
				name: "Texture Mapping",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsTexture.tsx")
			},
			{
				id: "webgl_materials_blend",
				name: "Material Blending",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsBlend.tsx")
			},
			{
				id: "webgl_materials_dissolve",
				name: "Dissolve Effect",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsDissolve.tsx")
			},
			{
				id: "webgl_materials_gradient",
				name: "Gradient Materials",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsGradient.tsx")
			},
			{
				id: "webgl_materials_parallax",
				name: "Parallax Mapping",
				category: "materials",
				component: () => import("/demo/src/WebGLMaterialsParallax.tsx")
			}
		]
	},
	{
		id: "textures",
		name: "Textures",
		demos: [
			{
				id: "webgl_textures_cube",
				name: "Textures Cube",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesCube.tsx")
			},
			{
				id: "webgl_uvs",
				name: "UVs",
				category: "textures",
				component: () => import("/demo/src/WebGLUVs.tsx")
			},
			{
				id: "webgl_framebuffer_texture",
				name: "Framebuffer Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLFramebufferTexture.tsx")
			},
			{
				id: "webgl_depth_texture",
				name: "Depth Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLDepthTexture.tsx")
			},
			{
				id: "webgl_textures_colorbar",
				name: "Color Bar",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesColorbar.tsx")
			},
			{
				id: "webgl_textures_compression",
				name: "Compression",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesCompression.tsx")
			},
			{
				id: "webgl_textures_kinetic",
				name: "Kinetic",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesKinetic.tsx")
			},
			{
				id: "webgl_textures_pmrem_brandt",
				name: "PMREM Brandt",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesPMREMbrandt.tsx")
			},
			{
				id: "webgl_textures_sequence",
				name: "Sequence",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesSequence.tsx")
			},
			{
				id: "webgl_rtt",
				name: "Render to Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLRTT.tsx")
			},
			{
				id: "webgl_render_target_cube",
				name: "Cube Render Target",
				category: "textures",
				component: () => import("/demo/src/WebGLRenderTargetCube.tsx")
			},
			{
				id: "webgl_textures_anisotropy",
				name: "Anisotropic Filtering",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesAnisotropy.tsx")
			},
			{
				id: "webgl_textures_dynamic",
				name: "Dynamic Canvas Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesDynamic.tsx")
			},
			{
				id: "webgl_textures_3d",
				name: "3D Volume Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLTextures3D.tsx")
			},
			{
				id: "webgl_textures_pmrem",
				name: "PMREM Environment",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesPMREM.tsx")
			},
			{
				id: "webgl_textures_video",
				name: "Video Texture (Canvas)",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturesVideo.tsx")
			},
			{
				id: "webgl_loader_texture_exr",
				name: "EXR Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLLoaderTextureEXR.tsx")
			},
			{
				id: "webgl_loader_texture_hdr",
				name: "HDR Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLLoaderTextureHDR.tsx")
			},
			{
				id: "webgl_loader_texture_dds",
				name: "DDS Texture",
				category: "textures",
				component: () => import("/demo/src/WebGLLoaderTextureDDS.tsx")
			},
			{
				id: "webgl_texture_uv",
				name: "UV Mapping",
				category: "textures",
				component: () => import("/demo/src/WebGLTextureUV.tsx")
			},
			{
				id: "webgl_texture_offset",
				name: "Texture Offset",
				category: "textures",
				component: () => import("/demo/src/WebGLTextureOffset.tsx")
			},
			{
				id: "webgl_texture_projection",
				name: "Texture Projection",
				category: "textures",
				component: () => import("/demo/src/WebGLTextureProjection.tsx")
			},
			{
				id: "webgl_texture_packing",
				name: "Texture Packing",
				category: "textures",
				component: () => import("/demo/src/WebGLTexturePacking.tsx")
			},
			{
				id: "webgl_texture_mipmaps",
				name: "Texture Mipmaps",
				category: "textures",
				component: () => import("/demo/src/WebGLTextureMipmaps.tsx")
			}
		]
	},
	{
		id: "alpha",
		name: "Alpha",
		demos: [{
			id: "webgl_alpha",
			name: "Alpha",
			category: "alpha",
			component: () => import("/demo/src/WebGLAlpha.tsx")
		}, {
			id: "webgl_alpha_blend_modes",
			name: "Alpha Blend Modes",
			category: "alpha",
			component: () => import("/demo/src/WebGLAlphaBlendModes.tsx")
		}]
	},
	{
		id: "clipping",
		name: "Clipping",
		demos: [
			{
				id: "webgl_clipping",
				name: "Clipping",
				category: "clipping",
				component: () => import("/demo/src/WebGLClipping.tsx")
			},
			{
				id: "webgl_clipping_advanced",
				name: "Clipping Advanced",
				category: "clipping",
				component: () => import("/demo/src/WebGLClippingAdvanced.tsx")
			},
			{
				id: "webgl_clipping_intersection",
				name: "Clipping Intersection",
				category: "clipping",
				component: () => import("/demo/src/WebGLClippingIntersection.tsx")
			},
			{
				id: "webgl_clipping_intersect",
				name: "Clipping Plane Intersect",
				category: "clipping",
				component: () => import("/demo/src/WebGLClippingIntersect.tsx")
			},
			{
				id: "webgl_clipping_stencil",
				name: "Clipping Stencil",
				category: "clipping",
				component: () => import("/demo/src/WebGLClippingStencil.tsx")
			}
		]
	},
	{
		id: "wireframes",
		name: "Wireframes",
		demos: [{
			id: "webgl_wireframes",
			name: "Wireframes",
			category: "wireframes",
			component: () => import("/demo/src/WebGLWireframes.tsx")
		}, {
			id: "webgl_wireframes_solid",
			name: "Wireframes Solid",
			category: "wireframes",
			component: () => import("/demo/src/WebGLWireframesSolid.tsx")
		}]
	},
	{
		id: "particles",
		name: "Particles",
		demos: [
			{
				id: "webgl_particles",
				name: "Particles",
				category: "particles",
				component: () => import("/demo/src/WebGLParticles.tsx")
			},
			{
				id: "webgl_particles_buffer",
				name: "Particles Buffer",
				category: "particles",
				component: () => import("/demo/src/ParticlesBuffer.tsx")
			},
			{
				id: "webgl_particles_basic",
				name: "Particles Basic",
				category: "particles",
				component: () => import("/demo/src/Particles.tsx")
			},
			{
				id: "webgl_points_sprites",
				name: "Points Sprites",
				category: "particles",
				component: () => import("/demo/src/WebGLPointsSprites.tsx")
			},
			{
				id: "webgl_points_dynamic",
				name: "Points Dynamic",
				category: "particles",
				component: () => import("/demo/src/WebGLPointsDynamic.tsx")
			},
			{
				id: "webgl_points_waves",
				name: "Points Waves",
				category: "particles",
				component: () => import("/demo/src/WebGLPointsWaves.tsx")
			},
			{
				id: "webgl_points_billboards",
				name: "Points Billboards",
				category: "particles",
				component: () => import("/demo/src/WebGLPointsBillboards.tsx")
			},
			{
				id: "webgl_particles_snow",
				name: "Snow Particles",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesSnow.tsx")
			},
			{
				id: "webgl_particles_galaxy",
				name: "Galaxy",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesGalaxy.tsx")
			},
			{
				id: "webgl_particles_wave",
				name: "Particle Wave",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesWave.tsx")
			},
			{
				id: "webgl_particles_firework",
				name: "Firework",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesFirework.tsx")
			},
			{
				id: "webgl_volume_cloud",
				name: "Volume Cloud",
				category: "particles",
				component: () => import("/demo/src/WebGLVolumeCloud.tsx")
			},
			{
				id: "webgl_custom_attributes_points",
				name: "Custom Attributes Points",
				category: "particles",
				component: () => import("/demo/src/WebGLCustomAttributesPoints.tsx")
			},
			{
				id: "webgl_particles_rain",
				name: "Rain Particles",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesRain.tsx")
			},
			{
				id: "webgl_particles_magnet",
				name: "Magnetic Field Lines",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesMagnet.tsx")
			},
			{
				id: "webgl_particles_smoke",
				name: "Smoke Particles",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesSmoke.tsx")
			},
			{
				id: "webgl_particles_constellation",
				name: "Star Constellation",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesConstellation.tsx")
			},
			{
				id: "webgl_particles_fire",
				name: "Fire Particles",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesFire.tsx")
			},
			{
				id: "webgl_particles_fireflies",
				name: "Fireflies",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesFireflies.tsx")
			},
			{
				id: "webgl_particles_sparks",
				name: "Welding Sparks",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesSparks.tsx")
			},
			{
				id: "webgl_particles_aurora",
				name: "Aurora Borealis",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesAurora.tsx")
			},
			{
				id: "webgl_particles_nebula",
				name: "Space Nebula",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesNebula.tsx")
			},
			{
				id: "webgl_particles_confetti",
				name: "Confetti Physics",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesConfetti.tsx")
			},
			{
				id: "webgl_particles_liquid",
				name: "Liquid Simulation (SPH)",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesLiquid.tsx")
			},
			{
				id: "webgl_particles_gravity_well",
				name: "Gravity Well Attractors",
				category: "particles",
				component: () => import("/demo/src/WebGLParticlesGravityWell.tsx")
			}
		]
	},
	{
		id: "fog",
		name: "Fog",
		demos: [{
			id: "webgl_fog",
			name: "Fog",
			category: "fog",
			component: () => import("/demo/src/WebGLFog.tsx")
		}, {
			id: "webgl_fog_exp2",
			name: "Fog Exp2",
			category: "fog",
			component: () => import("/demo/src/WebGLFogExp2.tsx")
		}]
	},
	{
		id: "shadows",
		name: "Shadows",
		demos: [
			{
				id: "webgl_shadowmap",
				name: "Shadow Map",
				category: "shadows",
				component: () => import("/demo/src/ShadowMap.tsx")
			},
			{
				id: "webgl_shadowmap_advanced",
				name: "Shadow Map Advanced",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowMap.tsx")
			},
			{
				id: "webgl_shadow_contact",
				name: "Shadow Contact",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowContact.tsx")
			},
			{
				id: "webgl_shadows",
				name: "Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadows.tsx")
			},
			{
				id: "webgl_shadowmap_pointlight",
				name: "PointLight Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowmapPointlight.tsx")
			},
			{
				id: "webgl_shadowmap_vsm",
				name: "VSM Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowmapVSM.tsx")
			},
			{
				id: "webgl_shadowmap_csm",
				name: "Cascaded Shadow Maps",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowmapCSM.tsx")
			},
			{
				id: "webgl_shadow_csm",
				name: "Cascaded Shadow Maps",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowCSM.tsx")
			},
			{
				id: "webgl_shadowmap_viewer",
				name: "Shadow Map Viewer",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowmapViewer.tsx")
			},
			{
				id: "webgl_shadowmap_performance",
				name: "Shadowmap Performance",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowmapPerformance.tsx")
			},
			{
				id: "webgl_shadowmesh",
				name: "Shadow Mesh",
				category: "shadows",
				component: () => import("/demo/src/WebGLObjectsShadowMesh.tsx")
			},
			{
				id: "webgl_shadows_bias",
				name: "Shadow Bias",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowsBias.tsx")
			},
			{
				id: "webgl_shadows_contact_soft",
				name: "Soft Contact Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowsContactSoft.tsx")
			},
			{
				id: "webgl_shadow_pcss",
				name: "PCSS Soft Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowPCSS.tsx")
			},
			{
				id: "webgl_shadow_vsm",
				name: "VSM Shadows",
				category: "shadows",
				component: () => import("/demo/src/WebGLShadowVSM.tsx")
			}
		]
	},
	{
		id: "lights",
		name: "Lights",
		demos: [
			{
				id: "webgl_lights",
				name: "Physical Lights",
				category: "lights",
				component: () => import("/demo/src/WebGLLights.tsx")
			},
			{
				id: "webgl_lights_rectarea",
				name: "RectArea Lights",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsRectArea.tsx")
			},
			{
				id: "webgl_lights_spotlight",
				name: "Spotlight",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsSpotlight.tsx")
			},
			{
				id: "webgl_lightprobe",
				name: "Light Probe",
				category: "lights",
				component: () => import("/demo/src/WebGLLightprobe.tsx")
			},
			{
				id: "webgl_lights_hemisphere",
				name: "Hemisphere Light",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsHemisphere.tsx")
			},
			{
				id: "webgl_lights_hemisphere2",
				name: "Hemisphere Light (Full)",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsHemisphere2.tsx")
			},
			{
				id: "webgl_lights_hemispheric",
				name: "Hemispheric Lighting",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsHemispheric.tsx")
			},
			{
				id: "webgl_lights_physical",
				name: "Physical Lights",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsPhysical.tsx")
			},
			{
				id: "webgl_lights_pointlights",
				name: "Point Lights",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsPointLights.tsx")
			},
			{
				id: "webgl_lights_rectarealight",
				name: "Rect Area Light",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsRectAreaLight.tsx")
			},
			{
				id: "webgl_lights_spotlight_shadow",
				name: "Spot Light Shadow",
				category: "lights",
				component: () => import("/demo/src/WebGLLightSpotShadow.tsx")
			},
			{
				id: "webgl_lights_probe",
				name: "Light Probe",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsProbe.tsx")
			},
			{
				id: "webgl_lights_area",
				name: "Area Lights (RectArea)",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsArea.tsx")
			},
			{
				id: "webgl_lights_soft_shadow",
				name: "Soft Shadows",
				category: "lights",
				component: () => import("/demo/src/WebGLLightsSoftShadow.tsx")
			},
			{
				id: "webgl_light_area",
				name: "Area Light",
				category: "lights",
				component: () => import("/demo/src/WebGLLightArea.tsx")
			},
			{
				id: "webgl_light_volumetric",
				name: "Volumetric Light",
				category: "lights",
				component: () => import("/demo/src/WebGLLightVolumetric.tsx")
			},
			{
				id: "webgl_light_ies",
				name: "IES Light Profile",
				category: "lights",
				component: () => import("/demo/src/WebGLLightIES.tsx")
			}
		]
	},
	{
		id: "cameras",
		name: "Cameras",
		demos: [
			{
				id: "webgl_camera",
				name: "Camera",
				category: "cameras",
				component: () => import("/demo/src/WebGLCamera.tsx")
			},
			{
				id: "webgl_camera_array",
				name: "Camera Array",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraArray.tsx")
			},
			{
				id: "webgl_camera_stereo",
				name: "Stereo Camera",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraStereo.tsx")
			},
			{
				id: "webgl_multiple_elements",
				name: "Multiple Elements",
				category: "cameras",
				component: () => import("/demo/src/WebGLMultipleElements.tsx")
			},
			{
				id: "webgl_camera_logarithmic_depth_buffer",
				name: "Logarithmic Depth Buffer",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraLogarithmicDepthBuffer.tsx")
			},
			{
				id: "webgl_panorama_cube",
				name: "Panorama Cube",
				category: "cameras",
				component: () => import("/demo/src/WebGLPanoramaCube.tsx")
			},
			{
				id: "webgl_camera_cinematic",
				name: "Cinematic Camera Path",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraCinematic.tsx")
			},
			{
				id: "webgl_multiple_cameras",
				name: "Multiple Cameras (Split Screen)",
				category: "cameras",
				component: () => import("/demo/src/WebGLMultipleCameras.tsx")
			},
			{
				id: "webgl_camera_path",
				name: "Camera Path",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraPath.tsx")
			},
			{
				id: "webgl_camera_zoom",
				name: "Camera Zoom vs Dolly",
				category: "cameras",
				component: () => import("/demo/src/WebGLCameraZoom.tsx")
			}
		]
	},
	{
		id: "loaders",
		name: "Loaders",
		demos: [
			{
				id: "webgl_loader_gltf",
				name: "GLTF Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTF.tsx")
			},
			{
				id: "webgl_loader_gltf_anisotropy",
				name: "GLTF Anisotropy",
				category: "loaders",
				component: () => import("/demo/src/GltfAnisotropy.tsx")
			},
			{
				id: "webgl_loader_gltf_demo",
				name: "GLTF Demo",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTF.tsx")
			},
			{
				id: "webgl_loader_gltf_2",
				name: "GLTF 2",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTF2.tsx")
			},
			{
				id: "webgl_loaders_gltf_animated",
				name: "glTF Animated Character",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoadersGltfAnimated.tsx")
			},
			{
				id: "webgl_loader_obj",
				name: "OBJ Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderOBJ.tsx")
			},
			{
				id: "webgl_loader_draco",
				name: "Draco Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderDraco.tsx")
			},
			{
				id: "webgl_loader_fbx",
				name: "FBX Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderFBX.tsx")
			},
			{
				id: "webgl_loader_ply",
				name: "PLY Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderPLY.tsx")
			},
			{
				id: "webgl_loader_collada",
				name: "Collada Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderCollada.tsx")
			},
			{
				id: "webgl_loader_pcd",
				name: "PCD Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderPCD.tsx")
			},
			{
				id: "webgl_loader_vrml",
				name: "VRML Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderVRML.tsx")
			},
			{
				id: "webgl_loader_stl",
				name: "STL Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderSTL.tsx")
			},
			{
				id: "webgl_loader_3mf",
				name: "3MF Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoader3MF.tsx")
			},
			{
				id: "webgl_loader_bvh",
				name: "BVH Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderBVH.tsx")
			},
			{
				id: "webgl_loader_gcode",
				name: "GCode Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGCode.tsx")
			},
			{
				id: "webgl_loader_svg",
				name: "SVG Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderSVG.tsx")
			},
			{
				id: "webgl_loader_ttf",
				name: "TTF Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderTTF.tsx")
			},
			{
				id: "webgl_loader_pdb",
				name: "PDB Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderPDB.tsx")
			},
			{
				id: "webgl_loader_xyz",
				name: "XYZ Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderXYZ.tsx")
			},
			{
				id: "webgl_loader_3ds",
				name: "3DS Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoader3DS.tsx")
			},
			{
				id: "webgl_loader_3dm",
				name: "3DM Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoader3DM.tsx")
			},
			{
				id: "webgl_loader_amf",
				name: "AMF Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderAMF.tsx")
			},
			{
				id: "webgl_loader_kmz",
				name: "KMZ Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderKMZ.tsx")
			},
			{
				id: "webgl_loader_lwo",
				name: "LWO Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderLWO.tsx")
			},
			{
				id: "webgl_loader_md2",
				name: "MD2 Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderMD2.tsx")
			},
			{
				id: "webgl_loader_nrrd",
				name: "NRRD Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderNRRD.tsx")
			},
			{
				id: "webgl_loader_vox",
				name: "VOX Loader",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderVOX.tsx")
			},
			{
				id: "webgl_loader_gltf_variants",
				name: "GLTF Variants",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTFVariants.tsx")
			},
			{
				id: "webgl_loader_gltf_compressed",
				name: "GLTF Compressed",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTFCompressed.tsx")
			},
			{
				id: "webgl_loader_gltf_lights",
				name: "GLTF Lights (KHR_lights_punctual)",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderGLTFLights.tsx")
			},
			{
				id: "webgl_loader_texture_basis",
				name: "Texture Basis (Compression)",
				category: "loaders",
				component: () => import("/demo/src/WebGLLoaderTextureBasis.tsx")
			}
		]
	},
	{
		id: "postprocessing",
		name: "Postprocessing",
		demos: [
			{
				id: "webgl_postprocessing",
				name: "Unreal Bloom",
				category: "postprocessing",
				component: () => import("/demo/src/Postprocessing.tsx")
			},
			{
				id: "webgl_postprocessing_demo",
				name: "Postprocessing Demo",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessing.tsx")
			},
			{
				id: "webgl_postprocessing_film",
				name: "Film Effect",
				category: "postprocessing",
				component: () => import("/demo/src/PostprocessingFilm.tsx")
			},
			{
				id: "webgl_postprocessing_ssao",
				name: "SSAO",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingSSAO.tsx")
			},
			{
				id: "webgl_postprocessing_fxaa",
				name: "FXAA",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingFXAA.tsx")
			},
			{
				id: "webgl_postprocessing_bokeh",
				name: "Bokeh DOF",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingBokeh.tsx")
			},
			{
				id: "webgl_postprocessing_smaa",
				name: "SMAA",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingSMAA.tsx")
			},
			{
				id: "webgl_postprocessing_vignette",
				name: "Vignette",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingVignette.tsx")
			},
			{
				id: "webgl_color_grading",
				name: "Color Grading",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLColorGrading.tsx")
			},
			{
				id: "webgl_postprocessing_dof",
				name: "Depth of Field",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingDOF.tsx")
			},
			{
				id: "webgl_postprocessing_godrays",
				name: "God Rays",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingGodRays.tsx")
			},
			{
				id: "webgl_postprocessing_outline",
				name: "Outline",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingOutline.tsx")
			},
			{
				id: "webgl_postprocessing_ssr",
				name: "Screen Space Reflections",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingSSR.tsx")
			},
			{
				id: "webgl_postprocessing_transition",
				name: "Scene Transition",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingTransition.tsx")
			},
			{
				id: "webgl_postprocessing_glitch",
				name: "Glitch",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingGlitch.tsx")
			},
			{
				id: "webgl_postprocessing_glow",
				name: "Bloom Glow",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingGlow.tsx")
			},
			{
				id: "webgl_postprocessing_pixel",
				name: "Pixel",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingPixel.tsx")
			},
			{
				id: "webgl_postprocessing_render_pixel",
				name: "Pixelated Rendering",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingRenderPixelated.tsx")
			},
			{
				id: "webgl_postprocessing_afterimage",
				name: "Afterimage",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingAfterimage.tsx")
			},
			{
				id: "webgl_postprocessing_taa",
				name: "TAA",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingTAA.tsx")
			},
			{
				id: "webgl_postprocessing_temporal",
				name: "Temporal AA",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingTemporal.tsx")
			},
			{
				id: "webgl_postprocessing_chromatic",
				name: "Chromatic Aberration",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingChromatic.tsx")
			},
			{
				id: "webgl_postprocessing_depth",
				name: "Depth Effect",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingDepth.tsx")
			},
			{
				id: "webgl_postprocessing_nodes",
				name: "Node-based Effects",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingNodes.tsx")
			},
			{
				id: "webgl_postprocessing_advanced",
				name: "Advanced",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingAdvanced.tsx")
			},
			{
				id: "webgl_postprocessing_bloom",
				name: "Bloom",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingBloom.tsx")
			},
			{
				id: "webgl_postprocessing_bloom_hdr",
				name: "Bloom HDR",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingBloomHDR.tsx")
			},
			{
				id: "webgl_postprocessing_lens_distortion",
				name: "Lens Distortion",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingLensDistortion.tsx")
			},
			{
				id: "webgl_postprocessing_pixel_art",
				name: "Pixel Art",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingPixelArt.tsx")
			},
			{
				id: "webgl_postprocessing_motionblur",
				name: "Motion Blur",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingMotionBlur.tsx")
			},
			{
				id: "webgl_postprocessing_grayscale",
				name: "Color Adjust (Grayscale/Sepia)",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingGrayscale.tsx")
			},
			{
				id: "webgl_postprocessing_colorgrading",
				name: "Color Grading (Post)",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingColorgrading.tsx")
			},
			{
				id: "webgl_postprocessing_halftone",
				name: "Halftone",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingHalftone.tsx")
			},
			{
				id: "webgl_postprocessing_dotscreen",
				name: "Dot Screen",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingDotScreen.tsx")
			},
			{
				id: "webgl_postprocessing_mask",
				name: "Masking",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingMask.tsx")
			},
			{
				id: "webgl_postprocessing_sao",
				name: "SAO",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingSAO.tsx")
			},
			{
				id: "webgl_shader_kaleido",
				name: "Kaleidoscope",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderKaleido.tsx")
			},
			{
				id: "webgl_shader_sepia",
				name: "Sepia / Vintage Film",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderSepia.tsx")
			},
			{
				id: "webgl_postprocessing_crt",
				name: "CRT Screen Effect",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingCRT.tsx")
			},
			{
				id: "webgl_postprocessing_ascii",
				name: "ASCII Art Effect",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingAscii.tsx")
			},
			{
				id: "webgl_postprocessing_gtao",
				name: "GTAO",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingGTAO.tsx")
			},
			{
				id: "webgl_postprocessing_3dlut",
				name: "3D LUT",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessing3DLUT.tsx")
			},
			{
				id: "webgl_shader_tiltshift",
				name: "Tilt Shift Blur",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderTiltShift.tsx")
			},
			{
				id: "webgl_shader_sobel",
				name: "Sobel Edge Detection",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderSobel.tsx")
			},
			{
				id: "webgl_shader_rgbshift",
				name: "RGB Shift",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderRGBShift.tsx")
			},
			{
				id: "webgl_shader_hue_saturation",
				name: "Hue/Saturation",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLShaderHueSaturation.tsx")
			},
			{
				id: "webgl_postprocessing_bloom_emissive",
				name: "Bloom Emissive",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingBloomEmissive.tsx")
			},
			{
				id: "webgl_postprocessing_bloom_advanced",
				name: "Bloom Advanced (Selective)",
				category: "postprocessing",
				component: () => import("/demo/src/WebGLPostprocessingBloomAdvanced.tsx")
			}
		]
	},
	{
		id: "shaders",
		name: "Shaders",
		demos: [
			{
				id: "webgl_shader_fire",
				name: "Fire Shader",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderFire.tsx")
			},
			{
				id: "webgl_shader_demo",
				name: "Custom Shaders",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderDemo.tsx")
			},
			{
				id: "webgl_shaders_heatmap",
				name: "Heatmap Shader",
				category: "shaders",
				component: () => import("/demo/src/WebGLShadersHeatmap.tsx")
			},
			{
				id: "webgl_shader_distortion",
				name: "Distortion Shaders",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderDistortion.tsx")
			},
			{
				id: "webgl_shader_noise",
				name: "Noise Shaders",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderNoise.tsx")
			},
			{
				id: "webgl_shader_lavalamp",
				name: "Shader Lava Lamp",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderLavaLamp.tsx")
			},
			{
				id: "webgl_shader_vignette",
				name: "Shader Vignette",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderVignette.tsx")
			},
			{
				id: "webgl_shaders_sky",
				name: "Shaders Sky",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderSky.tsx")
			},
			{
				id: "webgl_shaders_ocean",
				name: "Shaders Ocean",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderOcean.tsx")
			},
			{
				id: "webgl_tonemapping",
				name: "Tone Mapping",
				category: "shaders",
				component: () => import("/demo/src/WebGLShaderTonemapping.tsx")
			},
			{
				id: "webgl_shaders_noise",
				name: "Simplex Noise Shader",
				category: "shaders",
				component: () => import("/demo/src/WebGLShadersNoise.tsx")
			}
		]
	},
	{
		id: "environment",
		name: "Environment",
		demos: [
			{
				id: "webgl_sky",
				name: "Sky",
				category: "environment",
				component: () => import("/demo/src/Sky.tsx")
			},
			{
				id: "webgl_water",
				name: "Water",
				category: "environment",
				component: () => import("/demo/src/Water.tsx")
			},
			{
				id: "webgl_shaders_sky_environment",
				name: "Sky Shader",
				category: "environment",
				component: () => import("/demo/src/WebGLShadersSky.tsx")
			},
			{
				id: "webgl_shader_sky",
				name: "Sky Shader 2",
				category: "environment",
				component: () => import("/demo/src/WebGLShaderSky.tsx")
			},
			{
				id: "webgl_shader_ocean",
				name: "Ocean Shader",
				category: "environment",
				component: () => import("/demo/src/WebGLShaderOcean.tsx")
			},
			{
				id: "webgl_panorama_equirectangular",
				name: "Equirectangular Panorama",
				category: "environment",
				component: () => import("/demo/src/WebGLPanoramaEquirectangular.tsx")
			},
			{
				id: "webgl_environment_hdr",
				name: "Environment HDR",
				category: "environment",
				component: () => import("/demo/src/WebGLEnvironmentHdr.tsx")
			}
		]
	},
	{
		id: "objects",
		name: "Objects",
		demos: [
			{
				id: "webgl_reflector",
				name: "Reflector",
				category: "objects",
				component: () => import("/demo/src/Reflector.tsx")
			},
			{
				id: "webgl_mirror",
				name: "Mirror",
				category: "objects",
				component: () => import("/demo/src/WebGLMirror.tsx")
			},
			{
				id: "webgl_objects_lod_cluster",
				name: "LOD Cluster",
				category: "objects",
				component: () => import("/demo/src/WebGLObjectsLodCluster.tsx")
			},
			{
				id: "webgl_lensflares",
				name: "Lens Flares",
				category: "objects",
				component: () => import("/demo/src/WebGLLensflares.tsx")
			},
			{
				id: "webgl_sector",
				name: "Sector",
				category: "objects",
				component: () => import("/demo/src/Sector.tsx")
			},
			{
				id: "webgl_marchingcubes",
				name: "Marching Cubes",
				category: "objects",
				component: () => import("/demo/src/WebGLObjectsMarchingCubes.tsx")
			},
			{
				id: "webgl_refractor",
				name: "Refractor",
				category: "objects",
				component: () => import("/demo/src/WebGLObjectsRefractor.tsx")
			},
			{
				id: "webgl_helpers_zoo",
				name: "Helpers Zoo",
				category: "objects",
				component: () => import("/demo/src/WebGLMiscObjects.tsx")
			},
			{
				id: "webgl_instanced_mesh_dynamic",
				name: "Instanced Mesh Dynamic",
				category: "objects",
				component: () => import("/demo/src/WebGLInstancedMesh.tsx")
			}
		]
	},
	{
		id: "instancing",
		name: "Instancing",
		demos: [
			{
				id: "webgl_instancing",
				name: "Instancing",
				category: "instancing",
				component: () => import("/demo/src/Instancing.tsx")
			},
			{
				id: "webgl_instancing_performance",
				name: "Instancing Performance",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingPerformance.tsx")
			},
			{
				id: "webgl_instancing_animated",
				name: "Instancing Animated",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingAnimated.tsx")
			},
			{
				id: "webgl_instancing_billboards",
				name: "Instancing Billboards",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingBillboards.tsx")
			},
			{
				id: "webgl_instancing_scatter",
				name: "Instancing Scatter",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingScatter.tsx")
			},
			{
				id: "webgl_instancing_morph",
				name: "Instancing Morph",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingMorph.tsx")
			},
			{
				id: "webgl_instancing_dynamic",
				name: "Instancing Dynamic",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingDynamic.tsx")
			},
			{
				id: "webgl_instancing_grass",
				name: "Instanced Grass",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingGrass.tsx")
			},
			{
				id: "webgl_instancing_raycast",
				name: "Instancing Raycast",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingRaycast.tsx")
			},
			{
				id: "webgl_mesh_batch",
				name: "Batched Mesh",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingBatched.tsx")
			},
			{
				id: "webgl_instancing_lod",
				name: "Instancing LOD",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingLOD.tsx")
			},
			{
				id: "webgl_instancing_trees",
				name: "Instanced Trees",
				category: "instancing",
				component: () => import("/demo/src/WebGLInstancingTrees.tsx")
			}
		]
	},
	{
		id: "interactive",
		name: "Interactive",
		demos: [
			{
				id: "webgl_interactive_cubes",
				name: "Interactive Cubes",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveCubes.tsx")
			},
			{
				id: "webgl_interactive_cubes_raycaster",
				name: "Interactive Cubes Raycaster",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveCubesRaycast.tsx")
			},
			{
				id: "webgl_interactive_voxelpainter",
				name: "Voxel Painter",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveVoxelpainter.tsx")
			},
			{
				id: "webgl_interactive_buffer_geometry",
				name: "Interactive BufferGeometry",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveBufferGeometry.tsx")
			},
			{
				id: "webgl_interactive_cubes_gpu",
				name: "Interactive Cubes GPU",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveCubesGPU.tsx")
			},
			{
				id: "webgl_interactive_cubes_ortho",
				name: "Interactive Cubes Ortho",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveCubesOrtho.tsx")
			},
			{
				id: "webgl_interactive_lines",
				name: "Interactive Lines",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveLines.tsx")
			},
			{
				id: "webgl_interactive_raycasting_points",
				name: "Interactive Raycasting Points",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveRaycastingPoints.tsx")
			},
			{
				id: "misc_boxselection",
				name: "Box Selection",
				category: "interactive",
				component: () => import("/demo/src/MiscBoxselection.tsx")
			},
			{
				id: "misc_raycaster_helper",
				name: "Raycaster Helper",
				category: "interactive",
				component: () => import("/demo/src/MiscRaycasterHelper.tsx")
			},
			{
				id: "webgl_interactive_points",
				name: "Interactive Points",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractivePoints.tsx")
			},
			{
				id: "webgl_interactive_voxels",
				name: "Voxel Builder",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveVoxels.tsx")
			},
			{
				id: "webgl_interactive_draggablecubes",
				name: "Draggable Cubes",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractiveDrag.tsx")
			},
			{
				id: "webgl_interactive_pick",
				name: "Object Picking",
				category: "interactive",
				component: () => import("/demo/src/WebGLInteractivePick.tsx")
			}
		]
	},
	{
		id: "sprites",
		name: "Sprites",
		demos: [
			{
				id: "webgl_sprites",
				name: "Sprites",
				category: "sprites",
				component: () => import("/demo/src/WebGLSprites.tsx")
			},
			{
				id: "webgl_sprites_billboard",
				name: "Billboard Sprites",
				category: "sprites",
				component: () => import("/demo/src/WebGLSpritesBillboard.tsx")
			},
			{
				id: "webgl_sprites_scene",
				name: "Sprites Scene",
				category: "sprites",
				component: () => import("/demo/src/WebGLSpritesNodes.tsx")
			}
		]
	},
	{
		id: "buffergeometry",
		name: "BufferGeometry",
		demos: [
			{
				id: "webgl_buffergeometry",
				name: "BufferGeometry",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometry.tsx")
			},
			{
				id: "webgl_buffergeometry_indexed",
				name: "Indexed BufferGeometry",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBuffergeometryIndexed.tsx")
			},
			{
				id: "webgl_buffergeometry_lines",
				name: "BufferGeometry Lines",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryLines.tsx")
			},
			{
				id: "webgl_buffergeometry_instancing",
				name: "BufferGeometry Instancing",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryInstancing.tsx")
			},
			{
				id: "webgl_buffergeometry_drawrange",
				name: "BufferGeometry DrawRange",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryDrawRange.tsx")
			},
			{
				id: "webgl_buffergeometry_custom_attributes",
				name: "Custom Attributes Particles",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryCustomAttributes.tsx")
			},
			{
				id: "webgl_buffergeometry_rawshader",
				name: "Raw Shader Points",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryRawShader.tsx")
			},
			{
				id: "webgl_buffergeometry_selective_draw",
				name: "Selective Drawing",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometrySelectiveDrawing.tsx")
			},
			{
				id: "webgl_buffergeometry_instanced",
				name: "Instanced BufferGeometry",
				category: "buffergeometry",
				component: () => import("/demo/src/WebGLBufferGeometryInstanced.tsx")
			}
		]
	},
	{
		id: "css3d",
		name: "CSS3D",
		demos: [
			{
				id: "css3d_periodictable",
				name: "Periodic Table",
				category: "css3d",
				component: () => import("/demo/src/css3d_periodictable.tsx")
			},
			{
				id: "webgl_css3d",
				name: "WebGL + CSS3D",
				category: "css3d",
				component: () => import("/demo/src/webgl_css3d.tsx")
			},
			{
				id: "webgl_css3d_carousel",
				name: "CSS3D Carousel",
				category: "css3d",
				component: () => import("/demo/src/WebGLCss3dCarousel.tsx")
			},
			{
				id: "webgl_css3d_demo",
				name: "CSS3D Demo",
				category: "css3d",
				component: () => import("/demo/src/WebGLCSS3D.tsx")
			},
			{
				id: "css3d_mixed",
				name: "Mixed",
				category: "css3d",
				component: () => import("/demo/src/CSS3DMixed.tsx")
			},
			{
				id: "css3d_molecules",
				name: "Molecules",
				category: "css3d",
				component: () => import("/demo/src/CSS3DMolecules.tsx")
			},
			{
				id: "css3d_orthographic",
				name: "Orthographic",
				category: "css3d",
				component: () => import("/demo/src/CSS3DOrthographic.tsx")
			}
		]
	},
	{
		id: "reflection",
		name: "Reflection",
		demos: [{
			id: "webgl_reflection",
			name: "Reflection",
			category: "reflection",
			component: () => import("/demo/src/WebGLReflection.tsx")
		}, {
			id: "webgl_reflection_chrome",
			name: "Reflection Chrome",
			category: "reflection",
			component: () => import("/demo/src/WebGLReflectionChrome.tsx")
		}]
	},
	{
		id: "canvas_texture",
		name: "Canvas Texture",
		demos: [{
			id: "webgl_canvas_texture",
			name: "Canvas Texture",
			category: "canvas_texture",
			component: () => import("/demo/src/WebGLCanvasTexture.tsx")
		}, {
			id: "webgl_canvas_texture_animated",
			name: "Canvas Texture Animated",
			category: "canvas_texture",
			component: () => import("/demo/src/WebGLCanvasTextureAnimated.tsx")
		}]
	},
	{
		id: "toon",
		name: "Toon",
		demos: [{
			id: "webgl_toon",
			name: "Toon Shading",
			category: "toon",
			component: () => import("/demo/src/WebGLToon.tsx")
		}, {
			id: "webgl_toon_inkline",
			name: "Toon Inkline",
			category: "toon",
			component: () => import("/demo/src/WebGLToonInkline.tsx")
		}]
	},
	{
		id: "svg",
		name: "SVG",
		demos: [
			{
				id: "svg_lines",
				name: "SVG Lines",
				category: "svg",
				component: () => import("/demo/src/SVGLines.tsx")
			},
			{
				id: "webgl_svg",
				name: "SVG Shapes",
				category: "svg",
				component: () => import("/demo/src/WebGLSVG.tsx")
			},
			{
				id: "webgl_svg_extrude",
				name: "SVG Extrude",
				category: "svg",
				component: () => import("/demo/src/WebGLSvgExtrude.tsx")
			}
		]
	},
	{
		id: "webgpu",
		name: "WebGPU",
		demos: [{
			id: "webgl_webgpu",
			name: "WebGPU Style",
			category: "webgpu",
			component: () => import("/demo/src/WebGLWebGPU.tsx")
		}, {
			id: "webgl_webgpu_compute",
			name: "WebGPU Compute (GPGPU sim)",
			category: "webgpu",
			component: () => import("/demo/src/WebGLWebgpuCompute.tsx")
		}]
	},
	{
		id: "point_cloud",
		name: "Point Cloud",
		demos: [{
			id: "webgl_point_cloud",
			name: "Point Cloud",
			category: "point_cloud",
			component: () => import("/demo/src/WebGLPointCloud.tsx")
		}, {
			id: "webgl_point_cloud_animated",
			name: "Point Cloud Animated",
			category: "point_cloud",
			component: () => import("/demo/src/WebGLPointCloudAnimated.tsx")
		}]
	},
	{
		id: "terrain",
		name: "Terrain",
		demos: [{
			id: "webgl_terrain",
			name: "Terrain",
			category: "terrain",
			component: () => import("/demo/src/WebGLTerrain.tsx")
		}, {
			id: "webgl_terrain_dynamic",
			name: "Terrain Dynamic",
			category: "terrain",
			component: () => import("/demo/src/WebGLTerrainDynamic.tsx")
		}]
	},
	{
		id: "custom_shader",
		name: "Custom Shader",
		demos: [
			{
				id: "webgl_custom_shader",
				name: "Custom Shader",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLCustomShader.tsx")
			},
			{
				id: "webgl_custom_shader_water",
				name: "Custom Shader Water",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLCustomShaderWater.tsx")
			},
			{
				id: "webgl_shader_fresnel",
				name: "Fresnel Shader",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLShaderFresnel.tsx")
			},
			{
				id: "webgl_shader_fresnel_cube",
				name: "Fresnel Shader (Cube)",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLShaderFresnelCube.tsx")
			},
			{
				id: "webgl_shader_glow",
				name: "Glow Effect",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLShaderGlow.tsx")
			},
			{
				id: "webgl_shader_hologram",
				name: "Hologram Shader",
				category: "custom_shader",
				component: () => import("/demo/src/WebGLShaderHologram.tsx")
			}
		]
	},
	{
		id: "physics",
		name: "Physics",
		demos: [
			{
				id: "webgl_physics",
				name: "Physics",
				category: "physics",
				component: () => import("/demo/src/WebGLPhysics.tsx")
			},
			{
				id: "webgl_physics_balls",
				name: "Bouncing Balls Physics",
				category: "physics",
				component: () => import("/demo/src/WebGLPhysicsBalls.tsx")
			},
			{
				id: "webgl_physics_cloth",
				name: "Physics Cloth",
				category: "physics",
				component: () => import("/demo/src/WebGLPhysicsCloth.tsx")
			},
			{
				id: "webgl_physics_rigid",
				name: "Rigid Body Stacking",
				category: "physics",
				component: () => import("/demo/src/WebGLPhysicsRigid.tsx")
			},
			{
				id: "physics_ammo_break",
				name: "Ammo.js Breakable",
				category: "physics",
				component: () => import("/demo/src/PhysicsAmmoBreak.tsx")
			},
			{
				id: "physics_ammo_cloth",
				name: "Ammo.js Cloth",
				category: "physics",
				component: () => import("/demo/src/PhysicsAmmoCloth.tsx")
			},
			{
				id: "physics_rapier_basic",
				name: "Rapier Basic",
				category: "physics",
				component: () => import("/demo/src/PhysicsRapierBasic.tsx")
			},
			{
				id: "physics_rapier_instancing",
				name: "Rapier Instancing",
				category: "physics",
				component: () => import("/demo/src/PhysicsRapierInstancing.tsx")
			},
			{
				id: "physics_rapier_joints",
				name: "Rapier Joints",
				category: "physics",
				component: () => import("/demo/src/PhysicsRapierJoints.tsx")
			}
		]
	},
	{
		id: "audio",
		name: "Audio",
		demos: [
			{
				id: "webgl_audio",
				name: "Audio Visualizer",
				category: "audio",
				component: () => import("/demo/src/WebGLAudio.tsx")
			},
			{
				id: "webgl_audio_analyser",
				name: "Audio Analyser",
				category: "audio",
				component: () => import("/demo/src/WebGLAudioAnalyser.tsx")
			},
			{
				id: "webgl_audio_orientation",
				name: "Audio Orientation",
				category: "audio",
				component: () => import("/demo/src/WebGLAudioOrientation.tsx")
			},
			{
				id: "webgl_audio_positional",
				name: "Positional Audio",
				category: "audio",
				component: () => import("/demo/src/WebGLAudioPositional.tsx")
			},
			{
				id: "webgl_audio_visualizer",
				name: "Audio Visualizer",
				category: "audio",
				component: () => import("/demo/src/WebGLAudioVisualizer.tsx")
			}
		]
	},
	{
		id: "css2d",
		name: "CSS2D",
		demos: [
			{
				id: "css2d_label",
				name: "CSS2D Label",
				category: "css2d",
				component: () => import("/demo/src/CSS2DLabel.tsx")
			},
			{
				id: "webgl_css2d",
				name: "CSS2D Renderer",
				category: "css2d",
				component: () => import("/demo/src/WebGLCSS2D.tsx")
			},
			{
				id: "webgl_css2d_chart",
				name: "CSS2D Chart",
				category: "css2d",
				component: () => import("/demo/src/WebGLCss2dChart.tsx")
			}
		]
	},
	{
		id: "vr",
		name: "VR",
		demos: [{
			id: "webgl_vr",
			name: "VR Experience",
			category: "vr",
			component: () => import("/demo/src/WebGLVR.tsx")
		}]
	},
	{
		id: "webxr",
		name: "WebXR",
		demos: [
			{
				id: "webgl_webxr",
				name: "WebXR",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXR.tsx")
			},
			{
				id: "webgl_webxr_ar",
				name: "WebXR AR",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXRAR.tsx")
			},
			{
				id: "webgl_webxr_vr",
				name: "WebXR VR",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXRVR.tsx")
			},
			{
				id: "webgl_webxr_hit_test",
				name: "WebXR Hit Test",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXRHitTest.tsx")
			},
			{
				id: "webgl_webxr_anchors",
				name: "WebXR Anchors",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXRAnchors.tsx")
			},
			{
				id: "webgl_webxr_layers",
				name: "WebXR Layers",
				category: "webxr",
				component: () => import("/demo/src/WebGLWebXRLayers.tsx")
			},
			{
				id: "webxr_ar_cones",
				name: "WebXR AR Cones",
				category: "webxr",
				component: () => import("/demo/src/WebXRARCones.tsx")
			},
			{
				id: "webxr_ar_plane_detection",
				name: "WebXR AR Plane Detection",
				category: "webxr",
				component: () => import("/demo/src/WebXRARPlaneDetection.tsx")
			},
			{
				id: "webxr_vr_ballshooter",
				name: "WebXR VR Ball Shooter",
				category: "webxr",
				component: () => import("/demo/src/WebXRVRBallshooter.tsx")
			},
			{
				id: "webxr_vr_paint",
				name: "WebXR VR Paint",
				category: "webxr",
				component: () => import("/demo/src/WebXRVRPaint.tsx")
			},
			{
				id: "webxr_sandbox",
				name: "WebXR Sandbox",
				category: "webxr",
				component: () => import("/demo/src/WebXRSandbox.tsx")
			}
		]
	},
	{
		id: "advanced",
		name: "Advanced",
		demos: [
			{
				id: "webgl_batch_lod_bvh",
				name: "Batch LOD BVH",
				category: "advanced",
				component: () => import("/demo/src/BatchLodBvh.tsx")
			},
			{
				id: "webgl_useframe_test",
				name: "UseFrame Test",
				category: "advanced",
				component: () => import("/demo/src/UseFrameTest.tsx")
			},
			{
				id: "webgl_lod",
				name: "Level of Detail",
				category: "advanced",
				component: () => import("/demo/src/WebGLLOD.tsx")
			},
			{
				id: "webgl_decals",
				name: "Decals",
				category: "advanced",
				component: () => import("/demo/src/WebGLDecals.tsx")
			},
			{
				id: "webgl_modifier_simplify",
				name: "Simplify Modifier",
				category: "advanced",
				component: () => import("/demo/src/WebGLModifierSimplify.tsx")
			},
			{
				id: "webgl_modifier_curve",
				name: "Curve Modifier",
				category: "advanced",
				component: () => import("/demo/src/WebGLModifierCurve.tsx")
			},
			{
				id: "webgl_helpers",
				name: "Helpers",
				category: "advanced",
				component: () => import("/demo/src/WebGLHelpers.tsx")
			},
			{
				id: "webgl_multiple_geometries",
				name: "Multiple Geometries",
				category: "advanced",
				component: () => import("/demo/src/WebGLMultipleGeometries.tsx")
			},
			{
				id: "webgl_multiple_renderers",
				name: "Multiple Renderers",
				category: "advanced",
				component: () => import("/demo/src/WebGLMultipleRenderers.tsx")
			},
			{
				id: "webgl_tone_mapping",
				name: "Tone Mapping",
				category: "advanced",
				component: () => import("/demo/src/WebGLToneMapping.tsx")
			},
			{
				id: "webgl_shader_lava",
				name: "Lava Shader",
				category: "advanced",
				component: () => import("/demo/src/WebGLShaderLava.tsx")
			},
			{
				id: "webgl_shaders_ocean_advanced",
				name: "Ocean Shader (Advanced)",
				category: "advanced",
				component: () => import("/demo/src/WebGLShadersOcean.tsx")
			},
			{
				id: "webgl_modifier_tessellation",
				name: "Tessellation Modifier",
				category: "advanced",
				component: () => import("/demo/src/WebGLModifierTessellation.tsx")
			},
			{
				id: "webgl_modifier_edgesplit",
				name: "Edge Split Modifier",
				category: "advanced",
				component: () => import("/demo/src/WebGLModifierEdgeSplit.tsx")
			},
			{
				id: "webgl_performance",
				name: "Performance (Instancing)",
				category: "advanced",
				component: () => import("/demo/src/WebGLPerformance.tsx")
			},
			{
				id: "webgl_multiple_scenes",
				name: "Multiple Scenes",
				category: "advanced",
				component: () => import("/demo/src/WebGLMultipleScenes.tsx")
			},
			{
				id: "webgl_clipping_planes",
				name: "Clipping Planes",
				category: "advanced",
				component: () => import("/demo/src/WebGLClippingPlanes.tsx")
			},
			{
				id: "webgl_advanced_ssr",
				name: "Screen Space Reflections",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedSSR.tsx")
			},
			{
				id: "webgl_advanced_ssao",
				name: "SSAO",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedSSAO.tsx")
			},
			{
				id: "webgl_advanced_gtao",
				name: "GTAO",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedGTAO.tsx")
			},
			{
				id: "webgl_advanced_godrays",
				name: "God Rays",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedGodRays.tsx")
			},
			{
				id: "webgl_advanced_bloom",
				name: "Bloom",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedBloom.tsx")
			},
			{
				id: "webgl_advanced_pixelation",
				name: "Pixelation",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedPixelation.tsx")
			},
			{
				id: "webgl_advanced_vignette",
				name: "Vignette",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedVignette.tsx")
			},
			{
				id: "webgl_advanced_motionblur",
				name: "Motion Blur",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedMotionBlur.tsx")
			},
			{
				id: "webgl_advanced_dof",
				name: "Depth of Field",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedDOF.tsx")
			},
			{
				id: "webgl_advanced_chromatic",
				name: "Chromatic Aberration",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedChromatic.tsx")
			},
			{
				id: "webgl_advanced_outline",
				name: "Outline Effect",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedOutline.tsx")
			},
			{
				id: "webgl_advanced_fog",
				name: "Volumetric Fog",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedFog.tsx")
			},
			{
				id: "webgl_advanced_film",
				name: "Film Grain",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedFilm.tsx")
			},
			{
				id: "webgl_advanced_halftone",
				name: "Halftone",
				category: "advanced",
				component: () => import("/demo/src/WebGLAdvancedHalftone.tsx")
			}
		]
	},
	{
		id: "controls",
		name: "Controls",
		demos: [
			{
				id: "misc_controls_transform",
				name: "Transform Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsTransform.tsx")
			},
			{
				id: "misc_controls_orbit",
				name: "Orbit Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsOrbit.tsx")
			},
			{
				id: "misc_controls_trackball",
				name: "Trackball Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsTrackball.tsx")
			},
			{
				id: "misc_controls_fly",
				name: "Fly Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsFly.tsx")
			},
			{
				id: "misc_controls_drag",
				name: "Drag Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsDrag.tsx")
			},
			{
				id: "misc_controls_arcball",
				name: "Arcball Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsArcball.tsx")
			},
			{
				id: "misc_controls_firstperson",
				name: "First Person Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsFirstPerson.tsx")
			},
			{
				id: "misc_controls_pointerlock",
				name: "Pointer Lock Controls",
				category: "controls",
				component: () => import("/demo/src/MiscControlsPointerLock.tsx")
			},
			{
				id: "misc_lookat",
				name: "Look At Demo",
				category: "controls",
				component: () => import("/demo/src/WebGLMiscLookAt.tsx")
			},
			{
				id: "webgl_controls_trackball",
				name: "Trackball Controls",
				category: "controls",
				component: () => import("/demo/src/WebGLControlsTrackball.tsx")
			}
		]
	}
];
// Flattened list for search
export const allDemos = categories.flatMap((c) => c.demos);

//# sourceMappingURL=data:application/json;base64,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QUFPO0dBQXVCO0dBQ3RIO0lBQUUsSUFBSTtJQUEyQixNQUFNO0lBQVksVUFBVTtJQUFZLGlCQUFpQixPQUFPO0dBQTJCO0VBQ2hJO0NBQ0o7Q0FDQTtFQUNJLElBQUk7RUFDSixNQUFNO0VBQ04sT0FBTztHQUNIO0lBQUUsSUFBSTtJQUEyQixNQUFNO0lBQXNCLFVBQVU7SUFBWSxpQkFBaUIsT0FBTztHQUEyQjtHQUN0STtJQUFFLElBQUk7SUFBdUIsTUFBTTtJQUFrQixVQUFVO0lBQVksaUJBQWlCLE9BQU87R0FBdUI7R0FDMUg7SUFBRSxJQUFJO0lBQTJCLE1BQU07SUFBc0IsVUFBVTtJQUFZLGlCQUFpQixPQUFPO0dBQTJCO0dBQ3RJO0lBQUUsSUFBSTtJQUFxQixNQUFNO0lBQWdCLFVBQVU7SUFBWSxpQkFBaUIsT0FBTztHQUFxQjtHQUNwSDtJQUFFLElBQUk7SUFBc0IsTUFBTTtJQUFpQixVQUFVO0lBQVksaUJBQWlCLE9BQU87R0FBc0I7R0FDdkg7SUFBRSxJQUFJO0lBQXlCLE1BQU07SUFBb0IsVUFBVTtJQUFZLGlCQUFpQixPQUFPO0dBQXlCO0dBQ2hJO0lBQUUsSUFBSTtJQUE2QixNQUFNO0lBQXlCLFVBQVU7SUFBWSxpQkFBaUIsT0FBTztHQUE2QjtHQUM3STtJQUFFLElBQUk7SUFBNkIsTUFBTTtJQUF5QixVQUFVO0lBQVksaUJBQWlCLE9BQU87R0FBNkI7R0FDN0k7SUFBRSxJQUFJO0lBQWUsTUFBTTtJQUFnQixVQUFVO0lBQVksaUJBQWlCLE9BQU87R0FBcUI7R0FDOUc7SUFBRSxJQUFJO0lBQTRCLE1BQU07SUFBc0IsVUFBVTtJQUFZLGlCQUFpQixPQUFPO0dBQTRCO0VBQzVJO0NBQ0o7QUFDSjs7QUFHQSxPQUFPLE1BQU0sV0FBd0IsV0FBVyxTQUFRLE1BQUssRUFBRSxLQUFLIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInJlZ2lzdHJ5LnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSlNYIH0gZnJvbSAnd29ieSdcblxuZXhwb3J0IGludGVyZmFjZSBEZW1vRW50cnkge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjYXRlZ29yeTogc3RyaW5nXG4gICAgY29tcG9uZW50OiAoKSA9PiBQcm9taXNlPHsgZGVmYXVsdDogKCkgPT4gSlNYLkVsZW1lbnQgfT5cbiAgICB0aHVtYm5haWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUVudHJ5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGVtb3M6IERlbW9FbnRyeVtdXG59XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeUVudHJ5W10gPSBbXG4gICAge1xuICAgICAgICBpZDogJ2Jhc2ljcycsXG4gICAgICAgIG5hbWU6ICdCYXNpY3MnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BsYW5lJywgbmFtZTogJ1BsYW5lJywgY2F0ZWdvcnk6ICdiYXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9QbGFuZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYm94ZXMnLCBuYW1lOiAnMyBCb3hlcyArIENsaWNrJywgY2F0ZWdvcnk6ICdiYXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Cb3gzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9iYXNpY3Nfb3JiaXRzJywgbmFtZTogJ0Jhc2ljcyBPcmJpdHMnLCBjYXRlZ29yeTogJ2Jhc2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQmFzaWNzT3JiaXRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9ib3hlc19jbGljaycsIG5hbWU6ICdCb3hlcyArIENsaWNrJywgY2F0ZWdvcnk6ICdiYXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Cb3gyQ2xpY2snKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3N0YXRpY190ZXh0JywgbmFtZTogJ0JveCArIFN0YXRpYyBUZXh0JywgY2F0ZWdvcnk6ICdiYXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Cb3hTdGF0aWNUZXh0JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9odG1sX3RleHQnLCBuYW1lOiAnQm94ICsgSFRNTCBUZXh0JywgY2F0ZWdvcnk6ICdiYXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Cb3hIdG1sVGV4dCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ3JvdXAnLCBuYW1lOiAnR3JvdXAnLCBjYXRlZ29yeTogJ2Jhc2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL2dyb3VwJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9vYmplY3QzZCcsIG5hbWU6ICdPYmplY3QzRCBBZGQnLCBjYXRlZ29yeTogJ2Jhc2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL09iamVjdDNkQWRkJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2xpbmVzJyxcbiAgICAgICAgbmFtZTogJ0xpbmVzJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaW1wbGVfbGluZScsIG5hbWU6ICdTaW1wbGUgTGluZScsIGNhdGVnb3J5OiAnbGluZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9TaW1wbGVMaW5lJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9mYXRfbGluZXMnLCBuYW1lOiAnRmF0IExpbmVzJywgY2F0ZWdvcnk6ICdsaW5lcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL0ZhdExpbmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saW5lMycsIG5hbWU6ICdMaW5lIFNlZ21lbnRzJywgY2F0ZWdvcnk6ICdsaW5lcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL0xpbmUzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9kX2xpbmVzJywgbmFtZTogJ0QgTGluZXMnLCBjYXRlZ29yeTogJ2xpbmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vRExpbmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ZhdF9saW5lc19hZHZhbmNlZCcsIG5hbWU6ICdGYXQgTGluZXMgQWR2YW5jZWQnLCBjYXRlZ29yeTogJ2xpbmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xGYXRMaW5lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGluZXMnLCBuYW1lOiAnTGluZXMnLCBjYXRlZ29yeTogJ2xpbmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaW5lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGluZXNfZGFzaGVkJywgbmFtZTogJ0Rhc2hlZCBMaW5lcycsIGNhdGVnb3J5OiAnbGluZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpbmVzRGFzaGVkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saW5lc19mYXQnLCBuYW1lOiAnRmF0IExpbmVzIChMaW5lMiknLCBjYXRlZ29yeTogJ2xpbmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaW5lc0xpbmVNYXRlcmlhbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGluZXNfZmF0X3dpcmVmcmFtZScsIG5hbWU6ICdGYXQgV2lyZWZyYW1lJywgY2F0ZWdvcnk6ICdsaW5lcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGluZXNMaW5lTWF0ZXJpYWxXaXJlZnJhbWUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xpbmVzX3NwaGVyZScsIG5hbWU6ICdMaW5lcyBTcGhlcmUnLCBjYXRlZ29yeTogJ2xpbmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaW5lc1NwaGVyZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYnVmZmVyZ2VvbWV0cnlfbGluZXNfaW5kZXhlZCcsIG5hbWU6ICdCdWZmZXJHZW9tZXRyeSBMaW5lcyBJbmRleGVkJywgY2F0ZWdvcnk6ICdsaW5lcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlMaW5lc0luZGV4ZWQnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnZWZmZWN0cycsXG4gICAgICAgIG5hbWU6ICdFZmZlY3RzJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9lZmZlY3RzX2FuYWdseXBoJywgbmFtZTogJ0FuYWdseXBoJywgY2F0ZWdvcnk6ICdlZmZlY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xFZmZlY3RzQW5hZ2x5cGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2VmZmVjdHNfc3RlcmVvJywgbmFtZTogJ1N0ZXJlbycsIGNhdGVnb3J5OiAnZWZmZWN0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRWZmZWN0c1N0ZXJlbycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZWZmZWN0c19zdGVyZW8yJywgbmFtZTogJ1N0ZXJlbyAyJywgY2F0ZWdvcnk6ICdlZmZlY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xFZmZlY3RzU3RlcmVvMicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZWZmZWN0c19zdGVyZW8zJywgbmFtZTogJ1N0ZXJlbyAzJywgY2F0ZWdvcnk6ICdlZmZlY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xFZmZlY3RzU3RlcmVvMycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZWZmZWN0c19wYXJhbGxheGJhcnJpZXInLCBuYW1lOiAnUGFyYWxsYXggQmFycmllcicsIGNhdGVnb3J5OiAnZWZmZWN0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRWZmZWN0c1BhcmFsbGF4QmFycmllcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZWZmZWN0c19hc2NpaScsIG5hbWU6ICdBU0NJSSBFZmZlY3QnLCBjYXRlZ29yeTogJ2VmZmVjdHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEVmZmVjdHNBc2NpaScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZWZmZWN0c19vdXRsaW5lJywgbmFtZTogJ0VmZmVjdHMgT3V0bGluZScsIGNhdGVnb3J5OiAnZWZmZWN0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRWZmZWN0c091dGxpbmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2VmZmVjdHNfcGVwcGVyc2dob3N0JywgbmFtZTogJ1BlcHBlcnMgR2hvc3QnLCBjYXRlZ29yeTogJ2VmZmVjdHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEVmZmVjdHNQZXBwZXJzR2hvc3QnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnYW5pbWF0aW9uJyxcbiAgICAgICAgbmFtZTogJ0FuaW1hdGlvbicsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2tleWZyYW1lJywgbmFtZTogJ0FuaW1hdGlvbiBLZXlmcmFtZScsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vQW5pbWF0aW9uS2V5ZnJhbWUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9wYXJ0aWNsZXMnLCBuYW1lOiAnQW5pbWF0aW9uIFBhcnRpY2xlcycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vQW5pbWF0aW9uUGFydGljbGVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fa2V5ZnJhbWVzJywgbmFtZTogJ0FuaW1hdGlvbiBLZXlmcmFtZXMnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL0FuaW1hdGlvbktleWZyYW1lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX3NraW5uaW5nJywgbmFtZTogJ0FuaW1hdGlvbiBTa2lubmluZycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vQW5pbWF0aW9uU2tpbm5pbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21vcnBoX3RhcmdldHMnLCBuYW1lOiAnTW9ycGggVGFyZ2V0cycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNb3JwaFRhcmdldHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9za2lubmluZ19ibGVuZGluZycsIG5hbWU6ICdTa2lubmluZyBCbGVuZGluZycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25Ta2lubmluZ0JsZW5kaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fc2tpbm5pbmdfYWRkaXRpdmVfYmxlbmRpbmcnLCBuYW1lOiAnQWRkaXRpdmUgQmxlbmRpbmcnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uU2tpbm5pbmdBZGRpdGl2ZUJsZW5kaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fc2tpbm5pbmdfbW9ycGgnLCBuYW1lOiAnU2tpbm5pbmcgTW9ycGgnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uU2tpbm5pbmdNb3JwaCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX211bHRpcGxlJywgbmFtZTogJ011bHRpcGxlIEFuaW1hdGlvbnMnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uTXVsdGlwbGUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl93YWxrJywgbmFtZTogJ0FuaW1hdGlvbiBXYWxrJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbldhbGsnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9tb3JwaCcsIG5hbWU6ICdBbmltYXRpb24gTW9ycGgnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uTW9ycGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9rZXlmcmFtZXNfc2t5JywgbmFtZTogJ0FuaW1hdGlvbiBLZXlmcmFtZXMgU2t5JywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbktleWZyYW1lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2xvY29tb3Rpb24nLCBuYW1lOiAnQW5pbWF0aW9uIExvY29tb3Rpb24nLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uTG9jb21vdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2xvY29tb3RpdmUnLCBuYW1lOiAnQW5pbWF0aW9uIExvY29tb3RpdmUnLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uTG9jb21vdGl2ZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2lrJywgbmFtZTogJ0FuaW1hdGlvbiBJSycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25JSycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX3NraW5uaW5nX2lrJywgbmFtZTogJ1NraW5uaW5nIElLJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvblNraW5uaW5nSUsnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ21pc2NfYW5pbWF0aW9uX2dyb3VwcycsIG5hbWU6ICdBbmltYXRpb24gR3JvdXBzJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9NaXNjQW5pbWF0aW9uR3JvdXBzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tb3JwaHRhcmdldHNfc3BoZXJlJywgbmFtZTogJ01vcnBoIFRhcmdldHMgU3BoZXJlJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1vcnBoVGFyZ2V0c1NwaGVyZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbW9ycGh0YXJnZXRzX2ZsYW1pbmdvJywgbmFtZTogJ01vcnBoIFRhcmdldHMgRmxhbWluZ28nLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTW9ycGhUYXJnZXRzRmxhbWluZ28nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21vcnBodGFyZ2V0c19ob3JzZScsIG5hbWU6ICdNb3JwaCBUYXJnZXRzIEhvcnNlJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1vcnBoVGFyZ2V0c0hvcnNlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fd2Fsa19ibGVuZCcsIG5hbWU6ICdXYWxrIEN5Y2xlIEJsZW5kJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbldhbGtCbGVuZCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2Nsb3RoJywgbmFtZTogJ0Nsb3RoIFNpbXVsYXRpb24nLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uQ2xvdGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9jbG90aDInLCBuYW1lOiAnQ2xvdGggRmxhZycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25DbG90aDInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9jbG90aDMnLCBuYW1lOiAnQ2xvdGggRmxhZyBXaW5kJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbkNsb3RoMycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX3JvYm90JywgbmFtZTogJ1JvYm90IEFybScsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25Sb2JvdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX3NrZWxldG9uJywgbmFtZTogJ0FuaW1hdGlvbiBTa2VsZXRvbicsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25Ta2VsZXRvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX3NraW5uaW5nX2Jhc2ljJywgbmFtZTogJ1NraW5uaW5nIEJhc2ljJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvblNraW5uaW5nQmFzaWMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9jcm93ZCcsIG5hbWU6ICdDcm93ZCBTaW11bGF0aW9uJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbkNyb3dkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fcGVuZHVsdW0nLCBuYW1lOiAnRG91YmxlIFBlbmR1bHVtJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvblBlbmR1bHVtJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fZmxvY2tpbmcnLCBuYW1lOiAnRmxvY2tpbmcgKENQVSBCb2lkcyknLCBjYXRlZ29yeTogJ2FuaW1hdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQW5pbWF0aW9uRmxvY2tpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FuaW1hdGlvbl9iaXJkcycsIG5hbWU6ICdCaXJkcyBGbG9ja2luZyAoQm9pZHMpJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvbkJpcmRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9ncGdwdV9iaXJkcycsIG5hbWU6ICdHUEdQVSBCaXJkcyAoR1BVIEJvaWRzKScsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHUEdQVUJpcmRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hbmltYXRpb25fc3ByaW5nJywgbmFtZTogJ1NwcmluZyBQaHlzaWNzIENoYWluJywgY2F0ZWdvcnk6ICdhbmltYXRpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFuaW1hdGlvblNwcmluZycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYW5pbWF0aW9uX2JsZW5kJywgbmFtZTogJ0FuaW1hdGlvbiBCbGVuZGluZycsIGNhdGVnb3J5OiAnYW5pbWF0aW9uJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbmltYXRpb25CbGVuZCcpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdnZW9tZXRyaWVzJyxcbiAgICAgICAgbmFtZTogJ0dlb21ldHJpZXMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJpZXMnLCBuYW1lOiAnQWxsIEdlb21ldHJpZXMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9HZW9tZXRyaWVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0X2dlb21ldHJ5JywgbmFtZTogJ1RleHQgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9UZXh0R2VvbWV0cnknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2N1YmUnLCBuYW1lOiAnR2VvbWV0cnkgQ3ViZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDdWJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyaWVzX3Nob3djYXNlJywgbmFtZTogJ0FsbCBHZW9tZXRyaWVzIFNob3djYXNlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyaWVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyaWVzX3R1YmUnLCBuYW1lOiAnVHViZSBHZW9tZXRyeScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cmllc1R1YmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3NoYXBlcycsIG5hbWU6ICdHZW9tZXRyeSBTaGFwZXMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U2hhcGVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jdWJlMicsIG5hbWU6ICdTaW1wbGUgQ3ViZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDdWJlMicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbGF0aGUnLCBuYW1lOiAnR2VvbWV0cnkgTGF0aGUnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5TGF0aGUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJpZXNfbGF0aGUnLCBuYW1lOiAnTGF0aGUgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJpZXNMYXRoZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfdGVhcG90JywgbmFtZTogJ1V0YWggVGVhcG90JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVRlYXBvdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfY29udmV4JywgbmFtZTogJ0NvbnZleCBHZW9tZXRyeScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDb252ZXgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2V4dHJ1ZGVfc2hhcGVzJywgbmFtZTogJ0V4dHJ1ZGUgU2hhcGVzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUV4dHJ1ZGVTaGFwZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2V4dHJ1c2lvbicsIG5hbWU6ICdTaGFwZSBFeHRydXNpb24nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RXh0cnVzaW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jc2cnLCBuYW1lOiAnQ1NHIEdlb21ldHJ5JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUNTRycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfY29sb3JzJywgbmFtZTogJ1ZlcnRleCBDb2xvcnMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q29sb3JzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jb2xvcnNfbHV0JywgbmFtZTogJ0NvbG9yIExvb2t1cCBUYWJsZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDb2xvcnNMb29rdXB0YWJsZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbWluZWNyYWZ0JywgbmFtZTogJ01pbmVjcmFmdCBUZXJyYWluJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU1pbmVjcmFmdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3BsaW5lX2VkaXRvcicsIG5hbWU6ICdTcGxpbmUgRWRpdG9yJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVNwbGluZUVkaXRvcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3BsaW5lX3R1YmUnLCBuYW1lOiAnU3BsaW5lIFR1YmUgUGF0aCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTcGxpbmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3RleHRfc3Ryb2tlJywgbmFtZTogJ1RleHQgU3Ryb2tlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVRleHRTdHJva2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X251cmJzJywgbmFtZTogJ05VUkJTJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU51cmJzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9keW5hbWljJywgbmFtZTogJ0R5bmFtaWMgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RHluYW1pYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcGFyYW1ldHJpYycsIG5hbWU6ICdQYXJhbWV0cmljIFN1cmZhY2VzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVBhcmFtZXRyaWMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJpZXNfcGFyYW1ldHJpYycsIG5hbWU6ICdQYXJhbWV0cmljIEdlb21ldHJpZXMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJpZXNQYXJhbWV0cmljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9leHRydWRlX3NwbGluZXMnLCBuYW1lOiAnRXh0cnVkZSBTcGxpbmVzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUV4dHJ1ZGVTcGxpbmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9oaWVyYXJjaHknLCBuYW1lOiAnR2VvbWV0cnkgSGllcmFyY2h5JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUhpZXJhcmNoeScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbm9ybWFscycsIG5hbWU6ICdWZXJ0ZXggTm9ybWFscycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlOb3JtYWxzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV90ZXJyYWluJywgbmFtZTogJ1Byb2NlZHVyYWwgVGVycmFpbicsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlUZXJyYWluJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9wcm9jZWR1cmFsJywgbmFtZTogJ1Byb2NlZHVyYWwgU3BpcmFsJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVByb2NlZHVyYWwnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21vcnBodGFyZ2V0cycsIG5hbWU6ICdNb3JwaCBUYXJnZXRzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNb3JwaFRhcmdldHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21vcnBoJywgbmFtZTogJ01vcnBoIFRhcmdldHMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5TW9ycGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3BvbHloZWRyYScsIG5hbWU6ICdQbGF0b25pYyAmIEFyY2hpbWVkZWFuIFNvbGlkcycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlQb2x5aGVkcmEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3N0ZWxsYXRlZCcsIG5hbWU6ICdTdGVsbGF0ZWQgSWNvc2FoZWRyb24nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3RlbGxhdGVkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9mcmFjdGFsJywgbmFtZTogJ0ZyYWN0YWwgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RnJhY3RhbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcm9sbGluZycsIG5hbWU6ICdSb2xsaW5nIFNoYXBlcycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlSb2xsaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9zcGlyYWwnLCBuYW1lOiAnU3BpcmFsIEdhbGF4eScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTcGlyYWwnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3R1YmVfZmx5JywgbmFtZTogJ1R1YmUgRmx5LVRocm91Z2gnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5VHViZUZseScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfd2FycCcsIG5hbWU6ICdNZXNoIFdhcnAgRGVmb3JtYXRpb24nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5V2FycCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfY29udmV4X2h1bGwnLCBuYW1lOiAnQ29udmV4IEh1bGwgQW5pbWF0ZWQnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q29udmV4SHVsbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfdG9ydXNrbm90X3NoYWRlcicsIG5hbWU6ICdUb3J1c0tub3QgU2hhZGVyJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVRvcnVzS25vdFNoYWRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfYm9vbGVhbicsIG5hbWU6ICdCb29sZWFuIE9wZXJhdGlvbnMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Qm9vbGVhbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfYm9vbGVhbl9vcHMnLCBuYW1lOiAnQm9vbGVhbiBPcGVyYXRpb25zJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUJvb2xlYW5PcHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2xhdGhlX3Byb2ZpbGVzJywgbmFtZTogJ0xhdGhlIFByb2ZpbGVzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUxhdGhlUHJvZmlsZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3N1YmRpdmlzaW9uJywgbmFtZTogJ01lc2ggU3ViZGl2aXNpb24nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3ViZGl2aXNpb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X25vaXNlXzNkJywgbmFtZTogJzNEIE5vaXNlIFRlcnJhaW4nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Tm9pc2UzRCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfZXh0cnVkZV90ZXh0JywgbmFtZTogJ0V4dHJ1ZGVkIFRleHQnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RXh0cnVkZVRleHQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X29jZWFuX3dhdmVzJywgbmFtZTogJ09jZWFuIFdhdmVzIChHZXJzdG5lciknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5T2NlYW5XYXZlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfY3J5c3RhbCcsIG5hbWU6ICdDcnlzdGFsIENsdXN0ZXInLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q3J5c3RhbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfaW5zdGFuY2luZ19wZXJmJywgbmFtZTogJ0luc3RhbmNpbmcgUGVyZm9ybWFuY2UgKDUwayknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5SW5zdGFuY2luZ1BlcmYnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21ldGFiYWxscycsIG5hbWU6ICdNZXRhYmFsbHMgKE1hcmNoaW5nQ3ViZXMpJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU1ldGFiYWxscycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbWV0YWJhbGwnLCBuYW1lOiAnTWV0YWJhbGxzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU1ldGFiYWxsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9idWJibGVzJywgbmFtZTogJ1NvYXAgQnViYmxlcycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlCdWJibGVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV92b3Jvbm9pJywgbmFtZTogJ1Zvcm9ub2kgUGF0dGVybicsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlWb3Jvbm9pJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9mcmFjdGFsX3RlcnJhaW4nLCBuYW1lOiAnRnJhY3RhbCBUZXJyYWluIChEaWFtb25kLVNxdWFyZSknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RnJhY3RhbFRlcnJhaW4nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2ZyYWN0YWxfbGFuZHNjYXBlJywgbmFtZTogJ0ZyYWN0YWwgTGFuZHNjYXBlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUZyYWN0YWxMYW5kc2NhcGUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21vYml1cycsIG5hbWU6ICdNw7ZiaXVzIFN0cmlwJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU1vYml1cycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfa2xlaW4nLCBuYW1lOiAnS2xlaW4gQm90dGxlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUtsZWluJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9qdWxpYScsIG5hbWU6ICdKdWxpYSBTZXQgRnJhY3RhbCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlKdWxpYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfdGVycmFpbl9sb2QnLCBuYW1lOiAnVGVycmFpbiBMT0QgQ2h1bmtzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVRlcnJhaW5MT0QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3Nub3dmbGFrZScsIG5hbWU6ICdLb2NoIFNub3dmbGFrZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTbm93Zmxha2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3JlYWN0aW9uX2RpZmZ1c2lvbicsIG5hbWU6ICdSZWFjdGlvbi1EaWZmdXNpb24gKEdyYXktU2NvdHQpJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVJlYWN0aW9uRGlmZnVzaW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9saXNzYWpvdXMnLCBuYW1lOiAnTGlzc2Fqb3VzIDNEIEN1cnZlcycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlMaXNzYWpvdXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3dvcm1ob2xlJywgbmFtZTogJ1dvcm1ob2xlIFR1bm5lbCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlXb3JtaG9sZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbWFuZGVsYnJvdCcsIG5hbWU6ICdNYW5kZWxicm90IFNldCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlNYW5kZWxicm90JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9zcGhlcmVfc2hhZGVyJywgbmFtZTogJ1NwaGVyZSBWZXJ0ZXggU2hhZGVyJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVNwaGVyZVNoYWRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbWluZWNyYWZ0X2FvJywgbmFtZTogJ01pbmVjcmFmdCBBTycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlNaW5lY3JhZnRBTycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcGxhbmV0JywgbmFtZTogJ1BsYW5ldCAoRWFydGggKyBBdG1vc3BoZXJlKScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlQbGFuZXQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2h5cGVyYm9sb2lkJywgbmFtZTogJ0h5cGVyYm9sb2lkIFN0cmluZyBBcnQnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5SHlwZXJib2xvaWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3NlYXNoZWxsJywgbmFtZTogJ1NlYXNoZWxsIChDb25jaG9zcGlyYWwpJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVNlYXNoZWxsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9sb3JlbnonLCBuYW1lOiAnTG9yZW56IEF0dHJhY3RvcicsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlMb3JlbnonKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2RuYScsIG5hbWU6ICdETkEgRG91YmxlIEhlbGl4JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUROQScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfdG9ydXNfbGluaycsIG5hbWU6ICdMaW5rZWQgVG9yaSAoQ2hhaW4pJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVRvcnVzTGluaycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfZnJhY3RhbF90cmVlJywgbmFtZTogJ0ZyYWN0YWwgVHJlZSAoM0QgQnJhbmNoaW5nKScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlGcmFjdGFsVHJlZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfaHlwZXJjdWJlJywgbmFtZTogJ1Rlc3NlcmFjdCAoNEQgSHlwZXJjdWJlKScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlIeXBlcmN1YmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2NlbHRpY19rbm90JywgbmFtZTogJ0NlbHRpYyBLbm90IChUb3J1cyknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q2VsdGljS25vdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3BoZXJlX2RlZm9ybScsIG5hbWU6ICdTcGhlcmUgRGVmb3JtYXRpb24nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3BoZXJlRGVmb3JtJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9nZW9kZXNpYycsIG5hbWU6ICdHZW9kZXNpYyBEb21lJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUdlb2Rlc2ljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jcnlzdGFsX2xhdHRpY2UnLCBuYW1lOiAnQ3J5c3RhbCBMYXR0aWNlIChGQ0MpJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUNyeXN0YWxMYXR0aWNlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV90b3J1c2tub3RfdW5yYXZlbCcsIG5hbWU6ICdUb3J1cyBLbm90IFVucmF2ZWwnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5VG9ydXNLbm90VW5yYXZlbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3VwZXJxdWFkcmljJywgbmFtZTogJ1N1cGVycXVhZHJpYyBTaGFwZXMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3VwZXJxdWFkcmljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9ib3lfc3VyZmFjZScsIG5hbWU6IFwiQm95J3MgU3VyZmFjZVwiLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Qm95U3VyZmFjZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfYmlzaG9wX2N1cnZlJywgbmFtZTogJ0Jpc2hvcCBDdXJ2ZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlCaXNob3BDdXJ2ZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcm9tYW5fc3VyZmFjZScsIG5hbWU6ICdSb21hbiBTdXJmYWNlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVJvbWFuU3VyZmFjZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfZW5uZXBlcicsIG5hbWU6ICdFbm5lcGVyIFN1cmZhY2UnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5RW5uZXBlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfZGluaScsIG5hbWU6IFwiRGluaSdzIFN1cmZhY2VcIiwgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeURpbmknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2Nyb3NzY2FwJywgbmFtZTogJ0Nyb3NzLUNhcCBTdXJmYWNlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUNyb3NzQ2FwJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9wc2V1ZG9zcGhlcmUnLCBuYW1lOiAnUHNldWRvc3BoZXJlIChUcmFjdHJpeCknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5UHNldWRvc3BoZXJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jYXRhbGFuJywgbmFtZTogJ0NhdGFsYW4gU3VyZmFjZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDYXRhbGFuJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9zYWRkbGUnLCBuYW1lOiAnU2FkZGxlIFN1cmZhY2UnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U2FkZGxlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jb3Jrc2NyZXcnLCBuYW1lOiAnQ29ya3NjcmV3IFN1cmZhY2UnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q29ya3NjcmV3JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9oZWxpY29pZCcsIG5hbWU6ICdIZWxpY29pZCAoTWluaW1hbCBTdXJmYWNlKScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlIZWxpY29pZCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfY2F0ZW5vaWQnLCBuYW1lOiAnQ2F0ZW5vaWQgKE1pbmltYWwgU3VyZmFjZSknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q2F0ZW5vaWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2hlbm5lYmVyZycsIG5hbWU6ICdIZW5uZWJlcmcgU3VyZmFjZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlIZW5uZWJlcmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3NjaGVyaycsIG5hbWU6ICdTY2hlcmsgU3VyZmFjZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTY2hlcmsnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21vZWJpdXNfc3RyaXAnLCBuYW1lOiAnTcO2Yml1cyBTdHJpcCAoUGFyYW1ldHJpYyknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5TW9lYml1c1N0cmlwJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jeWxpbmRlcicsIG5hbWU6ICdHZW5lcmFsaXplZCBDeWxpbmRlcicsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDeWxpbmRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfa3VlbicsIG5hbWU6IFwiS3VlbidzIFN1cmZhY2VcIiwgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUt1ZW4nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2tsZWluX2JvdHRsZScsIG5hbWU6ICdLbGVpbiBCb3R0bGUgKEZpZ3VyZS04KScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlLbGVpbkJvdHRsZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfd2hpdG5leV91bWJyZWxsYScsIG5hbWU6ICdXaGl0bmV5IFVtYnJlbGxhJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVdoaXRuZXlVbWJyZWxsYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3VyZmFjZV9vZl9yZXZvbHV0aW9uJywgbmFtZTogJ1N1cmZhY2Ugb2YgUmV2b2x1dGlvbicsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTdXJmYWNlT2ZSZXZvbHV0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jb25lJywgbmFtZTogJ0dlbmVyYWxpemVkIENvbmUnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5Q29uZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3RlaW5lcicsIG5hbWU6ICdTdGVpbmVyIFN1cmZhY2UnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3RlaW5lcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcnVsZWRfc3VyZmFjZScsIG5hbWU6ICdSdWxlZCBTdXJmYWNlJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVJ1bGVkU3VyZmFjZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfb2Zmc2V0X3N1cmZhY2UnLCBuYW1lOiAnT2Zmc2V0IFN1cmZhY2UnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5T2Zmc2V0U3VyZmFjZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfdHdpc3RlZF9ib3gnLCBuYW1lOiAnVHdpc3RlZCBCb3gnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5VHdpc3RlZEJveCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfcHJpc20nLCBuYW1lOiAnR2VuZXJhbGl6ZWQgUHJpc20nLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5UHJpc20nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2JsZW5kX3N1cmZhY2UnLCBuYW1lOiAnQmxlbmQgU3VyZmFjZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlCbGVuZFN1cmZhY2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2RldmVsb3BhYmxlX3N1cmZhY2UnLCBuYW1lOiAnRGV2ZWxvcGFibGUgU3VyZmFjZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlEZXZlbG9wYWJsZVN1cmZhY2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21hcmNoaW5nX2N1YmVzJywgbmFtZTogJ01hcmNoaW5nIEN1YmVzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeU1hcmNoaW5nQ3ViZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3ZveGVsJywgbmFtZTogJ1ZveGVsIEdlb21ldHJ5JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVZveGVsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9sc3lzdGVtJywgbmFtZTogJ0wtU3lzdGVtIEdlb21ldHJ5JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeUxTeXN0ZW0nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X21lbmdlcl9zcG9uZ2UnLCBuYW1lOiAnTWVuZ2VyIFNwb25nZScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlNZW5nZXJTcG9uZ2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2tub3RzJywgbmFtZTogJ01hdGhlbWF0aWNhbCBLbm90cycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlLbm90cycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc2llcnBpbnNraScsIG5hbWU6ICdTaWVycGluc2tpIEZyYWN0YWxzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVNpZXJwaW5za2knKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3Rlc3NlbGxhdGlvbicsIG5hbWU6ICdUZXNzZWxsYXRpb24gUGF0dGVybnMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5VGVzc2VsbGF0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9nZWFycycsIG5hbWU6ICdHZWFyIE1lY2hhbmlzbScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlHZWFycycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfanVsaWFfc2V0JywgbmFtZTogJ0p1bGlhIFNldCAzRCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlKdWxpYVNldCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3ByaW5nJywgbmFtZTogJ1NwcmluZy9IZWxpeCBHZW9tZXRyeScsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlTcHJpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3NwYWNlX2ZpbGxpbmcnLCBuYW1lOiAnU3BhY2UtRmlsbGluZyBDdXJ2ZXMnLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3BhY2VGaWxsaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9hcGVyaW9kaWMnLCBuYW1lOiAnQXBlcmlvZGljIFRpbGluZyAoUGVucm9zZSknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5QXBlcmlvZGljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9tYW5kZWxidWxiJywgbmFtZTogJ01hbmRlbGJ1bGIgRnJhY3RhbCcsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlNYW5kZWxidWxiJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9wb2ludHMnLCBuYW1lOiAnUG9pbnQgQ2xvdWQgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5UG9pbnRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9jaGFpbicsIG5hbWU6ICdDaGFpbiBMaW5rcycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlDaGFpbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfd2lyZWZyYW1lJywgbmFtZTogJ1dpcmVmcmFtZSBFZmZlY3RzJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVdpcmVmcmFtZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfbW9kaWZpZXJzJywgbmFtZTogJ0dlb21ldHJ5IE1vZGlmaWVycycsIGNhdGVnb3J5OiAnZ2VvbWV0cmllcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMR2VvbWV0cnlNb2RpZmllcnMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X2RlY2FsJywgbmFtZTogJ0RlY2FsIEdlb21ldHJ5JywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeURlY2FsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9nZW9tZXRyeV9sb2Z0JywgbmFtZTogJ0xvZnQgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5TG9mdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZ2VvbWV0cnlfc3dlZXAnLCBuYW1lOiAnU3dlZXAgR2VvbWV0cnknLCBjYXRlZ29yeTogJ2dlb21ldHJpZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEdlb21ldHJ5U3dlZXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2dlb21ldHJ5X3NraW5uaW5nJywgbmFtZTogJ0dlb21ldHJ5IFNraW5uaW5nJywgY2F0ZWdvcnk6ICdnZW9tZXRyaWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xHZW9tZXRyeVNraW5uaW5nJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ21hdGVyaWFscycsXG4gICAgICAgIG5hbWU6ICdNYXRlcmlhbHMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFscycsIG5hbWU6ICdQaHlzaWNhbCBNYXRlcmlhbHMnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL01hdGVyaWFscycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2FsbCcsIG5hbWU6ICdBbGwgTWF0ZXJpYWxzJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFscycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3BoeXNpY2FsJywgbmFtZTogJ1BoeXNpY2FsIE1hdGVyaWFsJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1BoeXNpY2FsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfbm9ybWFsJywgbmFtZTogJ05vcm1hbCBNYXRlcmlhbHMnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzTm9ybWFsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfY29sb3JzJywgbmFtZTogJ01hdGVyaWFsIENvbG9ycycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNDb2xvcnMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc190cmFuc3BhcmVuY3knLCBuYW1lOiAnVHJhbnNwYXJlbmN5ICYgQWxwaGEnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzVHJhbnNwYXJlbmN5JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9ub3JtYWxfbWFwJywgbmFtZTogJ05vcm1hbCBNYXAnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTm9ybWFsTWFwJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfYmxlbmRpbmcnLCBuYW1lOiAnQmxlbmRpbmcnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzQmxlbmRpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19tYXRjYXAnLCBuYW1lOiAnTWF0Y2FwIE1hdGVyaWFsJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc01hdGNhcCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2N1YmVtYXAnLCBuYW1lOiAnQ3ViZW1hcCBSZWZsZWN0aW9uJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc0N1YmVtYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19jYXInLCBuYW1lOiAnQ2FyIE1hdGVyaWFscycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNDYXInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19ub3JtYWxtYXAnLCBuYW1lOiAnTm9ybWFsIE1hcCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNOb3JtYWxtYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19waHlzaWNhbF9jbGVhcmNvYXQnLCBuYW1lOiAnQ2xlYXJjb2F0JywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1BoeXNpY2FsQ2xlYXJjb2F0JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfcGh5c2ljYWxfdHJhbnNtaXNzaW9uJywgbmFtZTogJ1RyYW5zbWlzc2lvbicsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNQaHlzaWNhbFRyYW5zbWlzc2lvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2NoYW5uZWxzJywgbmFtZTogJ0NoYW5uZWxzJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc0NoYW5uZWxzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfY3ViZW1hcF9keW5hbWljJywgbmFtZTogJ0R5bmFtaWMgQ3ViZW1hcCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNDdWJlbWFwRHluYW1pYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3Rvb24nLCBuYW1lOiAnVG9vbiBNYXRlcmlhbCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNUb29uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfYnVtcG1hcCcsIG5hbWU6ICdCdW1wIE1hcCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNCdW1wTWFwJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfYWxwaGFoYXNoJywgbmFtZTogJ0FscGhhIEhhc2gnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzQWxwaGFoYXNoJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfYmxlbmRpbmdfY3VzdG9tJywgbmFtZTogJ0N1c3RvbSBCbGVuZGluZycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNCbGVuZGluZ0N1c3RvbScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2N1YmVtYXBfcmVmcmFjdGlvbicsIG5hbWU6ICdDdWJlbWFwIFJlZnJhY3Rpb24nLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzQ3ViZW1hcFJlZnJhY3Rpb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19kaXNwbGFjZW1lbnRtYXAnLCBuYW1lOiAnRGlzcGxhY2VtZW50IE1hcCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNEaXNwbGFjZW1lbnRNYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19lbnZtYXBzJywgbmFtZTogJ0Vudmlyb25tZW50IE1hcHMnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzRW52bWFwcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3N1YnN1cmZhY2Vfc2NhdHRlcmluZycsIG5hbWU6ICdTdWJzdXJmYWNlIFNjYXR0ZXJpbmcnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzU3Vic3VyZmFjZVNjYXR0ZXJpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc190ZXh0dXJlX2dyaWQnLCBuYW1lOiAnVGV4dHVyZSBHcmlkJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1RleHR1cmVHdWlkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfdmlkZW8nLCBuYW1lOiAnVmlkZW8gTWF0ZXJpYWwnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzVmlkZW8nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19saWdodG1hcCcsIG5hbWU6ICdMaWdodCBNYXAnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzTGlnaHRNYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc193aXJlZnJhbWUnLCBuYW1lOiAnV2lyZWZyYW1lIE1hdGVyaWFscycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNXaXJlZnJhbWUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19ncmlkJywgbmFtZTogJ01hdGVyaWFscyBHcmlkIChtZXRhbG5lc3Mvcm91Z2huZXNzKScsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNHcmlkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfdmFyaWFudHMnLCBuYW1lOiAnTWF0ZXJpYWwgVmFyaWFudHMnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzVmFyaWFudHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19yZWZsZWN0aW9uJywgbmFtZTogJ1JlYWwtdGltZSBSZWZsZWN0aW9uJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1JlZmxlY3Rpb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19yZWZyYWN0aW9uJywgbmFtZTogJ1JlZnJhY3Rpb24nLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzUmVmcmFjdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2VtaXNzaXZlJywgbmFtZTogJ0VtaXNzaXZlIE1hdGVyaWFscycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNFbWlzc2l2ZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3N1YnN1cmZhY2UnLCBuYW1lOiAnU3Vic3VyZmFjZSBTY2F0dGVyaW5nJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1N1YnN1cmZhY2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19kZXB0aCcsIG5hbWU6ICdEZXB0aCBNYXRlcmlhbCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNEZXB0aCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2Vudm1hcHNfZ3JvdW5kcHJvamVjdGlvbicsIG5hbWU6ICdFbnYgTWFwIEdyb3VuZCBQcm9qZWN0aW9uJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc0Vudm1hcHNHcm91bmRQcm9qZWN0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfaXJpZGVzY2VuY2UnLCBuYW1lOiAnSXJpZGVzY2VuY2UgKFRoaW4gRmlsbSknLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzSXJpZGVzY2VuY2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19nbGFzcycsIG5hbWU6ICdHbGFzcyBNYXRlcmlhbCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNHbGFzcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2Z1cicsIG5hbWU6ICdGdXIgKFNoZWxsIFRlY2huaXF1ZSknLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzRnVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfc2hlZW4nLCBuYW1lOiAnU2hlZW4gKENsb3RoKScsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNTaGVlbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2FuaXNvdHJvcHknLCBuYW1lOiAnQW5pc290cm9weSAoQnJ1c2hlZCBNZXRhbCknLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzQW5pc290cm9weScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2Rpc3BlcnNpb24nLCBuYW1lOiAnRGlzcGVyc2lvbiAoQ2hyb21hdGljKScsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNEaXNwZXJzaW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfdmVsdmV0JywgbmFtZTogJ1ZlbHZldCAoU2hlZW4gTWF0ZXJpYWwpJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1ZlbHZldCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX2hvbG9ncmFtJywgbmFtZTogJ0hvbG9ncmFtIEVmZmVjdCcsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNIb2xvZ3JhbScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3hyYXknLCBuYW1lOiAnWC1SYXkgTWF0ZXJpYWwnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzWFJheScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWF0ZXJpYWxzX3dheCcsIG5hbWU6ICdXYXggQ2FuZGxlcyAoVHJhbnNtaXNzaW9uKScsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNXYXgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19vaWxfc2xpY2snLCBuYW1lOiAnT2lsIFNsaWNrIChUaGluIEZpbG0pJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc09pbFNsaWNrJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfcHJvY2VkdXJhbCcsIG5hbWU6ICdQcm9jZWR1cmFsIE1hdGVyaWFscycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNQcm9jZWR1cmFsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfc2tpbicsIG5hbWU6ICdTa2luIFNTUyBBcHByb3hpbWF0aW9uJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1NraW4nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc190ZXh0dXJlJywgbmFtZTogJ1RleHR1cmUgTWFwcGluZycsIGNhdGVnb3J5OiAnbWF0ZXJpYWxzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNYXRlcmlhbHNUZXh0dXJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXRlcmlhbHNfYmxlbmQnLCBuYW1lOiAnTWF0ZXJpYWwgQmxlbmRpbmcnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzQmxlbmQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19kaXNzb2x2ZScsIG5hbWU6ICdEaXNzb2x2ZSBFZmZlY3QnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzRGlzc29sdmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19ncmFkaWVudCcsIG5hbWU6ICdHcmFkaWVudCBNYXRlcmlhbHMnLCBjYXRlZ29yeTogJ21hdGVyaWFscycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTWF0ZXJpYWxzR3JhZGllbnQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21hdGVyaWFsc19wYXJhbGxheCcsIG5hbWU6ICdQYXJhbGxheCBNYXBwaW5nJywgY2F0ZWdvcnk6ICdtYXRlcmlhbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1hdGVyaWFsc1BhcmFsbGF4JykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3RleHR1cmVzJyxcbiAgICAgICAgbmFtZTogJ1RleHR1cmVzJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlc19jdWJlJywgbmFtZTogJ1RleHR1cmVzIEN1YmUnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlc0N1YmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3V2cycsIG5hbWU6ICdVVnMnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xVVnMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ZyYW1lYnVmZmVyX3RleHR1cmUnLCBuYW1lOiAnRnJhbWVidWZmZXIgVGV4dHVyZScsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEZyYW1lYnVmZmVyVGV4dHVyZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfZGVwdGhfdGV4dHVyZScsIG5hbWU6ICdEZXB0aCBUZXh0dXJlJywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRGVwdGhUZXh0dXJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlc19jb2xvcmJhcicsIG5hbWU6ICdDb2xvciBCYXInLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlc0NvbG9yYmFyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlc19jb21wcmVzc2lvbicsIG5hbWU6ICdDb21wcmVzc2lvbicsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVzQ29tcHJlc3Npb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVzX2tpbmV0aWMnLCBuYW1lOiAnS2luZXRpYycsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVzS2luZXRpYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdGV4dHVyZXNfcG1yZW1fYnJhbmR0JywgbmFtZTogJ1BNUkVNIEJyYW5kdCcsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVzUE1SRU1icmFuZHQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVzX3NlcXVlbmNlJywgbmFtZTogJ1NlcXVlbmNlJywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVGV4dHVyZXNTZXF1ZW5jZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcnR0JywgbmFtZTogJ1JlbmRlciB0byBUZXh0dXJlJywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUlRUJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9yZW5kZXJfdGFyZ2V0X2N1YmUnLCBuYW1lOiAnQ3ViZSBSZW5kZXIgVGFyZ2V0JywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUmVuZGVyVGFyZ2V0Q3ViZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdGV4dHVyZXNfYW5pc290cm9weScsIG5hbWU6ICdBbmlzb3Ryb3BpYyBGaWx0ZXJpbmcnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlc0FuaXNvdHJvcHknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVzX2R5bmFtaWMnLCBuYW1lOiAnRHluYW1pYyBDYW52YXMgVGV4dHVyZScsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVzRHluYW1pYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdGV4dHVyZXNfM2QnLCBuYW1lOiAnM0QgVm9sdW1lIFRleHR1cmUnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlczNEJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlc19wbXJlbScsIG5hbWU6ICdQTVJFTSBFbnZpcm9ubWVudCcsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVzUE1SRU0nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVzX3ZpZGVvJywgbmFtZTogJ1ZpZGVvIFRleHR1cmUgKENhbnZhcyknLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlc1ZpZGVvJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfdGV4dHVyZV9leHInLCBuYW1lOiAnRVhSIFRleHR1cmUnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJUZXh0dXJlRVhSJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfdGV4dHVyZV9oZHInLCBuYW1lOiAnSERSIFRleHR1cmUnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJUZXh0dXJlSERSJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfdGV4dHVyZV9kZHMnLCBuYW1lOiAnRERTIFRleHR1cmUnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJUZXh0dXJlRERTJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlX3V2JywgbmFtZTogJ1VWIE1hcHBpbmcnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlVVYnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVfb2Zmc2V0JywgbmFtZTogJ1RleHR1cmUgT2Zmc2V0JywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVGV4dHVyZU9mZnNldCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdGV4dHVyZV9wcm9qZWN0aW9uJywgbmFtZTogJ1RleHR1cmUgUHJvamVjdGlvbicsIGNhdGVnb3J5OiAndGV4dHVyZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRleHR1cmVQcm9qZWN0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90ZXh0dXJlX3BhY2tpbmcnLCBuYW1lOiAnVGV4dHVyZSBQYWNraW5nJywgY2F0ZWdvcnk6ICd0ZXh0dXJlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVGV4dHVyZVBhY2tpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RleHR1cmVfbWlwbWFwcycsIG5hbWU6ICdUZXh0dXJlIE1pcG1hcHMnLCBjYXRlZ29yeTogJ3RleHR1cmVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xUZXh0dXJlTWlwbWFwcycpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdhbHBoYScsXG4gICAgICAgIG5hbWU6ICdBbHBoYScsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYWxwaGEnLCBuYW1lOiAnQWxwaGEnLCBjYXRlZ29yeTogJ2FscGhhJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbHBoYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYWxwaGFfYmxlbmRfbW9kZXMnLCBuYW1lOiAnQWxwaGEgQmxlbmQgTW9kZXMnLCBjYXRlZ29yeTogJ2FscGhhJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBbHBoYUJsZW5kTW9kZXMnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnY2xpcHBpbmcnLFxuICAgICAgICBuYW1lOiAnQ2xpcHBpbmcnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NsaXBwaW5nJywgbmFtZTogJ0NsaXBwaW5nJywgY2F0ZWdvcnk6ICdjbGlwcGluZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ2xpcHBpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NsaXBwaW5nX2FkdmFuY2VkJywgbmFtZTogJ0NsaXBwaW5nIEFkdmFuY2VkJywgY2F0ZWdvcnk6ICdjbGlwcGluZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ2xpcHBpbmdBZHZhbmNlZCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY2xpcHBpbmdfaW50ZXJzZWN0aW9uJywgbmFtZTogJ0NsaXBwaW5nIEludGVyc2VjdGlvbicsIGNhdGVnb3J5OiAnY2xpcHBpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENsaXBwaW5nSW50ZXJzZWN0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jbGlwcGluZ19pbnRlcnNlY3QnLCBuYW1lOiAnQ2xpcHBpbmcgUGxhbmUgSW50ZXJzZWN0JywgY2F0ZWdvcnk6ICdjbGlwcGluZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ2xpcHBpbmdJbnRlcnNlY3QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NsaXBwaW5nX3N0ZW5jaWwnLCBuYW1lOiAnQ2xpcHBpbmcgU3RlbmNpbCcsIGNhdGVnb3J5OiAnY2xpcHBpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENsaXBwaW5nU3RlbmNpbCcpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICd3aXJlZnJhbWVzJyxcbiAgICAgICAgbmFtZTogJ1dpcmVmcmFtZXMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3dpcmVmcmFtZXMnLCBuYW1lOiAnV2lyZWZyYW1lcycsIGNhdGVnb3J5OiAnd2lyZWZyYW1lcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMV2lyZWZyYW1lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfd2lyZWZyYW1lc19zb2xpZCcsIG5hbWU6ICdXaXJlZnJhbWVzIFNvbGlkJywgY2F0ZWdvcnk6ICd3aXJlZnJhbWVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xXaXJlZnJhbWVzU29saWQnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAncGFydGljbGVzJyxcbiAgICAgICAgbmFtZTogJ1BhcnRpY2xlcycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFydGljbGVzJywgbmFtZTogJ1BhcnRpY2xlcycsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19idWZmZXInLCBuYW1lOiAnUGFydGljbGVzIEJ1ZmZlcicsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vUGFydGljbGVzQnVmZmVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfYmFzaWMnLCBuYW1lOiAnUGFydGljbGVzIEJhc2ljJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9QYXJ0aWNsZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BvaW50c19zcHJpdGVzJywgbmFtZTogJ1BvaW50cyBTcHJpdGVzJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvaW50c1Nwcml0ZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BvaW50c19keW5hbWljJywgbmFtZTogJ1BvaW50cyBEeW5hbWljJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvaW50c0R5bmFtaWMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BvaW50c193YXZlcycsIG5hbWU6ICdQb2ludHMgV2F2ZXMnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9pbnRzV2F2ZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BvaW50c19iaWxsYm9hcmRzJywgbmFtZTogJ1BvaW50cyBCaWxsYm9hcmRzJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvaW50c0JpbGxib2FyZHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19zbm93JywgbmFtZTogJ1Nub3cgUGFydGljbGVzJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhcnRpY2xlc1Nub3cnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19nYWxheHknLCBuYW1lOiAnR2FsYXh5JywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhcnRpY2xlc0dhbGF4eScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFydGljbGVzX3dhdmUnLCBuYW1lOiAnUGFydGljbGUgV2F2ZScsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNXYXZlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfZmlyZXdvcmsnLCBuYW1lOiAnRmlyZXdvcmsnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzRmlyZXdvcmsnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3ZvbHVtZV9jbG91ZCcsIG5hbWU6ICdWb2x1bWUgQ2xvdWQnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVm9sdW1lQ2xvdWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2N1c3RvbV9hdHRyaWJ1dGVzX3BvaW50cycsIG5hbWU6ICdDdXN0b20gQXR0cmlidXRlcyBQb2ludHMnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ3VzdG9tQXR0cmlidXRlc1BvaW50cycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFydGljbGVzX3JhaW4nLCBuYW1lOiAnUmFpbiBQYXJ0aWNsZXMnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzUmFpbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFydGljbGVzX21hZ25ldCcsIG5hbWU6ICdNYWduZXRpYyBGaWVsZCBMaW5lcycsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNNYWduZXQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19zbW9rZScsIG5hbWU6ICdTbW9rZSBQYXJ0aWNsZXMnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzU21va2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19jb25zdGVsbGF0aW9uJywgbmFtZTogJ1N0YXIgQ29uc3RlbGxhdGlvbicsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNDb25zdGVsbGF0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfZmlyZScsIG5hbWU6ICdGaXJlIFBhcnRpY2xlcycsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNGaXJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfZmlyZWZsaWVzJywgbmFtZTogJ0ZpcmVmbGllcycsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNGaXJlZmxpZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19zcGFya3MnLCBuYW1lOiAnV2VsZGluZyBTcGFya3MnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzU3BhcmtzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfYXVyb3JhJywgbmFtZTogJ0F1cm9yYSBCb3JlYWxpcycsIGNhdGVnb3J5OiAncGFydGljbGVzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQYXJ0aWNsZXNBdXJvcmEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19uZWJ1bGEnLCBuYW1lOiAnU3BhY2UgTmVidWxhJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhcnRpY2xlc05lYnVsYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFydGljbGVzX2NvbmZldHRpJywgbmFtZTogJ0NvbmZldHRpIFBoeXNpY3MnLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzQ29uZmV0dGknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BhcnRpY2xlc19saXF1aWQnLCBuYW1lOiAnTGlxdWlkIFNpbXVsYXRpb24gKFNQSCknLCBjYXRlZ29yeTogJ3BhcnRpY2xlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGFydGljbGVzTGlxdWlkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYXJ0aWNsZXNfZ3Jhdml0eV93ZWxsJywgbmFtZTogJ0dyYXZpdHkgV2VsbCBBdHRyYWN0b3JzJywgY2F0ZWdvcnk6ICdwYXJ0aWNsZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhcnRpY2xlc0dyYXZpdHlXZWxsJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2ZvZycsXG4gICAgICAgIG5hbWU6ICdGb2cnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ZvZycsIG5hbWU6ICdGb2cnLCBjYXRlZ29yeTogJ2ZvZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRm9nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9mb2dfZXhwMicsIG5hbWU6ICdGb2cgRXhwMicsIGNhdGVnb3J5OiAnZm9nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xGb2dFeHAyJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3NoYWRvd3MnLFxuICAgICAgICBuYW1lOiAnU2hhZG93cycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZG93bWFwJywgbmFtZTogJ1NoYWRvdyBNYXAnLCBjYXRlZ29yeTogJ3NoYWRvd3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9TaGFkb3dNYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd21hcF9hZHZhbmNlZCcsIG5hbWU6ICdTaGFkb3cgTWFwIEFkdmFuY2VkJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dNYXAnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd19jb250YWN0JywgbmFtZTogJ1NoYWRvdyBDb250YWN0JywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dDb250YWN0JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkb3dzJywgbmFtZTogJ1NoYWRvd3MnLCBjYXRlZ29yeTogJ3NoYWRvd3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRvd3MnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd21hcF9wb2ludGxpZ2h0JywgbmFtZTogJ1BvaW50TGlnaHQgU2hhZG93cycsIGNhdGVnb3J5OiAnc2hhZG93cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZG93bWFwUG9pbnRsaWdodCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZG93bWFwX3ZzbScsIG5hbWU6ICdWU00gU2hhZG93cycsIGNhdGVnb3J5OiAnc2hhZG93cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZG93bWFwVlNNJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkb3dtYXBfY3NtJywgbmFtZTogJ0Nhc2NhZGVkIFNoYWRvdyBNYXBzJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dtYXBDU00nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd19jc20nLCBuYW1lOiAnQ2FzY2FkZWQgU2hhZG93IE1hcHMnLCBjYXRlZ29yeTogJ3NoYWRvd3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRvd0NTTScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZG93bWFwX3ZpZXdlcicsIG5hbWU6ICdTaGFkb3cgTWFwIFZpZXdlcicsIGNhdGVnb3J5OiAnc2hhZG93cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZG93bWFwVmlld2VyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkb3dtYXBfcGVyZm9ybWFuY2UnLCBuYW1lOiAnU2hhZG93bWFwIFBlcmZvcm1hbmNlJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dtYXBQZXJmb3JtYW5jZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZG93bWVzaCcsIG5hbWU6ICdTaGFkb3cgTWVzaCcsIGNhdGVnb3J5OiAnc2hhZG93cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMT2JqZWN0c1NoYWRvd01lc2gnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd3NfYmlhcycsIG5hbWU6ICdTaGFkb3cgQmlhcycsIGNhdGVnb3J5OiAnc2hhZG93cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZG93c0JpYXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd3NfY29udGFjdF9zb2Z0JywgbmFtZTogJ1NvZnQgQ29udGFjdCBTaGFkb3dzJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dzQ29udGFjdFNvZnQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRvd19wY3NzJywgbmFtZTogJ1BDU1MgU29mdCBTaGFkb3dzJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dQQ1NTJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkb3dfdnNtJywgbmFtZTogJ1ZTTSBTaGFkb3dzJywgY2F0ZWdvcnk6ICdzaGFkb3dzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkb3dWU00nKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbGlnaHRzJyxcbiAgICAgICAgbmFtZTogJ0xpZ2h0cycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGlnaHRzJywgbmFtZTogJ1BoeXNpY2FsIExpZ2h0cycsIGNhdGVnb3J5OiAnbGlnaHRzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaWdodHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xpZ2h0c19yZWN0YXJlYScsIG5hbWU6ICdSZWN0QXJlYSBMaWdodHMnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRzUmVjdEFyZWEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xpZ2h0c19zcG90bGlnaHQnLCBuYW1lOiAnU3BvdGxpZ2h0JywgY2F0ZWdvcnk6ICdsaWdodHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpZ2h0c1Nwb3RsaWdodCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGlnaHRwcm9iZScsIG5hbWU6ICdMaWdodCBQcm9iZScsIGNhdGVnb3J5OiAnbGlnaHRzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaWdodHByb2JlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodHNfaGVtaXNwaGVyZScsIG5hbWU6ICdIZW1pc3BoZXJlIExpZ2h0JywgY2F0ZWdvcnk6ICdsaWdodHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpZ2h0c0hlbWlzcGhlcmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xpZ2h0c19oZW1pc3BoZXJlMicsIG5hbWU6ICdIZW1pc3BoZXJlIExpZ2h0IChGdWxsKScsIGNhdGVnb3J5OiAnbGlnaHRzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaWdodHNIZW1pc3BoZXJlMicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGlnaHRzX2hlbWlzcGhlcmljJywgbmFtZTogJ0hlbWlzcGhlcmljIExpZ2h0aW5nJywgY2F0ZWdvcnk6ICdsaWdodHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpZ2h0c0hlbWlzcGhlcmljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodHNfcGh5c2ljYWwnLCBuYW1lOiAnUGh5c2ljYWwgTGlnaHRzJywgY2F0ZWdvcnk6ICdsaWdodHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpZ2h0c1BoeXNpY2FsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodHNfcG9pbnRsaWdodHMnLCBuYW1lOiAnUG9pbnQgTGlnaHRzJywgY2F0ZWdvcnk6ICdsaWdodHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExpZ2h0c1BvaW50TGlnaHRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodHNfcmVjdGFyZWFsaWdodCcsIG5hbWU6ICdSZWN0IEFyZWEgTGlnaHQnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRzUmVjdEFyZWFMaWdodCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGlnaHRzX3Nwb3RsaWdodF9zaGFkb3cnLCBuYW1lOiAnU3BvdCBMaWdodCBTaGFkb3cnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRTcG90U2hhZG93JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodHNfcHJvYmUnLCBuYW1lOiAnTGlnaHQgUHJvYmUnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRzUHJvYmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xpZ2h0c19hcmVhJywgbmFtZTogJ0FyZWEgTGlnaHRzIChSZWN0QXJlYSknLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRzQXJlYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbGlnaHRzX3NvZnRfc2hhZG93JywgbmFtZTogJ1NvZnQgU2hhZG93cycsIGNhdGVnb3J5OiAnbGlnaHRzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMaWdodHNTb2Z0U2hhZG93JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodF9hcmVhJywgbmFtZTogJ0FyZWEgTGlnaHQnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRBcmVhJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodF92b2x1bWV0cmljJywgbmFtZTogJ1ZvbHVtZXRyaWMgTGlnaHQnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRWb2x1bWV0cmljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9saWdodF9pZXMnLCBuYW1lOiAnSUVTIExpZ2h0IFByb2ZpbGUnLCBjYXRlZ29yeTogJ2xpZ2h0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTGlnaHRJRVMnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnY2FtZXJhcycsXG4gICAgICAgIG5hbWU6ICdDYW1lcmFzJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jYW1lcmEnLCBuYW1lOiAnQ2FtZXJhJywgY2F0ZWdvcnk6ICdjYW1lcmFzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDYW1lcmEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NhbWVyYV9hcnJheScsIG5hbWU6ICdDYW1lcmEgQXJyYXknLCBjYXRlZ29yeTogJ2NhbWVyYXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENhbWVyYUFycmF5JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jYW1lcmFfc3RlcmVvJywgbmFtZTogJ1N0ZXJlbyBDYW1lcmEnLCBjYXRlZ29yeTogJ2NhbWVyYXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENhbWVyYVN0ZXJlbycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbXVsdGlwbGVfZWxlbWVudHMnLCBuYW1lOiAnTXVsdGlwbGUgRWxlbWVudHMnLCBjYXRlZ29yeTogJ2NhbWVyYXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE11bHRpcGxlRWxlbWVudHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NhbWVyYV9sb2dhcml0aG1pY19kZXB0aF9idWZmZXInLCBuYW1lOiAnTG9nYXJpdGhtaWMgRGVwdGggQnVmZmVyJywgY2F0ZWdvcnk6ICdjYW1lcmFzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDYW1lcmFMb2dhcml0aG1pY0RlcHRoQnVmZmVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wYW5vcmFtYV9jdWJlJywgbmFtZTogJ1Bhbm9yYW1hIEN1YmUnLCBjYXRlZ29yeTogJ2NhbWVyYXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhbm9yYW1hQ3ViZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY2FtZXJhX2NpbmVtYXRpYycsIG5hbWU6ICdDaW5lbWF0aWMgQ2FtZXJhIFBhdGgnLCBjYXRlZ29yeTogJ2NhbWVyYXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENhbWVyYUNpbmVtYXRpYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbXVsdGlwbGVfY2FtZXJhcycsIG5hbWU6ICdNdWx0aXBsZSBDYW1lcmFzIChTcGxpdCBTY3JlZW4pJywgY2F0ZWdvcnk6ICdjYW1lcmFzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNdWx0aXBsZUNhbWVyYXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NhbWVyYV9wYXRoJywgbmFtZTogJ0NhbWVyYSBQYXRoJywgY2F0ZWdvcnk6ICdjYW1lcmFzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDYW1lcmFQYXRoJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jYW1lcmFfem9vbScsIG5hbWU6ICdDYW1lcmEgWm9vbSB2cyBEb2xseScsIGNhdGVnb3J5OiAnY2FtZXJhcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ2FtZXJhWm9vbScpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdsb2FkZXJzJyxcbiAgICAgICAgbmFtZTogJ0xvYWRlcnMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9nbHRmJywgbmFtZTogJ0dMVEYgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJHTFRGJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfZ2x0Zl9hbmlzb3Ryb3B5JywgbmFtZTogJ0dMVEYgQW5pc290cm9weScsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL0dsdGZBbmlzb3Ryb3B5JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfZ2x0Zl9kZW1vJywgbmFtZTogJ0dMVEYgRGVtbycsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyR0xURicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX2dsdGZfMicsIG5hbWU6ICdHTFRGIDInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlckdMVEYyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJzX2dsdGZfYW5pbWF0ZWQnLCBuYW1lOiAnZ2xURiBBbmltYXRlZCBDaGFyYWN0ZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlcnNHbHRmQW5pbWF0ZWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9vYmonLCBuYW1lOiAnT0JKIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyT0JKJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfZHJhY28nLCBuYW1lOiAnRHJhY28gTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJEcmFjbycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX2ZieCcsIG5hbWU6ICdGQlggTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJGQlgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9wbHknLCBuYW1lOiAnUExZIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyUExZJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfY29sbGFkYScsIG5hbWU6ICdDb2xsYWRhIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyQ29sbGFkYScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX3BjZCcsIG5hbWU6ICdQQ0QgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJQQ0QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl92cm1sJywgbmFtZTogJ1ZSTUwgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJWUk1MJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfc3RsJywgbmFtZTogJ1NUTCBMb2FkZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlclNUTCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyXzNtZicsIG5hbWU6ICczTUYgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXIzTUYnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9idmgnLCBuYW1lOiAnQlZIIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyQlZIJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfZ2NvZGUnLCBuYW1lOiAnR0NvZGUgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJHQ29kZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX3N2ZycsIG5hbWU6ICdTVkcgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJTVkcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl90dGYnLCBuYW1lOiAnVFRGIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyVFRGJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfcGRiJywgbmFtZTogJ1BEQiBMb2FkZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlclBEQicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX3h5eicsIG5hbWU6ICdYWVogTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJYWVonKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl8zZHMnLCBuYW1lOiAnM0RTIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyM0RTJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfM2RtJywgbmFtZTogJzNETSBMb2FkZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlcjNETScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX2FtZicsIG5hbWU6ICdBTUYgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJBTUYnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9rbXonLCBuYW1lOiAnS01aIExvYWRlcicsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyS01aJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfbHdvJywgbmFtZTogJ0xXTyBMb2FkZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlckxXTycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX21kMicsIG5hbWU6ICdNRDIgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJNRDInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9ucnJkJywgbmFtZTogJ05SUkQgTG9hZGVyJywgY2F0ZWdvcnk6ICdsb2FkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMb2FkZXJOUlJEJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfdm94JywgbmFtZTogJ1ZPWCBMb2FkZXInLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlclZPWCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbG9hZGVyX2dsdGZfdmFyaWFudHMnLCBuYW1lOiAnR0xURiBWYXJpYW50cycsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyR0xURlZhcmlhbnRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sb2FkZXJfZ2x0Zl9jb21wcmVzc2VkJywgbmFtZTogJ0dMVEYgQ29tcHJlc3NlZCcsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyR0xURkNvbXByZXNzZWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl9nbHRmX2xpZ2h0cycsIG5hbWU6ICdHTFRGIExpZ2h0cyAoS0hSX2xpZ2h0c19wdW5jdHVhbCknLCBjYXRlZ29yeTogJ2xvYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTExvYWRlckdMVEZMaWdodHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvYWRlcl90ZXh0dXJlX2Jhc2lzJywgbmFtZTogJ1RleHR1cmUgQmFzaXMgKENvbXByZXNzaW9uKScsIGNhdGVnb3J5OiAnbG9hZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTG9hZGVyVGV4dHVyZUJhc2lzJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3Bvc3Rwcm9jZXNzaW5nJyxcbiAgICAgICAgbmFtZTogJ1Bvc3Rwcm9jZXNzaW5nJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZycsIG5hbWU6ICdVbnJlYWwgQmxvb20nLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vUG9zdHByb2Nlc3NpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2RlbW8nLCBuYW1lOiAnUG9zdHByb2Nlc3NpbmcgRGVtbycsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19maWxtJywgbmFtZTogJ0ZpbG0gRWZmZWN0JywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1Bvc3Rwcm9jZXNzaW5nRmlsbScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3Npbmdfc3NhbycsIG5hbWU6ICdTU0FPJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdTU0FPJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19meGFhJywgbmFtZTogJ0ZYQUEnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0ZYQUEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2Jva2VoJywgbmFtZTogJ0Jva2VoIERPRicsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nQm9rZWgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX3NtYWEnLCBuYW1lOiAnU01BQScsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nU01BQScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfdmlnbmV0dGUnLCBuYW1lOiAnVmlnbmV0dGUnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ1ZpZ25ldHRlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jb2xvcl9ncmFkaW5nJywgbmFtZTogJ0NvbG9yIEdyYWRpbmcnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDb2xvckdyYWRpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2RvZicsIG5hbWU6ICdEZXB0aCBvZiBGaWVsZCcsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nRE9GJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19nb2RyYXlzJywgbmFtZTogJ0dvZCBSYXlzJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdHb2RSYXlzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19vdXRsaW5lJywgbmFtZTogJ091dGxpbmUnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ091dGxpbmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX3NzcicsIG5hbWU6ICdTY3JlZW4gU3BhY2UgUmVmbGVjdGlvbnMnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ1NTUicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfdHJhbnNpdGlvbicsIG5hbWU6ICdTY2VuZSBUcmFuc2l0aW9uJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdUcmFuc2l0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19nbGl0Y2gnLCBuYW1lOiAnR2xpdGNoJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdHbGl0Y2gnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2dsb3cnLCBuYW1lOiAnQmxvb20gR2xvdycsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nR2xvdycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfcGl4ZWwnLCBuYW1lOiAnUGl4ZWwnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ1BpeGVsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19yZW5kZXJfcGl4ZWwnLCBuYW1lOiAnUGl4ZWxhdGVkIFJlbmRlcmluZycsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nUmVuZGVyUGl4ZWxhdGVkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19hZnRlcmltYWdlJywgbmFtZTogJ0FmdGVyaW1hZ2UnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0FmdGVyaW1hZ2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX3RhYScsIG5hbWU6ICdUQUEnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ1RBQScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfdGVtcG9yYWwnLCBuYW1lOiAnVGVtcG9yYWwgQUEnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ1RlbXBvcmFsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19jaHJvbWF0aWMnLCBuYW1lOiAnQ2hyb21hdGljIEFiZXJyYXRpb24nLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0Nocm9tYXRpYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfZGVwdGgnLCBuYW1lOiAnRGVwdGggRWZmZWN0JywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdEZXB0aCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3Npbmdfbm9kZXMnLCBuYW1lOiAnTm9kZS1iYXNlZCBFZmZlY3RzJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdOb2RlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfYWR2YW5jZWQnLCBuYW1lOiAnQWR2YW5jZWQnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0FkdmFuY2VkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19ibG9vbScsIG5hbWU6ICdCbG9vbScsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nQmxvb20nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2Jsb29tX2hkcicsIG5hbWU6ICdCbG9vbSBIRFInLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0Jsb29tSERSJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19sZW5zX2Rpc3RvcnRpb24nLCBuYW1lOiAnTGVucyBEaXN0b3J0aW9uJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdMZW5zRGlzdG9ydGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfcGl4ZWxfYXJ0JywgbmFtZTogJ1BpeGVsIEFydCcsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nUGl4ZWxBcnQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX21vdGlvbmJsdXInLCBuYW1lOiAnTW90aW9uIEJsdXInLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ01vdGlvbkJsdXInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2dyYXlzY2FsZScsIG5hbWU6ICdDb2xvciBBZGp1c3QgKEdyYXlzY2FsZS9TZXBpYSknLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0dyYXlzY2FsZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfY29sb3JncmFkaW5nJywgbmFtZTogJ0NvbG9yIEdyYWRpbmcgKFBvc3QpJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdDb2xvcmdyYWRpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2hhbGZ0b25lJywgbmFtZTogJ0hhbGZ0b25lJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdIYWxmdG9uZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfZG90c2NyZWVuJywgbmFtZTogJ0RvdCBTY3JlZW4nLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0RvdFNjcmVlbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfbWFzaycsIG5hbWU6ICdNYXNraW5nJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdNYXNrJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19zYW8nLCBuYW1lOiAnU0FPJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdTQU8nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9rYWxlaWRvJywgbmFtZTogJ0thbGVpZG9zY29wZScsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckthbGVpZG8nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9zZXBpYScsIG5hbWU6ICdTZXBpYSAvIFZpbnRhZ2UgRmlsbScsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlclNlcGlhJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19jcnQnLCBuYW1lOiAnQ1JUIFNjcmVlbiBFZmZlY3QnLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb3N0cHJvY2Vzc2luZ0NSVCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfYXNjaWknLCBuYW1lOiAnQVNDSUkgQXJ0IEVmZmVjdCcsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nQXNjaWknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2d0YW8nLCBuYW1lOiAnR1RBTycsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nR1RBTycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9zdHByb2Nlc3NpbmdfM2RsdXQnLCBuYW1lOiAnM0QgTFVUJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmczRExVVCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX3RpbHRzaGlmdCcsIG5hbWU6ICdUaWx0IFNoaWZ0IEJsdXInLCBjYXRlZ29yeTogJ3Bvc3Rwcm9jZXNzaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJUaWx0U2hpZnQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9zb2JlbCcsIG5hbWU6ICdTb2JlbCBFZGdlIERldGVjdGlvbicsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlclNvYmVsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkZXJfcmdic2hpZnQnLCBuYW1lOiAnUkdCIFNoaWZ0JywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyUkdCU2hpZnQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9odWVfc2F0dXJhdGlvbicsIG5hbWU6ICdIdWUvU2F0dXJhdGlvbicsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckh1ZVNhdHVyYXRpb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Bvc3Rwcm9jZXNzaW5nX2Jsb29tX2VtaXNzaXZlJywgbmFtZTogJ0Jsb29tIEVtaXNzaXZlJywgY2F0ZWdvcnk6ICdwb3N0cHJvY2Vzc2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUG9zdHByb2Nlc3NpbmdCbG9vbUVtaXNzaXZlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb3N0cHJvY2Vzc2luZ19ibG9vbV9hZHZhbmNlZCcsIG5hbWU6ICdCbG9vbSBBZHZhbmNlZCAoU2VsZWN0aXZlKScsIGNhdGVnb3J5OiAncG9zdHByb2Nlc3NpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvc3Rwcm9jZXNzaW5nQmxvb21BZHZhbmNlZCcpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdzaGFkZXJzJyxcbiAgICAgICAgbmFtZTogJ1NoYWRlcnMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9maXJlJywgbmFtZTogJ0ZpcmUgU2hhZGVyJywgY2F0ZWdvcnk6ICdzaGFkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJGaXJlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkZXJfZGVtbycsIG5hbWU6ICdDdXN0b20gU2hhZGVycycsIGNhdGVnb3J5OiAnc2hhZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyRGVtbycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyc19oZWF0bWFwJywgbmFtZTogJ0hlYXRtYXAgU2hhZGVyJywgY2F0ZWdvcnk6ICdzaGFkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJzSGVhdG1hcCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX2Rpc3RvcnRpb24nLCBuYW1lOiAnRGlzdG9ydGlvbiBTaGFkZXJzJywgY2F0ZWdvcnk6ICdzaGFkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJEaXN0b3J0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkZXJfbm9pc2UnLCBuYW1lOiAnTm9pc2UgU2hhZGVycycsIGNhdGVnb3J5OiAnc2hhZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyTm9pc2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9sYXZhbGFtcCcsIG5hbWU6ICdTaGFkZXIgTGF2YSBMYW1wJywgY2F0ZWdvcnk6ICdzaGFkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJMYXZhTGFtcCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX3ZpZ25ldHRlJywgbmFtZTogJ1NoYWRlciBWaWduZXR0ZScsIGNhdGVnb3J5OiAnc2hhZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyVmlnbmV0dGUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcnNfc2t5JywgbmFtZTogJ1NoYWRlcnMgU2t5JywgY2F0ZWdvcnk6ICdzaGFkZXJzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJTa3knKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcnNfb2NlYW4nLCBuYW1lOiAnU2hhZGVycyBPY2VhbicsIGNhdGVnb3J5OiAnc2hhZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyT2NlYW4nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RvbmVtYXBwaW5nJywgbmFtZTogJ1RvbmUgTWFwcGluZycsIGNhdGVnb3J5OiAnc2hhZGVycycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyVG9uZW1hcHBpbmcnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcnNfbm9pc2UnLCBuYW1lOiAnU2ltcGxleCBOb2lzZSBTaGFkZXInLCBjYXRlZ29yeTogJ3NoYWRlcnMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlcnNOb2lzZScpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdlbnZpcm9ubWVudCcsXG4gICAgICAgIG5hbWU6ICdFbnZpcm9ubWVudCcsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2t5JywgbmFtZTogJ1NreScsIGNhdGVnb3J5OiAnZW52aXJvbm1lbnQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Ta3knKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3dhdGVyJywgbmFtZTogJ1dhdGVyJywgY2F0ZWdvcnk6ICdlbnZpcm9ubWVudCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dhdGVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkZXJzX3NreV9lbnZpcm9ubWVudCcsIG5hbWU6ICdTa3kgU2hhZGVyJywgY2F0ZWdvcnk6ICdlbnZpcm9ubWVudCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU2hhZGVyc1NreScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX3NreScsIG5hbWU6ICdTa3kgU2hhZGVyIDInLCBjYXRlZ29yeTogJ2Vudmlyb25tZW50JywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJTa3knKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9vY2VhbicsIG5hbWU6ICdPY2VhbiBTaGFkZXInLCBjYXRlZ29yeTogJ2Vudmlyb25tZW50JywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJPY2VhbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGFub3JhbWFfZXF1aXJlY3Rhbmd1bGFyJywgbmFtZTogJ0VxdWlyZWN0YW5ndWxhciBQYW5vcmFtYScsIGNhdGVnb3J5OiAnZW52aXJvbm1lbnQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBhbm9yYW1hRXF1aXJlY3Rhbmd1bGFyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9lbnZpcm9ubWVudF9oZHInLCBuYW1lOiAnRW52aXJvbm1lbnQgSERSJywgY2F0ZWdvcnk6ICdlbnZpcm9ubWVudCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMRW52aXJvbm1lbnRIZHInKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnb2JqZWN0cycsXG4gICAgICAgIG5hbWU6ICdPYmplY3RzJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9yZWZsZWN0b3InLCBuYW1lOiAnUmVmbGVjdG9yJywgY2F0ZWdvcnk6ICdvYmplY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vUmVmbGVjdG9yJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9taXJyb3InLCBuYW1lOiAnTWlycm9yJywgY2F0ZWdvcnk6ICdvYmplY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNaXJyb3InKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX29iamVjdHNfbG9kX2NsdXN0ZXInLCBuYW1lOiAnTE9EIENsdXN0ZXInLCBjYXRlZ29yeTogJ29iamVjdHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE9iamVjdHNMb2RDbHVzdGVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9sZW5zZmxhcmVzJywgbmFtZTogJ0xlbnMgRmxhcmVzJywgY2F0ZWdvcnk6ICdvYmplY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMZW5zZmxhcmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zZWN0b3InLCBuYW1lOiAnU2VjdG9yJywgY2F0ZWdvcnk6ICdvYmplY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vU2VjdG9yJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tYXJjaGluZ2N1YmVzJywgbmFtZTogJ01hcmNoaW5nIEN1YmVzJywgY2F0ZWdvcnk6ICdvYmplY3RzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xPYmplY3RzTWFyY2hpbmdDdWJlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcmVmcmFjdG9yJywgbmFtZTogJ1JlZnJhY3RvcicsIGNhdGVnb3J5OiAnb2JqZWN0cycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMT2JqZWN0c1JlZnJhY3RvcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaGVscGVyc196b28nLCBuYW1lOiAnSGVscGVycyBab28nLCBjYXRlZ29yeTogJ29iamVjdHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTE1pc2NPYmplY3RzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jZWRfbWVzaF9keW5hbWljJywgbmFtZTogJ0luc3RhbmNlZCBNZXNoIER5bmFtaWMnLCBjYXRlZ29yeTogJ29iamVjdHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNlZE1lc2gnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnaW5zdGFuY2luZycsXG4gICAgICAgIG5hbWU6ICdJbnN0YW5jaW5nJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nJywgbmFtZTogJ0luc3RhbmNpbmcnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9JbnN0YW5jaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nX3BlcmZvcm1hbmNlJywgbmFtZTogJ0luc3RhbmNpbmcgUGVyZm9ybWFuY2UnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNpbmdQZXJmb3JtYW5jZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW5zdGFuY2luZ19hbmltYXRlZCcsIG5hbWU6ICdJbnN0YW5jaW5nIEFuaW1hdGVkJywgY2F0ZWdvcnk6ICdpbnN0YW5jaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnN0YW5jaW5nQW5pbWF0ZWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2luc3RhbmNpbmdfYmlsbGJvYXJkcycsIG5hbWU6ICdJbnN0YW5jaW5nIEJpbGxib2FyZHMnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNpbmdCaWxsYm9hcmRzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nX3NjYXR0ZXInLCBuYW1lOiAnSW5zdGFuY2luZyBTY2F0dGVyJywgY2F0ZWdvcnk6ICdpbnN0YW5jaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnN0YW5jaW5nU2NhdHRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW5zdGFuY2luZ19tb3JwaCcsIG5hbWU6ICdJbnN0YW5jaW5nIE1vcnBoJywgY2F0ZWdvcnk6ICdpbnN0YW5jaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnN0YW5jaW5nTW9ycGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2luc3RhbmNpbmdfZHluYW1pYycsIG5hbWU6ICdJbnN0YW5jaW5nIER5bmFtaWMnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNpbmdEeW5hbWljJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nX2dyYXNzJywgbmFtZTogJ0luc3RhbmNlZCBHcmFzcycsIGNhdGVnb3J5OiAnaW5zdGFuY2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW5zdGFuY2luZ0dyYXNzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nX3JheWNhc3QnLCBuYW1lOiAnSW5zdGFuY2luZyBSYXljYXN0JywgY2F0ZWdvcnk6ICdpbnN0YW5jaW5nJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnN0YW5jaW5nUmF5Y2FzdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbWVzaF9iYXRjaCcsIG5hbWU6ICdCYXRjaGVkIE1lc2gnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNpbmdCYXRjaGVkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnN0YW5jaW5nX2xvZCcsIG5hbWU6ICdJbnN0YW5jaW5nIExPRCcsIGNhdGVnb3J5OiAnaW5zdGFuY2luZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW5zdGFuY2luZ0xPRCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW5zdGFuY2luZ190cmVlcycsIG5hbWU6ICdJbnN0YW5jZWQgVHJlZXMnLCBjYXRlZ29yeTogJ2luc3RhbmNpbmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEluc3RhbmNpbmdUcmVlcycpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdpbnRlcmFjdGl2ZScsXG4gICAgICAgIG5hbWU6ICdJbnRlcmFjdGl2ZScsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW50ZXJhY3RpdmVfY3ViZXMnLCBuYW1lOiAnSW50ZXJhY3RpdmUgQ3ViZXMnLCBjYXRlZ29yeTogJ2ludGVyYWN0aXZlJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnRlcmFjdGl2ZUN1YmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnRlcmFjdGl2ZV9jdWJlc19yYXljYXN0ZXInLCBuYW1lOiAnSW50ZXJhY3RpdmUgQ3ViZXMgUmF5Y2FzdGVyJywgY2F0ZWdvcnk6ICdpbnRlcmFjdGl2ZScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW50ZXJhY3RpdmVDdWJlc1JheWNhc3QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ludGVyYWN0aXZlX3ZveGVscGFpbnRlcicsIG5hbWU6ICdWb3hlbCBQYWludGVyJywgY2F0ZWdvcnk6ICdpbnRlcmFjdGl2ZScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW50ZXJhY3RpdmVWb3hlbHBhaW50ZXInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ludGVyYWN0aXZlX2J1ZmZlcl9nZW9tZXRyeScsIG5hbWU6ICdJbnRlcmFjdGl2ZSBCdWZmZXJHZW9tZXRyeScsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEludGVyYWN0aXZlQnVmZmVyR2VvbWV0cnknKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ludGVyYWN0aXZlX2N1YmVzX2dwdScsIG5hbWU6ICdJbnRlcmFjdGl2ZSBDdWJlcyBHUFUnLCBjYXRlZ29yeTogJ2ludGVyYWN0aXZlJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnRlcmFjdGl2ZUN1YmVzR1BVJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnRlcmFjdGl2ZV9jdWJlc19vcnRobycsIG5hbWU6ICdJbnRlcmFjdGl2ZSBDdWJlcyBPcnRobycsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEludGVyYWN0aXZlQ3ViZXNPcnRobycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW50ZXJhY3RpdmVfbGluZXMnLCBuYW1lOiAnSW50ZXJhY3RpdmUgTGluZXMnLCBjYXRlZ29yeTogJ2ludGVyYWN0aXZlJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xJbnRlcmFjdGl2ZUxpbmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnRlcmFjdGl2ZV9yYXljYXN0aW5nX3BvaW50cycsIG5hbWU6ICdJbnRlcmFjdGl2ZSBSYXljYXN0aW5nIFBvaW50cycsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEludGVyYWN0aXZlUmF5Y2FzdGluZ1BvaW50cycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19ib3hzZWxlY3Rpb24nLCBuYW1lOiAnQm94IFNlbGVjdGlvbicsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9NaXNjQm94c2VsZWN0aW9uJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdtaXNjX3JheWNhc3Rlcl9oZWxwZXInLCBuYW1lOiAnUmF5Y2FzdGVyIEhlbHBlcicsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9NaXNjUmF5Y2FzdGVySGVscGVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9pbnRlcmFjdGl2ZV9wb2ludHMnLCBuYW1lOiAnSW50ZXJhY3RpdmUgUG9pbnRzJywgY2F0ZWdvcnk6ICdpbnRlcmFjdGl2ZScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW50ZXJhY3RpdmVQb2ludHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ludGVyYWN0aXZlX3ZveGVscycsIG5hbWU6ICdWb3hlbCBCdWlsZGVyJywgY2F0ZWdvcnk6ICdpbnRlcmFjdGl2ZScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMSW50ZXJhY3RpdmVWb3hlbHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2ludGVyYWN0aXZlX2RyYWdnYWJsZWN1YmVzJywgbmFtZTogJ0RyYWdnYWJsZSBDdWJlcycsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEludGVyYWN0aXZlRHJhZycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfaW50ZXJhY3RpdmVfcGljaycsIG5hbWU6ICdPYmplY3QgUGlja2luZycsIGNhdGVnb3J5OiAnaW50ZXJhY3RpdmUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEludGVyYWN0aXZlUGljaycpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdzcHJpdGVzJyxcbiAgICAgICAgbmFtZTogJ1Nwcml0ZXMnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Nwcml0ZXMnLCBuYW1lOiAnU3ByaXRlcycsIGNhdGVnb3J5OiAnc3ByaXRlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU3ByaXRlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc3ByaXRlc19iaWxsYm9hcmQnLCBuYW1lOiAnQmlsbGJvYXJkIFNwcml0ZXMnLCBjYXRlZ29yeTogJ3Nwcml0ZXMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNwcml0ZXNCaWxsYm9hcmQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3Nwcml0ZXNfc2NlbmUnLCBuYW1lOiAnU3ByaXRlcyBTY2VuZScsIGNhdGVnb3J5OiAnc3ByaXRlcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU3ByaXRlc05vZGVzJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2J1ZmZlcmdlb21ldHJ5JyxcbiAgICAgICAgbmFtZTogJ0J1ZmZlckdlb21ldHJ5JyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9idWZmZXJnZW9tZXRyeScsIG5hbWU6ICdCdWZmZXJHZW9tZXRyeScsIGNhdGVnb3J5OiAnYnVmZmVyZ2VvbWV0cnknLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEJ1ZmZlckdlb21ldHJ5JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9idWZmZXJnZW9tZXRyeV9pbmRleGVkJywgbmFtZTogJ0luZGV4ZWQgQnVmZmVyR2VvbWV0cnknLCBjYXRlZ29yeTogJ2J1ZmZlcmdlb21ldHJ5JywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xCdWZmZXJnZW9tZXRyeUluZGV4ZWQnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2J1ZmZlcmdlb21ldHJ5X2xpbmVzJywgbmFtZTogJ0J1ZmZlckdlb21ldHJ5IExpbmVzJywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlMaW5lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYnVmZmVyZ2VvbWV0cnlfaW5zdGFuY2luZycsIG5hbWU6ICdCdWZmZXJHZW9tZXRyeSBJbnN0YW5jaW5nJywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlJbnN0YW5jaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9idWZmZXJnZW9tZXRyeV9kcmF3cmFuZ2UnLCBuYW1lOiAnQnVmZmVyR2VvbWV0cnkgRHJhd1JhbmdlJywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlEcmF3UmFuZ2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2J1ZmZlcmdlb21ldHJ5X2N1c3RvbV9hdHRyaWJ1dGVzJywgbmFtZTogJ0N1c3RvbSBBdHRyaWJ1dGVzIFBhcnRpY2xlcycsIGNhdGVnb3J5OiAnYnVmZmVyZ2VvbWV0cnknLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEJ1ZmZlckdlb21ldHJ5Q3VzdG9tQXR0cmlidXRlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYnVmZmVyZ2VvbWV0cnlfcmF3c2hhZGVyJywgbmFtZTogJ1JhdyBTaGFkZXIgUG9pbnRzJywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlSYXdTaGFkZXInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2J1ZmZlcmdlb21ldHJ5X3NlbGVjdGl2ZV9kcmF3JywgbmFtZTogJ1NlbGVjdGl2ZSBEcmF3aW5nJywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlTZWxlY3RpdmVEcmF3aW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9idWZmZXJnZW9tZXRyeV9pbnN0YW5jZWQnLCBuYW1lOiAnSW5zdGFuY2VkIEJ1ZmZlckdlb21ldHJ5JywgY2F0ZWdvcnk6ICdidWZmZXJnZW9tZXRyeScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQnVmZmVyR2VvbWV0cnlJbnN0YW5jZWQnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnY3NzM2QnLFxuICAgICAgICBuYW1lOiAnQ1NTM0QnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ2NzczNkX3BlcmlvZGljdGFibGUnLCBuYW1lOiAnUGVyaW9kaWMgVGFibGUnLCBjYXRlZ29yeTogJ2NzczNkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vY3NzM2RfcGVyaW9kaWN0YWJsZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY3NzM2QnLCBuYW1lOiAnV2ViR0wgKyBDU1MzRCcsIGNhdGVnb3J5OiAnY3NzM2QnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi93ZWJnbF9jc3MzZCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY3NzM2RfY2Fyb3VzZWwnLCBuYW1lOiAnQ1NTM0QgQ2Fyb3VzZWwnLCBjYXRlZ29yeTogJ2NzczNkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDc3MzZENhcm91c2VsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jc3MzZF9kZW1vJywgbmFtZTogJ0NTUzNEIERlbW8nLCBjYXRlZ29yeTogJ2NzczNkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDU1MzRCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnY3NzM2RfbWl4ZWQnLCBuYW1lOiAnTWl4ZWQnLCBjYXRlZ29yeTogJ2NzczNkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vQ1NTM0RNaXhlZCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnY3NzM2RfbW9sZWN1bGVzJywgbmFtZTogJ01vbGVjdWxlcycsIGNhdGVnb3J5OiAnY3NzM2QnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9DU1MzRE1vbGVjdWxlcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnY3NzM2Rfb3J0aG9ncmFwaGljJywgbmFtZTogJ09ydGhvZ3JhcGhpYycsIGNhdGVnb3J5OiAnY3NzM2QnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9DU1MzRE9ydGhvZ3JhcGhpYycpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdyZWZsZWN0aW9uJyxcbiAgICAgICAgbmFtZTogJ1JlZmxlY3Rpb24nLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3JlZmxlY3Rpb24nLCBuYW1lOiAnUmVmbGVjdGlvbicsIGNhdGVnb3J5OiAncmVmbGVjdGlvbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUmVmbGVjdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcmVmbGVjdGlvbl9jaHJvbWUnLCBuYW1lOiAnUmVmbGVjdGlvbiBDaHJvbWUnLCBjYXRlZ29yeTogJ3JlZmxlY3Rpb24nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFJlZmxlY3Rpb25DaHJvbWUnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnY2FudmFzX3RleHR1cmUnLFxuICAgICAgICBuYW1lOiAnQ2FudmFzIFRleHR1cmUnLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2NhbnZhc190ZXh0dXJlJywgbmFtZTogJ0NhbnZhcyBUZXh0dXJlJywgY2F0ZWdvcnk6ICdjYW52YXNfdGV4dHVyZScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ2FudmFzVGV4dHVyZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY2FudmFzX3RleHR1cmVfYW5pbWF0ZWQnLCBuYW1lOiAnQ2FudmFzIFRleHR1cmUgQW5pbWF0ZWQnLCBjYXRlZ29yeTogJ2NhbnZhc190ZXh0dXJlJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDYW52YXNUZXh0dXJlQW5pbWF0ZWQnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAndG9vbicsXG4gICAgICAgIG5hbWU6ICdUb29uJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF90b29uJywgbmFtZTogJ1Rvb24gU2hhZGluZycsIGNhdGVnb3J5OiAndG9vbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVG9vbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdG9vbl9pbmtsaW5lJywgbmFtZTogJ1Rvb24gSW5rbGluZScsIGNhdGVnb3J5OiAndG9vbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVG9vbklua2xpbmUnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnc3ZnJyxcbiAgICAgICAgbmFtZTogJ1NWRycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnc3ZnX2xpbmVzJywgbmFtZTogJ1NWRyBMaW5lcycsIGNhdGVnb3J5OiAnc3ZnJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vU1ZHTGluZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3N2ZycsIG5hbWU6ICdTVkcgU2hhcGVzJywgY2F0ZWdvcnk6ICdzdmcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNWRycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc3ZnX2V4dHJ1ZGUnLCBuYW1lOiAnU1ZHIEV4dHJ1ZGUnLCBjYXRlZ29yeTogJ3N2ZycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMU3ZnRXh0cnVkZScpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICd3ZWJncHUnLFxuICAgICAgICBuYW1lOiAnV2ViR1BVJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF93ZWJncHUnLCBuYW1lOiAnV2ViR1BVIFN0eWxlJywgY2F0ZWdvcnk6ICd3ZWJncHUnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFdlYkdQVScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfd2ViZ3B1X2NvbXB1dGUnLCBuYW1lOiAnV2ViR1BVIENvbXB1dGUgKEdQR1BVIHNpbSknLCBjYXRlZ29yeTogJ3dlYmdwdScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMV2ViZ3B1Q29tcHV0ZScpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdwb2ludF9jbG91ZCcsXG4gICAgICAgIG5hbWU6ICdQb2ludCBDbG91ZCcsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcG9pbnRfY2xvdWQnLCBuYW1lOiAnUG9pbnQgQ2xvdWQnLCBjYXRlZ29yeTogJ3BvaW50X2Nsb3VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQb2ludENsb3VkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9wb2ludF9jbG91ZF9hbmltYXRlZCcsIG5hbWU6ICdQb2ludCBDbG91ZCBBbmltYXRlZCcsIGNhdGVnb3J5OiAncG9pbnRfY2xvdWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBvaW50Q2xvdWRBbmltYXRlZCcpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICd0ZXJyYWluJyxcbiAgICAgICAgbmFtZTogJ1RlcnJhaW4nLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3RlcnJhaW4nLCBuYW1lOiAnVGVycmFpbicsIGNhdGVnb3J5OiAndGVycmFpbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVGVycmFpbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdGVycmFpbl9keW5hbWljJywgbmFtZTogJ1RlcnJhaW4gRHluYW1pYycsIGNhdGVnb3J5OiAndGVycmFpbicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMVGVycmFpbkR5bmFtaWMnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnY3VzdG9tX3NoYWRlcicsXG4gICAgICAgIG5hbWU6ICdDdXN0b20gU2hhZGVyJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jdXN0b21fc2hhZGVyJywgbmFtZTogJ0N1c3RvbSBTaGFkZXInLCBjYXRlZ29yeTogJ2N1c3RvbV9zaGFkZXInLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEN1c3RvbVNoYWRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY3VzdG9tX3NoYWRlcl93YXRlcicsIG5hbWU6ICdDdXN0b20gU2hhZGVyIFdhdGVyJywgY2F0ZWdvcnk6ICdjdXN0b21fc2hhZGVyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xDdXN0b21TaGFkZXJXYXRlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX2ZyZXNuZWwnLCBuYW1lOiAnRnJlc25lbCBTaGFkZXInLCBjYXRlZ29yeTogJ2N1c3RvbV9zaGFkZXInLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckZyZXNuZWwnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9mcmVzbmVsX2N1YmUnLCBuYW1lOiAnRnJlc25lbCBTaGFkZXIgKEN1YmUpJywgY2F0ZWdvcnk6ICdjdXN0b21fc2hhZGVyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJGcmVzbmVsQ3ViZScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfc2hhZGVyX2dsb3cnLCBuYW1lOiAnR2xvdyBFZmZlY3QnLCBjYXRlZ29yeTogJ2N1c3RvbV9zaGFkZXInLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckdsb3cnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcl9ob2xvZ3JhbScsIG5hbWU6ICdIb2xvZ3JhbSBTaGFkZXInLCBjYXRlZ29yeTogJ2N1c3RvbV9zaGFkZXInLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckhvbG9ncmFtJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ3BoeXNpY3MnLFxuICAgICAgICBuYW1lOiAnUGh5c2ljcycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGh5c2ljcycsIG5hbWU6ICdQaHlzaWNzJywgY2F0ZWdvcnk6ICdwaHlzaWNzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQaHlzaWNzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9waHlzaWNzX2JhbGxzJywgbmFtZTogJ0JvdW5jaW5nIEJhbGxzIFBoeXNpY3MnLCBjYXRlZ29yeTogJ3BoeXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFBoeXNpY3NCYWxscycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGh5c2ljc19jbG90aCcsIG5hbWU6ICdQaHlzaWNzIENsb3RoJywgY2F0ZWdvcnk6ICdwaHlzaWNzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xQaHlzaWNzQ2xvdGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3BoeXNpY3NfcmlnaWQnLCBuYW1lOiAnUmlnaWQgQm9keSBTdGFja2luZycsIGNhdGVnb3J5OiAncGh5c2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGh5c2ljc1JpZ2lkJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdwaHlzaWNzX2FtbW9fYnJlYWsnLCBuYW1lOiAnQW1tby5qcyBCcmVha2FibGUnLCBjYXRlZ29yeTogJ3BoeXNpY3MnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9QaHlzaWNzQW1tb0JyZWFrJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdwaHlzaWNzX2FtbW9fY2xvdGgnLCBuYW1lOiAnQW1tby5qcyBDbG90aCcsIGNhdGVnb3J5OiAncGh5c2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1BoeXNpY3NBbW1vQ2xvdGgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3BoeXNpY3NfcmFwaWVyX2Jhc2ljJywgbmFtZTogJ1JhcGllciBCYXNpYycsIGNhdGVnb3J5OiAncGh5c2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1BoeXNpY3NSYXBpZXJCYXNpYycpIH0sXG4gICAgICAgICAgICB7IGlkOiAncGh5c2ljc19yYXBpZXJfaW5zdGFuY2luZycsIG5hbWU6ICdSYXBpZXIgSW5zdGFuY2luZycsIGNhdGVnb3J5OiAncGh5c2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1BoeXNpY3NSYXBpZXJJbnN0YW5jaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdwaHlzaWNzX3JhcGllcl9qb2ludHMnLCBuYW1lOiAnUmFwaWVyIEpvaW50cycsIGNhdGVnb3J5OiAncGh5c2ljcycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1BoeXNpY3NSYXBpZXJKb2ludHMnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnYXVkaW8nLFxuICAgICAgICBuYW1lOiAnQXVkaW8nLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2F1ZGlvJywgbmFtZTogJ0F1ZGlvIFZpc3VhbGl6ZXInLCBjYXRlZ29yeTogJ2F1ZGlvJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBdWRpbycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYXVkaW9fYW5hbHlzZXInLCBuYW1lOiAnQXVkaW8gQW5hbHlzZXInLCBjYXRlZ29yeTogJ2F1ZGlvJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBdWRpb0FuYWx5c2VyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hdWRpb19vcmllbnRhdGlvbicsIG5hbWU6ICdBdWRpbyBPcmllbnRhdGlvbicsIGNhdGVnb3J5OiAnYXVkaW8nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEF1ZGlvT3JpZW50YXRpb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2F1ZGlvX3Bvc2l0aW9uYWwnLCBuYW1lOiAnUG9zaXRpb25hbCBBdWRpbycsIGNhdGVnb3J5OiAnYXVkaW8nLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEF1ZGlvUG9zaXRpb25hbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYXVkaW9fdmlzdWFsaXplcicsIG5hbWU6ICdBdWRpbyBWaXN1YWxpemVyJywgY2F0ZWdvcnk6ICdhdWRpbycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQXVkaW9WaXN1YWxpemVyJykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2NzczJkJyxcbiAgICAgICAgbmFtZTogJ0NTUzJEJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICdjc3MyZF9sYWJlbCcsIG5hbWU6ICdDU1MyRCBMYWJlbCcsIGNhdGVnb3J5OiAnY3NzMmQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9DU1MyRExhYmVsJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jc3MyZCcsIG5hbWU6ICdDU1MyRCBSZW5kZXJlcicsIGNhdGVnb3J5OiAnY3NzMmQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENTUzJEJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jc3MyZF9jaGFydCcsIG5hbWU6ICdDU1MyRCBDaGFydCcsIGNhdGVnb3J5OiAnY3NzMmQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENzczJkQ2hhcnQnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAndnInLFxuICAgICAgICBuYW1lOiAnVlInLFxuICAgICAgICBkZW1vczogW1xuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3ZyJywgbmFtZTogJ1ZSIEV4cGVyaWVuY2UnLCBjYXRlZ29yeTogJ3ZyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xWUicpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICd3ZWJ4cicsXG4gICAgICAgIG5hbWU6ICdXZWJYUicsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfd2VieHInLCBuYW1lOiAnV2ViWFInLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xXZWJYUicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfd2VieHJfYXInLCBuYW1lOiAnV2ViWFIgQVInLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xXZWJYUkFSJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF93ZWJ4cl92cicsIG5hbWU6ICdXZWJYUiBWUicsIGNhdGVnb3J5OiAnd2VieHInLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFdlYlhSVlInKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3dlYnhyX2hpdF90ZXN0JywgbmFtZTogJ1dlYlhSIEhpdCBUZXN0JywgY2F0ZWdvcnk6ICd3ZWJ4cicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMV2ViWFJIaXRUZXN0JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF93ZWJ4cl9hbmNob3JzJywgbmFtZTogJ1dlYlhSIEFuY2hvcnMnLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xXZWJYUkFuY2hvcnMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3dlYnhyX2xheWVycycsIG5hbWU6ICdXZWJYUiBMYXllcnMnLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xXZWJYUkxheWVycycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2VieHJfYXJfY29uZXMnLCBuYW1lOiAnV2ViWFIgQVIgQ29uZXMnLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViWFJBUkNvbmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJ4cl9hcl9wbGFuZV9kZXRlY3Rpb24nLCBuYW1lOiAnV2ViWFIgQVIgUGxhbmUgRGV0ZWN0aW9uJywgY2F0ZWdvcnk6ICd3ZWJ4cicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYlhSQVJQbGFuZURldGVjdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2VieHJfdnJfYmFsbHNob290ZXInLCBuYW1lOiAnV2ViWFIgVlIgQmFsbCBTaG9vdGVyJywgY2F0ZWdvcnk6ICd3ZWJ4cicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYlhSVlJCYWxsc2hvb3RlcicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2VieHJfdnJfcGFpbnQnLCBuYW1lOiAnV2ViWFIgVlIgUGFpbnQnLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViWFJWUlBhaW50JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJ4cl9zYW5kYm94JywgbmFtZTogJ1dlYlhSIFNhbmRib3gnLCBjYXRlZ29yeTogJ3dlYnhyJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViWFJTYW5kYm94JykgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2FkdmFuY2VkJyxcbiAgICAgICAgbmFtZTogJ0FkdmFuY2VkJyxcbiAgICAgICAgZGVtb3M6IFtcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9iYXRjaF9sb2RfYnZoJywgbmFtZTogJ0JhdGNoIExPRCBCVkgnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vQmF0Y2hMb2RCdmgnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3VzZWZyYW1lX3Rlc3QnLCBuYW1lOiAnVXNlRnJhbWUgVGVzdCcsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9Vc2VGcmFtZVRlc3QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2xvZCcsIG5hbWU6ICdMZXZlbCBvZiBEZXRhaWwnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xMT0QnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2RlY2FscycsIG5hbWU6ICdEZWNhbHMnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xEZWNhbHMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21vZGlmaWVyX3NpbXBsaWZ5JywgbmFtZTogJ1NpbXBsaWZ5IE1vZGlmaWVyJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMTW9kaWZpZXJTaW1wbGlmeScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbW9kaWZpZXJfY3VydmUnLCBuYW1lOiAnQ3VydmUgTW9kaWZpZXInLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNb2RpZmllckN1cnZlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9oZWxwZXJzJywgbmFtZTogJ0hlbHBlcnMnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xIZWxwZXJzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9tdWx0aXBsZV9nZW9tZXRyaWVzJywgbmFtZTogJ011bHRpcGxlIEdlb21ldHJpZXMnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNdWx0aXBsZUdlb21ldHJpZXMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX211bHRpcGxlX3JlbmRlcmVycycsIG5hbWU6ICdNdWx0aXBsZSBSZW5kZXJlcnMnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNdWx0aXBsZVJlbmRlcmVycycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfdG9uZV9tYXBwaW5nJywgbmFtZTogJ1RvbmUgTWFwcGluZycsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFRvbmVNYXBwaW5nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9zaGFkZXJfbGF2YScsIG5hbWU6ICdMYXZhIFNoYWRlcicsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTFNoYWRlckxhdmEnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX3NoYWRlcnNfb2NlYW5fYWR2YW5jZWQnLCBuYW1lOiAnT2NlYW4gU2hhZGVyIChBZHZhbmNlZCknLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xTaGFkZXJzT2NlYW4nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX21vZGlmaWVyX3Rlc3NlbGxhdGlvbicsIG5hbWU6ICdUZXNzZWxsYXRpb24gTW9kaWZpZXInLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNb2RpZmllclRlc3NlbGxhdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfbW9kaWZpZXJfZWRnZXNwbGl0JywgbmFtZTogJ0VkZ2UgU3BsaXQgTW9kaWZpZXInLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNb2RpZmllckVkZ2VTcGxpdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfcGVyZm9ybWFuY2UnLCBuYW1lOiAnUGVyZm9ybWFuY2UgKEluc3RhbmNpbmcpJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMUGVyZm9ybWFuY2UnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX211bHRpcGxlX3NjZW5lcycsIG5hbWU6ICdNdWx0aXBsZSBTY2VuZXMnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNdWx0aXBsZVNjZW5lcycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfY2xpcHBpbmdfcGxhbmVzJywgbmFtZTogJ0NsaXBwaW5nIFBsYW5lcycsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTENsaXBwaW5nUGxhbmVzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9zc3InLCBuYW1lOiAnU2NyZWVuIFNwYWNlIFJlZmxlY3Rpb25zJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRTU1InKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FkdmFuY2VkX3NzYW8nLCBuYW1lOiAnU1NBTycsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFkdmFuY2VkU1NBTycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYWR2YW5jZWRfZ3RhbycsIG5hbWU6ICdHVEFPJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRHVEFPJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9nb2RyYXlzJywgbmFtZTogJ0dvZCBSYXlzJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRHb2RSYXlzJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9ibG9vbScsIG5hbWU6ICdCbG9vbScsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFkdmFuY2VkQmxvb20nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FkdmFuY2VkX3BpeGVsYXRpb24nLCBuYW1lOiAnUGl4ZWxhdGlvbicsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFkdmFuY2VkUGl4ZWxhdGlvbicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYWR2YW5jZWRfdmlnbmV0dGUnLCBuYW1lOiAnVmlnbmV0dGUnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBZHZhbmNlZFZpZ25ldHRlJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9tb3Rpb25ibHVyJywgbmFtZTogJ01vdGlvbiBCbHVyJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRNb3Rpb25CbHVyJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9kb2YnLCBuYW1lOiAnRGVwdGggb2YgRmllbGQnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBZHZhbmNlZERPRicpIH0sXG4gICAgICAgICAgICB7IGlkOiAnd2ViZ2xfYWR2YW5jZWRfY2hyb21hdGljJywgbmFtZTogJ0Nocm9tYXRpYyBBYmVycmF0aW9uJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRDaHJvbWF0aWMnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FkdmFuY2VkX291dGxpbmUnLCBuYW1lOiAnT3V0bGluZSBFZmZlY3QnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBZHZhbmNlZE91dGxpbmUnKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FkdmFuY2VkX2ZvZycsIG5hbWU6ICdWb2x1bWV0cmljIEZvZycsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9XZWJHTEFkdmFuY2VkRm9nJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9hZHZhbmNlZF9maWxtJywgbmFtZTogJ0ZpbG0gR3JhaW4nLCBjYXRlZ29yeTogJ2FkdmFuY2VkJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xBZHZhbmNlZEZpbG0nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ3dlYmdsX2FkdmFuY2VkX2hhbGZ0b25lJywgbmFtZTogJ0hhbGZ0b25lJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQWR2YW5jZWRIYWxmdG9uZScpIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdjb250cm9scycsXG4gICAgICAgIG5hbWU6ICdDb250cm9scycsXG4gICAgICAgIGRlbW9zOiBbXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc190cmFuc2Zvcm0nLCBuYW1lOiAnVHJhbnNmb3JtIENvbnRyb2xzJywgY2F0ZWdvcnk6ICdjb250cm9scycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL01pc2NDb250cm9sc1RyYW5zZm9ybScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc19vcmJpdCcsIG5hbWU6ICdPcmJpdCBDb250cm9scycsIGNhdGVnb3J5OiAnY29udHJvbHMnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi9NaXNjQ29udHJvbHNPcmJpdCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc190cmFja2JhbGwnLCBuYW1lOiAnVHJhY2tiYWxsIENvbnRyb2xzJywgY2F0ZWdvcnk6ICdjb250cm9scycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL01pc2NDb250cm9sc1RyYWNrYmFsbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc19mbHknLCBuYW1lOiAnRmx5IENvbnRyb2xzJywgY2F0ZWdvcnk6ICdjb250cm9scycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL01pc2NDb250cm9sc0ZseScpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc19kcmFnJywgbmFtZTogJ0RyYWcgQ29udHJvbHMnLCBjYXRlZ29yeTogJ2NvbnRyb2xzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vTWlzY0NvbnRyb2xzRHJhZycpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc19hcmNiYWxsJywgbmFtZTogJ0FyY2JhbGwgQ29udHJvbHMnLCBjYXRlZ29yeTogJ2NvbnRyb2xzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vTWlzY0NvbnRyb2xzQXJjYmFsbCcpIH0sXG4gICAgICAgICAgICB7IGlkOiAnbWlzY19jb250cm9sc19maXJzdHBlcnNvbicsIG5hbWU6ICdGaXJzdCBQZXJzb24gQ29udHJvbHMnLCBjYXRlZ29yeTogJ2NvbnRyb2xzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vTWlzY0NvbnRyb2xzRmlyc3RQZXJzb24nKSB9LFxuICAgICAgICAgICAgeyBpZDogJ21pc2NfY29udHJvbHNfcG9pbnRlcmxvY2snLCBuYW1lOiAnUG9pbnRlciBMb2NrIENvbnRyb2xzJywgY2F0ZWdvcnk6ICdjb250cm9scycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL01pc2NDb250cm9sc1BvaW50ZXJMb2NrJykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdtaXNjX2xvb2thdCcsIG5hbWU6ICdMb29rIEF0IERlbW8nLCBjYXRlZ29yeTogJ2NvbnRyb2xzJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vV2ViR0xNaXNjTG9va0F0JykgfSxcbiAgICAgICAgICAgIHsgaWQ6ICd3ZWJnbF9jb250cm9sc190cmFja2JhbGwnLCBuYW1lOiAnVHJhY2tiYWxsIENvbnRyb2xzJywgY2F0ZWdvcnk6ICdjb250cm9scycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL1dlYkdMQ29udHJvbHNUcmFja2JhbGwnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbl1cblxuLy8gRmxhdHRlbmVkIGxpc3QgZm9yIHNlYXJjaFxuZXhwb3J0IGNvbnN0IGFsbERlbW9zOiBEZW1vRW50cnlbXSA9IGNhdGVnb3JpZXMuZmxhdE1hcChjID0+IGMuZGVtb3MpXG4iXX0=