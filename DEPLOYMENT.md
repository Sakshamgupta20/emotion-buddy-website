# Deployment Guide - Emotion Buddy Website

Complete guide to deploying the Emotion Buddy website to GitHub Pages with Cloudflare CDN.

## Prerequisites

- [x] GitHub account
- [x] Cloudflare account with domain `emotionbuddy.ai`
- [x] Git installed locally
- [x] Node.js 20+ installed

---

## Part 1: Initial Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository:
   - Name: `emotion-buddy-website`
   - Visibility: Public (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

2. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/emotion-buddy-website.git`)

### 2. Initialize Git and Push Code

```bash
cd /Users/shoyo/personal/emotion-buddy-website

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Emotion Buddy website with Next.js, Tailwind CSS, and GitHub Pages deployment"

# Rename branch to main
git branch -M main

# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/emotion-buddy-website.git

# Push to GitHub
git push -u origin main
```

---

## Part 2: GitHub Pages Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Click **Save**

### 2. Verify GitHub Actions Workflow

1. Go to the **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, you'll see a green checkmark

### 3. Test GitHub Pages URL

Your site will be available at:
```
https://YOUR_USERNAME.github.io/emotion-buddy-website/
```

Visit this URL to verify the deployment works before setting up the custom domain.

---

## Part 3: Cloudflare Setup

### 1. Add Domain to Cloudflare (if not already added)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Add a Site**
3. Enter `emotionbuddy.ai`
4. Select the Free plan
5. Cloudflare will scan your DNS records
6. Update your domain registrar's nameservers to Cloudflare's nameservers
7. Wait for DNS propagation (can take up to 24 hours)

### 2. Configure DNS Records

1. Go to **DNS** > **Records** in Cloudflare
2. Delete any existing A or CNAME records for `@` or `www`
3. Add the following records:

**For apex domain (emotionbuddy.ai):**

| Type | Name | Target | Proxy status |
|------|------|--------|--------------|
| CNAME | @ | YOUR_USERNAME.github.io | Proxied (🟠) |

**For www subdomain (optional):**

| Type | Name | Target | Proxy status |
|------|------|--------|--------------|
| CNAME | www | YOUR_USERNAME.github.io | Proxied (🟠) |

> Replace `YOUR_USERNAME` with your actual GitHub username

4. Click **Save**

### 3. SSL/TLS Configuration

1. Go to **SSL/TLS** > **Overview**
2. Set encryption mode to **Full** (not "Full (strict)")
3. Wait a few minutes for SSL certificate to provision

### 4. Add Redirect Rule (Optional)

To redirect www to non-www (or vice versa):

1. Go to **Rules** > **Page Rules**
2. Create a new rule:
   - URL: `www.emotionbuddy.ai/*`
   - Setting: **Forwarding URL** (301 Permanent Redirect)
   - Destination: `https://emotionbuddy.ai/$1`
3. Save and deploy

---

## Part 4: Verify Custom Domain

### 1. Check CNAME File

The `public/CNAME` file should contain:
```
emotionbuddy.ai
```

This file tells GitHub Pages which custom domain to use.

### 2. Configure GitHub Pages Custom Domain

1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `emotionbuddy.ai`
3. Click **Save**
4. Wait for DNS check to complete
5. Once verified, check **Enforce HTTPS**

### 3. Test Your Website

Visit the following URLs to verify everything works:

- `https://emotionbuddy.ai` ✓
- `http://emotionbuddy.ai` (should redirect to HTTPS) ✓
- `https://www.emotionbuddy.ai` (if configured) ✓
- `https://YOUR_USERNAME.github.io/emotion-buddy-website/` (should redirect to custom domain) ✓

---

## Part 5: Ongoing Deployment

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will:
1. Build the Next.js site
2. Generate static files in the `out` directory
3. Deploy to GitHub Pages
4. Update your live site at `emotionbuddy.ai`

### Manual Deployment

To manually trigger a deployment:
1. Go to **Actions** tab on GitHub
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** > **Run workflow**

---

## Part 6: Troubleshooting

### Issue: Site shows 404 error

**Solution:**
- Verify the GitHub Actions workflow completed successfully
- Check that `basePath` in `next.config.ts` is set to `''` (empty string)
- Ensure `output: 'export'` is set in `next.config.ts`

### Issue: Custom domain not working

**Solution:**
- Verify DNS records in Cloudflare are correct
- Wait for DNS propagation (can take up to 24-48 hours)
- Check that CNAME file exists in `public/` directory
- Verify custom domain is set in GitHub Pages settings

### Issue: CSS not loading

**Solution:**
- Check that `trailingSlash: true` is set in `next.config.ts`
- Verify `images: { unoptimized: true }` is set for static export
- Clear browser cache and try again

### Issue: SSL certificate error

**Solution:**
- Set Cloudflare SSL/TLS mode to **Full** (not Flexible or Full Strict)
- Enable **Enforce HTTPS** in GitHub Pages settings
- Wait a few minutes for SSL certificate to provision

### Issue: Changes not showing after push

**Solution:**
- Check GitHub Actions workflow completed successfully
- Clear Cloudflare cache:
  1. Go to **Caching** > **Configuration**
  2. Click **Purge Everything**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Part 7: Performance Optimization

### Enable Cloudflare Performance Features

1. **Auto Minify**:
   - Go to **Speed** > **Optimization**
   - Enable Auto Minify for JavaScript, CSS, HTML

2. **Brotli Compression**:
   - Go to **Speed** > **Optimization**
   - Enable Brotli

3. **Browser Cache TTL**:
   - Go to **Caching** > **Configuration**
   - Set to **1 month** or **1 year**

4. **Always Online**:
   - Go to **Caching** > **Configuration**
   - Enable **Always Online**

---

## Part 8: Monitoring and Analytics

### GitHub Actions Monitoring

- Check **Actions** tab regularly for failed deployments
- Enable email notifications for workflow failures:
  1. Go to **Settings** > **Notifications**
  2. Enable **GitHub Actions**

### Cloudflare Analytics

- Go to **Analytics & Logs** to view:
  - Traffic stats
  - Security threats
  - Performance metrics
  - Geographic distribution

---

## Part 9: Making Updates

### Update Content

```bash
# Make your changes to files
# For example, edit app/page.tsx

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update homepage hero section"

# Push to GitHub (triggers automatic deployment)
git push
```

### Update Dependencies

```bash
# Update all dependencies
npm update

# Or update specific package
npm update next

# Test build
npm run build

# If successful, commit and push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

## Part 10: Backup and Recovery

### Backup Strategy

1. **Git Repository**: All code is backed up on GitHub
2. **Cloudflare Settings**: Document all DNS and configuration settings
3. **Local Copy**: Keep a local copy of the repository

### Recovery Process

If something goes wrong:

```bash
# Revert to previous commit
git log  # Find the commit hash you want to revert to
git reset --hard COMMIT_HASH
git push -f origin main

# Or create a new branch and test
git checkout -b fix-deployment
# Make fixes
git push -u origin fix-deployment
# Test deployment
# If successful, merge to main
```

---

## Checklist

Use this checklist when deploying:

- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow completed successfully
- [ ] GitHub Pages enabled with source set to "GitHub Actions"
- [ ] Custom domain configured in GitHub Pages settings
- [ ] CNAME file exists in `public/` directory
- [ ] DNS CNAME record added in Cloudflare
- [ ] Cloudflare SSL/TLS set to "Full"
- [ ] HTTPS enforced in GitHub Pages
- [ ] Site accessible at `https://emotionbuddy.ai`
- [ ] Privacy Policy page loads correctly (`/privacy`)
- [ ] Terms of Service page loads correctly (`/terms`)
- [ ] All images and styles loading correctly
- [ ] Mobile responsive design verified
- [ ] Performance optimization enabled in Cloudflare

---

## Support

If you encounter issues:

1. Check this deployment guide
2. Review GitHub Actions logs
3. Check Cloudflare DNS settings
4. Verify Next.js configuration
5. Search GitHub Issues for similar problems

---

## Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Last Updated**: January 6, 2025
**Version**: 1.0.0
