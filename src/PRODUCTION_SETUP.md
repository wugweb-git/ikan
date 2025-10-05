# iKan PWA Production Setup Guide

## 🚀 Quick Start Checklist

### ✅ Completed Fixes
- [x] Fixed PerformanceMonitor import.meta.env errors
- [x] Created proper security headers configuration (_headers file)
- [x] Moved hardcoded credentials to environment variables
- [x] Added PWA icon placeholders
- [x] Fixed SecurityProvider context access
- [x] Updated CI/CD pipeline for production environment variables

### 🔧 Manual Setup Required

#### 1. Environment Variables Setup
Copy `.env.example` to `.env.local` and configure:

```bash
# Production Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your_production_project_id
VITE_SUPABASE_ANON_KEY=your_production_anon_key
VITE_SUPABASE_URL=https://your_production_project.supabase.co

# Production App Configuration
VITE_APP_URL=https://www.ikan.health
VITE_ENABLE_DEBUG_MODE=false
VITE_ENABLE_ANALYTICS=true
```

#### 2. GitHub Secrets Configuration
Add these secrets to your GitHub repository:

**Staging Environment:**
- `STAGING_SUPABASE_URL`
- `STAGING_SUPABASE_ANON_KEY`
- `STAGING_SUPABASE_PROJECT_ID`

**Production Environment:**
- `PRODUCTION_SUPABASE_URL`
- `PRODUCTION_SUPABASE_ANON_KEY`
- `PRODUCTION_SUPABASE_PROJECT_ID`

#### 3. Replace PWA Icons
Replace these placeholder files with actual icons:
- `/public/pwa-64x64.png` (64x64 PNG)
- `/public/pwa-192x192.png` (192x192 PNG)
- `/public/pwa-512x512.png` (512x512 PNG)
- `/public/maskable-icon-512x512.png` (512x512 maskable PNG)
- `/public/apple-touch-icon.png` (180x180 PNG)
- `/public/screenshot1.png` (540x720 PNG - mobile dashboard)
- `/public/screenshot2.png` (540x720 PNG - assessment flow)
- `/public/screenshot3.png` (1024x768 PNG - desktop view)

#### 4. Clean Up Legacy Files
Remove these misplaced files:
```bash
rm -rf /public/_headers/Code-component-249-*.tsx
```

#### 5. Supabase Production Database Setup

**Configure Row Level Security (RLS):**
```sql
-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE equip_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE equip_user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- User can only access their own data
CREATE POLICY "Users can only view their own profile" ON user_profiles
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only view their own assessments" ON assessment_responses
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only view their own mood entries" ON mood_entries
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only view their own journal entries" ON journal_entries
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only view their own notifications" ON notifications
    FOR ALL USING (auth.uid() = user_id);
```

**Enable Real-time subscriptions:**
```sql
-- Enable real-time for user-specific data
ALTER PUBLICATION supabase_realtime ADD TABLE user_profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE mood_entries;
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
```

#### 6. Deploy Platform Configuration

**For Netlify:**
```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.supabase.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**For Vercel:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 🔒 Security Checklist

### ✅ Completed
- [x] Security headers configured
- [x] Environment variables secured
- [x] Content Security Policy implemented
- [x] HTTPS enforcement ready
- [x] Crisis support always available offline

### 🔧 Manual Verification Required
- [ ] Test PWA installation on iOS and Android
- [ ] Verify offline functionality works
- [ ] Test crisis resources accessibility
- [ ] Confirm push notifications work
- [ ] Run security audit (npm audit)
- [ ] Test on slow 3G connections
- [ ] Verify bundle size < 5MB
- [ ] Run Lighthouse audit (target 90+ scores)

## 🏥 Mental Health Compliance

### ✅ Ready
- [x] Crisis support implemented (988 hotline)
- [x] Privacy policy comprehensive
- [x] Keyword detection for crisis content
- [x] Professional disclaimers clear
- [x] HIPAA-compliant language
- [x] Data encryption enabled

## ⚡ Performance Status

### ✅ Configured
- [x] Lighthouse CI configured
- [x] Performance monitoring enabled
- [x] Bundle size monitoring active
- [x] Mobile optimizations implemented
- [x] Caching strategies configured

## 🚨 Critical Notes

1. **Icon Files**: Replace all `/public/*.png` files with actual icons before production
2. **Environment Variables**: Never commit `.env.local` files
3. **Database Security**: Ensure RLS policies are properly configured
4. **Domain Configuration**: Update all URLs to www.ikan.health
5. **Analytics**: Configure Google Analytics or preferred analytics service

## 📞 Support Contacts

- **Privacy Questions**: privacy@ikan.health
- **Security Issues**: security@ikan.health
- **Technical Support**: support@ikan.health
- **Emergency Crisis Line**: 988 (US) or findahelpline.com (International)

---

## 🎯 Production Deployment Commands

```bash
# 1. Install dependencies
npm ci

# 2. Run production build
npm run build

# 3. Run security audit
npm audit --audit-level high

# 4. Run Lighthouse CI (optional)
npm run lighthouse

# 5. Deploy to production
# (Use your preferred deployment method)
```

**Production is ready when all manual setup steps are completed and environment variables are configured.**