# 🌸 SkillBloom - Digital Marketplace for Indian Women Entrepreneurs

A responsive, mobile-first website designed for Indian housewives and women micro-entrepreneurs to easily start and manage their digital business.

## 🎯 Target Users
- Indian housewives (25–50), mostly semi-educated
- Own basic smartphones (Android)
- Want to earn from home with zero tech skills
- Prefer Hindi/Marathi/Tamil over English

## 🚀 Features

### Core Features
- **Multi-language Support** - English, Hindi, Marathi
- **Mobile-First Design** - Optimized for low-end Android phones
- **Authentication** - Phone OTP + Google Sign-in
- **Product Upload** - Photos, text, and optional voice input
- **Marketplace** - Browse and buy local handmade products
- **Seller Dashboard** - Manage products and orders
- **WhatsApp Integration** - Direct ordering via WhatsApp

### Special Features
- **AI Tag Generator** - Auto-suggested product tags
- **Refer & Earn** - WhatsApp-based referral system
- **Skill Journal** - Progress tracking for sellers
- **Milestone Badges** - Achievement system
- **Floating Help** - WhatsApp support button

## 🎨 Design System

### Colors
- **Indigo Blue** (#3F51B5) - Trust, digital confidence
- **Bright Saffron** (#FFA726) - Energy, entrepreneurship
- **Mint Green** (#A5D6A7) - Growth, freshness

### Typography
- **Primary Font**: Poppins
- **Secondary Font**: Nunito
- **Mobile-optimized** for readability

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Internationalization**: react-i18next
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify ready

## 📱 Pages & Routes

- `/` - Homepage with search and CTAs
- `/shop` - Public marketplace
- `/auth` - Authentication (Phone OTP + Google)
- `/upload` - Add product page
- `/cart` - Shopping cart
- `/checkout` - Order completion
- `/dashboard` - Seller control panel

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skillbloom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication (Phone + Google)
   - Update `src/firebase.js` with your config

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy with Vercel
3. Add environment variables for Firebase

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 🔧 Configuration

### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Phone + Google)
4. Copy config to `src/firebase.js`

### Environment Variables
Create `.env` file:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 📱 Mobile Optimization

- **Touch-friendly** buttons and navigation
- **Large text** for readability
- **Simple navigation** for low-tech users
- **Offline support** with service workers
- **Voice input** capabilities

## 🌍 Internationalization

The app supports three languages:
- **English** (default)
- **Hindi** (हिंदी)
- **Marathi** (मराठी)

Language files are in `src/i18n/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@skillbloom.com or use the floating WhatsApp help button in the app.

---

**Built with ❤️ for Indian women entrepreneurs**
