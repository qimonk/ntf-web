# NSY Tax Freelancer - Cloudflare Pages Configuration

## Build Settings
- **Build Command**: `npm run build`
- **Build Output Directory**: `out`
- **Root Directory**: `/` (leave empty)

## Environment Variables (Optional)
- `NODE_ENV`: `production`

## Framework Preset
- **Framework**: `None`
- **Build Command**: `npm run build`
- **Build Output Directory**: `out`

## Next.js Configuration
The project is configured for static export with:
- `output: 'export'` in next.config.ts
- `trailingSlash: true` for proper routing
- `unoptimized: true` for image handling

## Deployment Instructions
1. Connect your GitHub repository to Cloudflare Pages
2. Use the build settings above
3. Deploy automatically on push to main branch

## Troubleshooting
If deployment fails:
1. Check that all dependencies are in package.json
2. Verify next.config.ts has correct static export settings
3. Ensure all dynamic imports are properly handled
4. Check for any server-side only code in components