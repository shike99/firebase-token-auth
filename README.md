# Firebase sample

1. make `.env.local` file on root dir
2. start app with `npm run dev`
3. click `sign in` button
4. error occurs when authenticating

## environment variables

```
# put value firebase app sdk config
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# put value from firebase service account json
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

## develop environment

- Node.js
  - v17.1.0
- Next.js
  - 12.1.0
- Next Auth
  - 4.3.0
- React
  - 17.0.2
- Recoil
  - 0.6.1
- TypeScript
  - 4.6.2
- Firebase SDK
  - 9.6.10
- Firebase Admin SDK
  - 10.0.2
