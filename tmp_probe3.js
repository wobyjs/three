(() => {
  const ctx = window.__canvas3dCtx
  const scene = ctx?.scenes?.[0]
  const soldier = scene.children.find(c => c.isGroup)
  if (!soldier) return JSON.stringify({ err: 'no soldier' })

  const walk = (obj, depth = 0) => {
    const arr = [{
      depth,
      type: obj.type,
      name: obj.name,
      visible: obj.visible,
      pos: [obj.position.x.toFixed(2), obj.position.y.toFixed(2), obj.position.z.toFixed(2)],
      scale: [obj.scale.x.toFixed(2), obj.scale.y.toFixed(2), obj.scale.z.toFixed(2)],
      isMesh: !!obj.isMesh,
      isSkinned: !!obj.isSkinnedMesh,
      isBone: !!obj.isBone,
      material: obj.material?.type,
      geom: obj.geometry?.type,
      hasSkeleton: !!obj.skeleton,
    }]
    for (const c of obj.children || []) {
      if (arr.length < 30) arr.push(...walk(c, depth + 1))
    }
    return arr
  }
  return JSON.stringify(walk(soldier), null, 2)
})()
