/**
 * Quick comparison script for webgl_shadows and webgl_camera
 * Calls Kimi API to compare ported vs reference screenshots
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const KIMI_BASE = 'https://api.sfkey.cn/v1';
const KIMI_MODEL = 'kimi-k2.5';
const KIMI_MAX_TOKENS = 8192;
const KIMI_PASS_THRESHOLD = 0.7;

const COMPARISON_PROMPT = `You are comparing two screenshots of a 3D WebGL rendering.
Image 1 (PORTED): A Three.js example ported to JSX/Woby reactive syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

First, describe what you see in Image 1 (PORTED): the scene content, objects, colors, lighting, layout.
Then, describe what you see in Image 2 (REFERENCE): the scene content, objects, colors, lighting, layout.
Then, explain the differences between the two in detail.

Respond ONLY with a JSON object (no markdown, no preamble):
{
  "similarity_score": <0.0-1.0>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<detailed explanation of both images and their differences — what matches, what differs, why>",
  "key_differences": ["<specific visual difference with location and description>"]
}

Pass threshold: similarity_score >= 0.7`;

function parseVerdict(content) {
  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return {
      similarity_score: 0,
      verdict: 'inconclusive',
      reasoning: 'Could not parse JSON from response',
      key_differences: []
    };
  }

  try {
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      similarity_score: parsed.similarity_score ?? 0,
      verdict: parsed.verdict ?? 'inconclusive',
      reasoning: parsed.reasoning ?? '',
      key_differences: parsed.key_differences ?? []
    };
  } catch (err) {
    return {
      similarity_score: 0,
      verdict: 'inconclusive',
      reasoning: `JSON parse error: ${err.message}`,
      key_differences: []
    };
  }
}

async function resizeToBase64(filePath) {
  const MAX_DIM = 800;

  const buf = await sharp(filePath)
    .resize(MAX_DIM, MAX_DIM, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toBuffer();
  return buf.toString('base64');
}

async function kimiCompare(portedPath, referencePath) {
  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) {
    throw new Error('KIMI_API_KEY env var is not set');
  }

  console.log(`[kimi] Loading images...`);
  const [ported64, ref64] = await Promise.all([
    resizeToBase64(portedPath),
    resizeToBase64(referencePath),
  ]);

  const body = {
    model: KIMI_MODEL,
    max_tokens: KIMI_MAX_TOKENS,
    messages: [{
      role: 'user',
      content: [
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${ported64}` } },
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${ref64}` } },
        { type: 'text', text: COMPARISON_PROMPT }
      ]
    }]
  };

  console.log(`[kimi] Calling API...`);
  const res = await fetch(`${KIMI_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Kimi API error ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? null;
  const finishReason = data.choices?.[0]?.finish_reason ?? 'unknown';

  if (finishReason === 'length' || content === null) {
    console.warn(`[kimi] finish_reason=${finishReason} — response truncated`);
    return null;
  }

  return parseVerdict(content);
}

async function main() {
  const demos = ['webgl_shadows', 'webgl_camera'];
  const baseDir = 'D:\\Developments\\tslib\\@woby\\three\\playwright.test\\screenshots';

  for (const demo of demos) {
    console.log(`\n========== ${demo} ==========`);
    const portedPath = path.join(baseDir, 'ported', `${demo}.png`);
    const refPath = path.join(baseDir, 'reference', `${demo}.png`);

    if (!fs.existsSync(portedPath)) {
      console.error(`[error] Ported screenshot not found: ${portedPath}`);
      continue;
    }

    if (!fs.existsSync(refPath)) {
      console.error(`[error] Reference screenshot not found: ${refPath}`);
      continue;
    }

    try {
      const verdict = await kimiCompare(portedPath, refPath);
      if (!verdict) {
        console.log(`[result] INCONCLUSIVE - API response truncated`);
        continue;
      }

      console.log(`[result] Score: ${verdict.similarity_score.toFixed(3)}`);
      console.log(`[result] Verdict: ${verdict.verdict.toUpperCase()}`);
      console.log(`[result] Reasoning: ${verdict.reasoning.slice(0, 200)}...`);

      if (verdict.key_differences.length > 0) {
        console.log(`[result] Key differences:`);
        verdict.key_differences.forEach((diff, i) => {
          console.log(`  ${i + 1}. ${diff}`);
        });
      }

      if (verdict.similarity_score >= KIMI_PASS_THRESHOLD) {
        console.log(`[PASS] Score ${verdict.similarity_score.toFixed(3)} >= ${KIMI_PASS_THRESHOLD}`);
      } else {
        console.log(`[FAIL] Score ${verdict.similarity_score.toFixed(3)} < ${KIMI_PASS_THRESHOLD}`);
      }
    } catch (err) {
      console.error(`[error] ${err.message}`);
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
