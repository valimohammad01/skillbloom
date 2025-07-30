# 🚀 Deploy SkillBloom on Render

## Prerequisites
- GitHub account
- Render account (free tier available)

## Step-by-Step Deployment

### 1. Push to GitHub
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial SkillBloom commit"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/skillbloom.git
git push -u origin main
```

### 2. Deploy on Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" → "Static Site"**
3. **Connect your GitHub repository**
4. **Configure the deployment:**

   **Build Command:**
   ```bash
   npm run build
   ```

   **Publish Directory:**
   ```
   dist
   ```

   **Environment Variables (Optional):**
   ```
   NODE_VERSION=18.0.0
   ```

5. **Click "Create Static Site"**

### 3. Custom Domain (Optional)
- Go to your site settings
- Add custom domain
- Configure DNS settings

### 4. Environment Variables for Firebase
If you want to use Firebase, add these environment variables in Render:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## Render Configuration Files

### render.yaml
```yaml
services:
  - type: web
    name: skillbloom
    env: static
    buildCommand: npm run build
    staticPublishPath: ./dist
    envVars:
      - key: NODE_VERSION
        value: 18.0.0
```

### public/_redirects
```
/*    /index.html   200
```

## Troubleshooting

### Build Fails
- Check if all dependencies are in package.json
- Ensure Node.js version is compatible
- Check build logs in Render dashboard

### Routing Issues
- Verify _redirects file is in public folder
- Check if React Router is properly configured

### Environment Variables
- Add Firebase config as environment variables
- Restart deployment after adding variables

## Free Tier Limits
- 750 hours/month
- Automatic sleep after 15 minutes of inactivity
- Custom domains supported
- SSL certificates included

## Support
- Render Documentation: https://render.com/docs
- SkillBloom Support: support@skillbloom.com 