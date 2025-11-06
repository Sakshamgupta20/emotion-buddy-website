# Emotion Buddy Website

Official website for Emotion Buddy - Your Personal AI Companion for Emotional Wellness.

## Overview

This is the marketing website for the Emotion Buddy mobile app, providing:
- App information and features
- Download links for Android and iOS
- Privacy Policy (required for Google Play Store)
- Terms of Service

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Deployment**: GitHub Pages with Cloudflare CDN
- **CI/CD**: GitHub Actions

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run lint
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
emotion-buddy-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy Policy page
│   ├── terms/             # Terms of Service page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
│   └── images/          # Images and media files
└── .github/
    └── workflows/       # GitHub Actions workflows
```

## Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build the site
npm run build

# The static files will be in the `out` directory
```

## Deployment Setup Guide

### Step 1: GitHub Repository Setup

1. Create a new GitHub repository named `emotion-buddy-website`
2. Initialize git and push your code:

```bash
cd emotion-buddy-website
git init
git add .
git commit -m "Initial commit: Emotion Buddy website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/emotion-buddy-website.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Build and deployment**:
   - Source: **GitHub Actions**
4. Save the settings

The GitHub Actions workflow will automatically run and deploy your site.

### Step 3: Cloudflare Setup

1. **Add Domain to Cloudflare**:
   - Log in to Cloudflare
   - Add `emotionbuddy.ai` as a site
   - Update your domain's nameservers to Cloudflare's

2. **Configure DNS**:
   - Add a **CNAME** record:
     - Name: `@` (or `www`)
     - Target: `YOUR_USERNAME.github.io`
     - Proxy status: Proxied (orange cloud)

3. **SSL/TLS Settings**:
   - Go to **SSL/TLS** > **Overview**
   - Set encryption mode to **Full**

4. **Page Rules** (Optional):
   - Add a page rule to redirect `www` to non-www or vice versa

### Step 4: Update Next.js Configuration

If deploying to a custom domain, ensure `basePath` in `next.config.ts` is set correctly:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Keep empty for custom domain
  trailingSlash: true,
}
```

### Step 5: Verify Deployment

1. Wait for the GitHub Actions workflow to complete (check Actions tab)
2. Visit your GitHub Pages URL: `https://YOUR_USERNAME.github.io/emotion-buddy-website`
3. Once Cloudflare DNS propagates, visit: `https://emotionbuddy.ai`

## Domain Configuration

### For Custom Domain (emotionbuddy.ai)

Add a `CNAME` file to the `public` directory:

```bash
echo "emotionbuddy.ai" > public/CNAME
```

Then commit and push:

```bash
git add public/CNAME
git commit -m "Add CNAME for custom domain"
git push
```

## Environment Variables

No environment variables are required for this static site.

## Privacy Policy & Terms

The Privacy Policy and Terms of Service are based on templates in the mobile app repository:
- `PRIVACY_POLICY_TEMPLATE.md`
- Contact information needs to be updated with actual support email

## Contributing

1. Create a feature branch
2. Make your changes
3. Test the build locally: `npm run build`
4. Submit a pull request

## License

Copyright © 2025 Emotion Buddy. All rights reserved.

## Support

For questions or issues, contact: support@emotionbuddy.ai

## Links

- **Live Site**: https://emotionbuddy.ai
- **Mobile App Repository**: [Link to mobile app repo]
- **Google Play Store**: [Link when available]
- **Apple App Store**: Coming soon
