# Firebase Setup Guide for FunFriday Leaderboard

## ✅ STEP 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `FunFriday` (or your choice)
4. Accept the terms and click **"Create project"**
5. Wait for project creation to complete

---

## ✅ STEP 2: Register Your Web App

1. In Firebase Console, click **"Add app"** or the **"<>"** icon
2. Select **"Web"** platform
3. Enter app nickname: `FunFriday Web`
4. Check **"Also set up Firebase Hosting"** (optional)
5. Click **"Register app"**

---

## ✅ STEP 3: Copy Firebase Configuration

1. You'll see a script with your Firebase config
2. Copy your config (you need these keys):
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

---

## ✅ STEP 4: Add Environment Variables

1. Open `.env.local` file in your project
2. Paste your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## ✅ STEP 5: Enable Authentication

1. In Firebase Console, go to **"Authentication"** (left menu)
2. Click **"Get started"**
3. Enable **"Google"** sign-in:
   - Click on "Google"
   - Toggle it ON
   - Select a support email
   - Click **"Save"**
4. Enable **"Email/Password"** (optional):
   - Click on "Email/Password"
   - Toggle ON both "Email/Password" and "Email link"
   - Click **"Save"**

---

## ✅ STEP 6: Create Firestore Database

1. Go to **"Firestore Database"** (left menu)
2. Click **"Create database"**
3. Choose location (select nearest to you)
4. Select **"Start in test mode"** (for development)
   - ⚠️ **For production**: Use security rules
5. Click **"Create"**

---

## ✅ STEP 7: Set Firestore Security Rules

1. Go to **"Firestore Database"** → **"Rules"** tab
2. Replace the rules with:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - only own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Scores collection - anyone authenticated can read, write own
    match /scores/{scoreId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && 
                       request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth.uid == resource.data.userId;
    }
  }
}
```

3. Click **"Publish"**

---

## ✅ STEP 8: Create Collections

Firestore will auto-create collections when data is added, but you can create them manually:

1. In Firestore, click **"Start collection"**
2. Create **"scores"** collection
3. Add first document (optional):
   ```json
   {
     "userId": "demo-user",
     "userName": "Demo Player",
     "gameType": "memory",
     "score": 1000,
     "timestamp": 2026-02-20T00:00:00Z
   }
   ```

---

## ✅ STEP 9: Test Locally

1. Run development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:5173/auth`
3. Click **"Sign in with Google"** to test
4. Play a game and submit a score
5. Check leaderboard at `http://localhost:5173/leaderboard`

---

## ✅ STEP 10: Deploy to Production

1. Update your `.env` variables in GitHub secrets or hosting platform
2. Push code to GitHub
3. GitHub Actions will auto-deploy
4. Test on live site: `https://funfriday.online`

---

## 🔐 Important Security Notes

- **Test Mode**: Current setup is for development (test mode)
- **Production**: Before going live:
  1. Update Firestore security rules
  2. Restrict authentication to your domain
  3. Set up Cloud Functions for data validation
  4. Monitor Firestore usage

---

## 📊 Firebase Free Tier Limits

| Feature | Free Limit |
|---------|-----------|
| Storage | 1 GB |
| Daily reads | 50,000 |
| Daily writes | 20,000 |
| Realtime connections | 100 |
| Cloud Functions invocations | 2,000,000/month |

---

## 🆘 Troubleshooting

### ❌ "Firebase config is not initialized"
- Make sure `.env.local` has all Firebase keys
- Restart development server after adding `.env.local`
- Check for typos in `VITE_FIREBASE_*` variable names

### ❌ "Authentication not working"
- Ensure Google Sign-In is enabled in Firebase Console
- Check that app URL is whitelisted (for deployed version)
- Clear browser cache and try again

### ❌ "Scores not saving"
- Verify Firestore security rules are published
- Check browser console for errors
- Ensure user is authenticated before submitting score

### ❌ "Leaderboard showing no scores"
- Wait a few seconds after submitting a score (Firestore sync)
- Check Firestore in Firebase Console to verify data exists
- Verify security rules allow reading scores

---

## 📝 Database Schema

### `scores` collection:
```
{
  userId: string (Firebase Auth UID)
  userName: string (Display name)
  userEmail: string (Email)
  gameType: string (memory, rapidfire, emoji, etc.)
  score: number (Points earned)
  timestamp: timestamp (When score was submitted)
}
```

---

## ✨ Features Enabled

✅ **User Authentication**: Google + Email/Password sign-in  
✅ **Score Tracking**: Auto-save game scores  
✅ **Global Leaderboard**: Top 100 all-time scores  
✅ **Game-Specific Leaderboards**: Top scores per game  
✅ **User Stats**: Personal score history  
✅ **Real-time Updates**: Instant leaderboard updates  

---

**Questions?** Check [Firebase Documentation](https://firebase.google.com/docs)
