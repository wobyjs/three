(async () => {
  const ctx = window.__canvas3dCtx
  const renderer = ctx.renderers[0]
  const scene = ctx.scenes[0]
  const cam = ctx.cameras[0]

  // Manually trigger a render to see if anything appears.
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, cam)

  // Check renderer stats and mesh world matrices
  const skinned = []
  scene.traverse((o) => {
    if (o.isSkinnedMesh) {
      const bb = new (o.geometry.boundingBox.constructor)()
      bb.copy(o.geometry.boundingBox)
      // Compute world-space bounding box approximation via boneMatrices
      const bone = o.skeleton?.bones?.[0]
      const bonePos = bone ? [bone.position.x, bone.position.y, bone.position.z] : null
      skinned.push({
        name: o.name,
        visible: o.visible,
        matrixWorldNeedsUpdate: o.matrixWorldNeedsUpdate,
        bones: o.skeleton?.bones?.length,
        bonePos,
        boundingSphereRadius: o.geometry.boundingSphere?.radius?.toFixed(2),
        frustumCulled: o.frustumCulled,
      })
    }
  })

  return JSON.stringify({
    stats: renderer.info,
    skinned,
    sceneFog: scene.fog ? { type: scene.fog.constructor.name, near: scene.fog.near, far: scene.fog.far, color: scene.fog.color?.getHex().toString(16) } : null,
    rendererSize: { w: renderer.domElement.width, h: renderer.domElement.height, cssW: renderer.domElement.clientWidth, cssH: renderer.domElement.clientHeight },
  }, null, 2)
})()
