import { kimiCompare } from './scripts/kimi-utils';

async function testFixedDemos() {
    const demos = [
        'webgl_buffergeometry',
        'webgl_clipping',
        'webgl_decals',
        'webgl_effects_anaglyph',
        'webgl_postprocessing_pixel'
    ];

    console.log('Testing 5 fixed demos...\n');

    const results = [];

    for (const demoId of demos) {
        console.log(`Testing ${demoId}...`);
        try {
            const result = await kimiCompare(demoId);
            results.push({
                id: demoId,
                similarity_score: result.similarity_score,
                status: result.status,
                verdict: result.verdict,
                reasoning: result.reasoning?.substring(0, 200) + '...'
            });
            console.log(`  ✓ Score: ${result.similarity_score.toFixed(2)}, Status: ${result.status}`);
        } catch (error: any) {
            console.error(`  ✗ Error: ${error.message}`);
            results.push({
                id: demoId,
                similarity_score: 0,
                status: 'error',
                error: error.message
            });
        }
    }

    console.log('\n=== COMPARISON RESULTS ===\n');
    console.log(JSON.stringify(results, null, 2));

    // Calculate summary
    const passed = results.filter(r => r.status === 'pass').length;
    const avgScore = results.reduce((sum, r) => sum + r.similarity_score, 0) / results.length;

    console.log(`\n=== SUMMARY ===`);
    console.log(`Passed: ${passed}/${results.length}`);
    console.log(`Average Score: ${avgScore.toFixed(2)}`);

    return results;
}

testFixedDemos().catch(console.error);
