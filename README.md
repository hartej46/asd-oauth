# Google Authentication with Express

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create Google OAuth credentials:
   - Open Google Cloud Console > APIs & Services > Credentials.
   - Create an OAuth 2.0 Client ID for a Web application.
   - Add `http://localhost:3000/auth/google/callback` as an authorized redirect URI.
   - Configure the OAuth consent screen.

3. Create local environment variables:

   ```bash
   cp .env.example .env
   ```

4. Put the Google client ID and client secret in `.env`. Replace `SESSION_SECRET` with a long random value.

5. Start the app:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000`.

## Routes

- `/` - sign-in page or signed-in account view
- `/auth/google` - starts Google authentication
- `/auth/google/callback` - Google OAuth callback
- `/profile` - protected JSON profile route
- `POST /auth/logout` - signs out
# asd-oauth
