import sharp from 'sharp';
import { mkdirSync } from 'fs';

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#0d0d0d" stop-opacity="1"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle top glow -->
  <ellipse cx="600" cy="0" rx="500" ry="180" fill="rgba(99,102,241,0.07)"/>

  <!-- Border -->
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" rx="0"/>

  <!-- Name -->
  <text x="100" y="265" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-3">Yashasvi Udayan</text>

  <!-- Title -->
  <text x="106" y="325" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="28" font-weight="400" fill="#A1A1A1" letter-spacing="2">AI SYSTEMS ARCHITECT</text>

  <!-- Divider -->
  <rect x="100" y="358" width="56" height="2" fill="rgba(255,255,255,0.25)" rx="1"/>

  <!-- Tagline -->
  <text x="100" y="412" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="22" fill="rgba(255,255,255,0.4)">Building AI systems that ship.</text>

  <!-- Bottom domain -->
  <text x="100" y="545" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="rgba(255,255,255,0.2)">github.com/yashasviudayan-py</text>
</svg>`;

mkdirSync('./public', { recursive: true });
await sharp(Buffer.from(svg))
  .png()
  .toFile('./public/og-image.png');

console.log('✓ OG image generated → public/og-image.png');
