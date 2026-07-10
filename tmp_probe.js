(() => {
  const c = document.querySelector('canvas')
  const r = c && c.getBoundingClientRect()
  const ctx = window.__canvas3dCtx
  const div = document.querySelector('[data-three-context="true"]')
  const dr = div && div.getBoundingClientRect()
  return JSON.stringify({
    hasCanvas: !!c,
    canvasSize: r && { w: r.width, h: r.height },
    divSize: dr && { w: dr.width, h: dr.height },
    divStyle: div && div.getAttribute('style'),
    scenes: ctx?.scenes?.length,
    renderers: ctx?.renderers?.length,
    cameras: ctx?.cameras?.length,
    frames: ctx?.frames?.length,
    sceneChildren: ctx?.scenes?.[0]?.children?.length,
    rendererSize: ctx?.renderers?.[0]?.domElement && { w: ctx.renderers[0].domElement.width, h: ctx.renderers[0].domElement.height }
  })
})()
