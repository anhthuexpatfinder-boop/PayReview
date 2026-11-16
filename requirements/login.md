# Feature Requirement: Login

## 1. User Story
As a registered PayReview user, I want to authenticate into the application using my email address via either a Passkey or a Magic Link, so that I can securely access the PayReview dashboard.

---

## 2. Acceptance Criteria & Specifications

### 2.1 Multi-Step Authentication Flow
1. **Step 1: Email Identification**
   - User navigates to `/login`.
   - User inputs their email address.
   - User submits via "Continue" button or `Enter` key.
   - If the email is valid and registered, the user transitions to Step 2 (Authentication Method).
   - If the input is empty or invalid format, appropriate validation messages appear without dispatching invalid requests.
   - If the email is not registered, the system returns a safe user-facing message.

2. **Step 2: Authentication Options**
   - The user's entered email is clearly displayed.
   - Two authentication options are available:
     - **Option A: Sign in with Passkey**:
       - Initiates browser WebAuthn challenge.
       - Upon successful biometric/security key verification, the backend issues an authenticated session.
       - User is redirected to `/app`.
     - **Option B: Sign in with Magic Link**:
       - User clicks "Sign in with Magic Link".
       - System generates a secure one-time token and sends a magic link email to the registered address.
       - UI confirms: *"We sent a sign-in link to <email>"* with a resend option (cooldown protected).
       - User clicks the magic link (`/auth/verify?token=...`).
       - Upon successful verification, the backend issues an authenticated session.
       - User is redirected to `/app`.

### 2.2 System Configurations & Policies
- **Post-Login Destination**: `/app`
- **Deep Linking / Route Guards**: Unauthenticated users attempting to access protected routes (`/app/*`) are redirected to `/login?returnUrl=...`. Upon successful login, they land directly on their intended destination.
- **Lockout Policy**: None (no account lockout after consecutive failed attempts).
- **MFA Policy**: None (no secondary authenticator app or SMS OTP).
- **Logout Behavior**: Terminating the session invalidates tokens; browser Back navigation does not expose protected pages.