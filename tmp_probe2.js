(() => {
  const ctx = window.__canvas3dCtx
  const scene = ctx?.scenes?.[0]
  if (!scene) return JSON.stringify({ err: 'no scene' })
  const out = scene.children.map((c, i) => ({
    i, type: c.type, name: c.name || '',
    pos: [c.position.x, c.position.y, c.position.z],
    visible: c.visible,
    children: c.children?.length || 0,
    isGroup: c.isGroup, isMesh: c.isMesh, isLight: c.isLight, isSkinned: c.isSkinnedMesh,
  }))
  const cam = ctx.cameras[0]
  return JSON.stringify({
    sceneChildren: out,
    cameraPos: [cam.position.x, cam.position.y, cam.position.z],
  }, null, 2)
})()
