/**
 * Run Kimi comparison for webgl_postprocessing_taa demo and save results
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { kimiCompare } from './kimi-utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const DEMO_ID = 'webgl_postprocessing_taa';
const PORTED_PATH = path.join(ROOT, 'screenshots', 'ported', `${DEMO_ID}.png`);
const REFERENCE_PATH = path.join(ROOT, 'screenshots', 'reference', `${DEMO_ID}.png`);
const OUTPUT_DIR = path.join(ROOT, 'test-results', 'fix-results');
const OUTPUT_PATH = path.join(OUTPUT_DIR, `${DEMO_ID}.json`);

async function main() {
  console.log(`[fix-check] Running Kimi comparison for ${DEMO_ID}`);

  // Load previous score from kimi-comparison-report.json
  const reportPath = path.join(ROOT, 'test-results', 'kimi-comparison-report.json');
  const reportData = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  const previousEntry = reportData.results.find((r: any) => r.id === DEMO_ID);
  const beforeScore = previousEntry?.similarity_score ?? 0;

  console.log(`[fix-check] Previous score: ${beforeScore}`);

  // Run Kimi comparison
  const verdict = await kimiCompare(PORTED_PATH, REFERENCE_PATH);

  if (!verdict) {
    console.error('[fix-check] Kimi comparison returned null (response truncated)');
    process.exit(1);
  }

  console.log(`[fix-check] New score: ${verdict.similarity_score}`);
  console.log(`[fix-check] Verdict: ${verdict.verdict}`);
  console.log(`[fix-check] Reasoning: ${verdict.reasoning}`);

  // Calculate improvement
  const delta = verdict.similarity_score - beforeScore;
  const status = verdict.similarity_score >= 0.7 ? 'fixed' : (delta > 0 ? 'improved' : 'no-change');

  // Save results
  const result = {
    id: DEMO_ID,
    before_score: beforeScore,
    after_score: verdict.similarity_score,
    delta: delta,
    status: status,
    verdict: verdict.verdict,
    reasoning: verdict.reasoning,
    key_differences: verdict.key_differences,
    timestamp: new Date().toISOString()
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));

  console.log(`[fix-check] Results saved to ${OUTPUT_PATH}`);
  console.log(`[fix-check] Summary: ${status} (Δ ${delta.toFixed(2)})`);
}

main().catch(err => {
  console.error('[fix-check] Error:', err);
  process.exit(1);
});