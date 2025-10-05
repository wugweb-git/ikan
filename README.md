# 🧠 iKan Mental Health PWA

A comprehensive Progressive Web Application for mental health and wellness, built with React, TypeScript, and Supabase.

## 🚀 Quick Start

### Development Mode (Frontend Only)
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at `http://localhost:5173` with offline sample data.

### Full Stack Development

To enable the complete backend functionality:

```bash
# 1. Install Supabase CLI
npm install -g supabase

# 2. Deploy the backend server function
supabase functions deploy server --no-verify-jwt

# 3. Verify deployment
supabase functions logs server

# 4. Test the API
curl -X GET https://jpfvoevxegnknxoqmwye.supabase.co/functions/v1/make-server-cc205da9/health
```

## 🧰 Current Status

- ✅ **Frontend**: Fully functional with offline sample data
- ⚠️ **Backend**: Requires deployment (see above)
- ✅ **Authentication**: Working with Supabase Auth
- ✅ **Payments**: Razorpay integration implemented
- ✅ **PWA Features**: Offline support, installable
- ✅ **Design System**: Complete iKan design tokens

## 🎯 Features

### Core Mental Health Features
- 📊 **Daily Mood Tracking** with journal entries
- 🧠 **Mental Health Assessments** (PHQ-9, GAD-7)
- 🏋️ **Guided Wellness Programs** with purchase flow
- 🤝 **Professional Consultation** directory
- 📚 **Resource Library** with articles and tools

### Technical Features
- 📱 **Progressive Web App** - installable, offline-capable
- 🎨 **iKan Design System** - comprehensive design tokens
- 💳 **Payment Integration** - Razorpay for program purchases
- 🔐 **Authentication** - Supabase Auth with JWT tokens
- 📡 **Offline-First** - works without internet connection
- 🔄 **Real-time Sync** - when backend is available

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with iKan design tokens
- **State**: React Context API
- **Router**: Custom navigation system
- **PWA**: Service worker + manifest

### Backend (Supabase Edge Functions)
- **Runtime**: Deno with Hono framework
- **Database**: Supabase KV store
- **Auth**: Supabase Auth with RLS
- **API**: RESTful endpoints with CORS

### Design System
- **Typography**: Ubuntu font family
- **Colors**: Carefully curated mental health palette
- **Spacing**: 4px grid system
- **Components**: Comprehensive UI component library

## 🛠️ Development

### Error Resolution

If you see "TypeError: Failed to fetch" errors:

1. **Normal in Development**: This is expected when the backend isn't deployed
2. **App Still Works**: All features work with offline sample data
3. **To Fix**: Deploy the backend server (see Quick Start above)

### Project Structure

```
├── components/          # React components
│   ├── screens/        # Main app screens
│   ├── ui/            # Reusable UI components
│   ├── blocks/        # Composite UI blocks
│   └── navigation/    # Navigation components
├── contexts/           # React contexts
├── hooks/             # Custom React hooks
├── lib/               # Utilities and configurations
├── styles/            # Global CSS and design tokens
└── supabase/          # Backend functions and config
```

### Key Technologies
- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling with design tokens
- **Supabase** - Backend as a service
- **Hono** - Edge function framework
- **Razorpay** - Payment processing
- **PWA** - Progressive web app features

## 🧪 Testing

### Authentication
- Demo users available: `demo1@ikan.com` / `demo123`
- Guest mode for exploration
- OAuth providers (when configured)

### Payments
- Razorpay test mode enabled
- Demo credit cards for testing
- Complete purchase flow

### PWA Features
- Install prompt on supported browsers
- Offline functionality
- Push notifications (when permissions granted)

## 📱 Mental Health Focus

This PWA is specifically designed for mental health and wellness:

- **Safe Space**: Non-judgmental, supportive interface
- **Privacy First**: All data encrypted and secure
- **Crisis Support**: Always accessible emergency resources
- **Evidence-Based**: Tools based on clinical research
- **Accessible**: WCAG compliant, screen reader support

## 🔒 Security & Privacy

- ✅ **HTTPS Only**: All communications encrypted
- ✅ **JWT Authentication**: Secure token-based auth
- ✅ **Row Level Security**: Database access controls
- ✅ **Data Minimization**: Only collect necessary data
- ✅ **GDPR Compliant**: Privacy by design

## 🚀 Deployment

See [deploy.md](./deploy.md) for complete deployment instructions.

### Quick Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npx netlify deploy --prod --dir=dist
```

## 📞 Support

For technical issues or mental health resources:
- 📧 Technical: Open an issue in this repository
- 🆘 Crisis: Contact local emergency services
- 📱 Mental Health: [Crisis Text Line](https://www.crisistextline.org/)

---

**Note**: This PWA is designed to complement, not replace, professional mental health care. Always consult qualified professionals for serious mental health concerns.