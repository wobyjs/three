/**
 * Quick test to capture TAA screenshot after fix
 */

const { chromium } = require('playwright');
const path = require('path');

async function captureTAA() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    console.log('Navigating to TAA demo...');
    await page.goto('http://localhost:5177/?demo=webgl_postprocessing_taa', {
        waitUntil: 'networkidle'
    });

    // Wait for canvas to render
    await page.waitForTimeout(3000);

    // Capture screenshot
    const outputPath = path.join(__dirname, 'screenshots', 'ported', 'webgl_postprocessing_taa_fixed.png');
    await page.screenshot({
        path: outputPath,
        fullPage: false
    });

    console.log(`Screenshot saved to: ${outputPath}`);

    await browser.close();
}

captureTAA().catch(console.error);
