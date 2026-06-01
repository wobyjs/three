import Anthropic from '@anthropic-ai/sdk'
import sharp from 'sharp'
import * as fs from 'fs'
import * as path from 'path'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Verdict {
  similarity_score: number
  verdict: 'pass' | 'fail' | 'inconclusive'
  reasoning: string
  key_differences: string[]
}

// ─── Comparison Prompt ───────────────────────────────────────────────────────

export const COMPARISON_PROMPT = `You are comparing two screenshots of a 3D WebGL rendering.

Image 1 (PORTED): A Three.js example ported to JSX/Woby reactive syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

Judge visual similarity and respond with ONLY a JSON object (no markdown, no preamble):
{
  "similarity_score": <0.0-1.0 float>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<1-2 sentences>",
  "key_differences": ["<difference1>", "<difference2>"]
}

Scoring guide:
- 0.9-1.0: Nearly identical (same geometry, materials, lighting, composition)
- 0.7-0.9: Similar scene with minor rendering differences (timing, camera angle)
- 0.5-0.7: Same type of example but noticeable visual differences
- 0.3-0.5: Same category but significantly different appearance
- 0.0-0.3: Completely different or one image failed to render

Pass threshold: similarity_score >= 0.7`

// ─── parseVerdict ─────────────────────────────────────────────────────────────
// Handles: direct JSON, markdown code block, first JSON object, numeric score fallback.
// Safe parsing only: uses JSON.parse and regex — no dynamic code execution of LLM output.

export function parseVerdict(text: string): Verdict {
  // 1. Try direct JSON parse
  try { return JSON.parse(text) } catch {}

  // 2. Extract from markdown code block: ```json { ... } ```
  const mdMatch = text.match(/```(?:json)?\s*(\{[\s\S]+?\})\s*```/)
  if (mdMatch) { try { return JSON.parse(mdMatch[1]) } catch {} }

  // 3. Extract first { ... } JSON object from plain text
  const objMatch = text.match(/\{[\s\S]+\}/)
  if (objMatch) { try { return JSON.parse(objMatch[0]) } catch {} }

  // 4. Fallback: extract numeric score from text using regex only
  const scoreMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:\/\s*10|out of 10)?/)
  const rawScore = scoreMatch ? parseFloat(scoreMatch[1]) : 0.5
  const normalised = scoreMatch && scoreMatch[0].includes('10') ? rawScore / 10 : rawScore
  const score = Math.min(Math.max(normalised, 0), 1)
  return {
    similarity_score: score,
    verdict: 'inconclusive',
    reasoning: text.slice(0, 200),
    key_differences: []
  }
}

// ─── resizeScreenshot ─────────────────────────────────────────────────────────

export async function resizeScreenshot(inputPath: string, outputPath: string): Promise<boolean> {
  if (!fs.existsSync(inputPath)) return false
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  await sharp(inputPath)
    .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 6 })
    .toFile(outputPath)
  return true
}

// ─── buildBatchRequests ───────────────────────────────────────────────────────

export function buildBatchRequests(
  pairs: Array<{ id: string; portedResized: string; referenceResized: string }>
) {
  return pairs.map(({ id, portedResized, referenceResized }) => ({
    custom_id: id,
    params: {
      model: 'claude-sonnet-4-6',
      max_tokens: 512,
      messages: [{
        role: 'user' as const,
        content: [
          {
            type: 'image' as const,
            source: {
              type: 'base64' as const,
              media_type: 'image/png' as const,
              data: fs.readFileSync(portedResized).toString('base64')
            }
          },
          {
            type: 'image' as const,
            source: {
              type: 'base64' as const,
              media_type: 'image/png' as const,
              data: fs.readFileSync(referenceResized).toString('base64')
            }
          },
          { type: 'text' as const, text: COMPARISON_PROMPT }
        ]
      }]
    }
  }))
}

// ─── submitAndPoll ─────────────────────────────────────────────────────────────
// Splits into 100-item chunks (to stay under 32 MB Anthropic payload limit),
// submits each chunk, polls every 30s until processing_status === 'ended',
// then collects all results.

export async function submitAndPoll(
  anthropic: Anthropic,
  requests: ReturnType<typeof buildBatchRequests>
): Promise<Map<string, any>> {
  const CHUNK_SIZE = 100
  const chunks: (typeof requests)[] = []
  for (let i = 0; i < requests.length; i += CHUNK_SIZE) {
    chunks.push(requests.slice(i, i + CHUNK_SIZE))
  }

  const allResults = new Map<string, any>()

  for (let chunkIdx = 0; chunkIdx < chunks.length; chunkIdx++) {
    const chunk = chunks[chunkIdx]
    console.log(`Submitting batch ${chunkIdx + 1}/${chunks.length} (${chunk.length} requests)...`)

    const batch = await anthropic.messages.batches.create({ requests: chunk })
    console.log(`Batch ID: ${batch.id} — polling every 30s...`)

    let status = batch
    while (status.processing_status !== 'ended') {
      await new Promise(r => setTimeout(r, 30_000))
      status = await anthropic.messages.batches.retrieve(batch.id)
      const counts = status.request_counts
      console.log(`  Status: ${status.processing_status} | succeeded: ${counts.succeeded}, errored: ${counts.errored}, processing: ${counts.processing}`)
    }

    for await (const result of await anthropic.messages.batches.results(batch.id)) {
      allResults.set(result.custom_id, result)
    }
    console.log(`Batch ${chunkIdx + 1} complete. Total collected: ${allResults.size}`)
  }

  return allResults
}
